import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const TARGET_DIRS = ["public", "public/assets", "public/images"];
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 80;

async function listImageFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listImageFiles(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function ensureWebp(sourcePath) {
  const dirName = path.dirname(sourcePath);
  const baseName = path.basename(sourcePath, path.extname(sourcePath));
  const targetPath = path.join(dirName, `${baseName}.webp`);

  try {
    await fs.access(targetPath);
    return { sourcePath, targetPath, status: "skipped" };
  } catch {
    // continue to convert
  }

  await sharp(sourcePath).webp({ quality: QUALITY }).toFile(targetPath);
  return { sourcePath, targetPath, status: "converted" };
}

async function main() {
  const seen = new Set();
  const allFiles = [];

  for (const target of TARGET_DIRS) {
    const fullDir = path.join(ROOT, target);
    try {
      const stats = await fs.stat(fullDir);
      if (!stats.isDirectory()) continue;
    } catch {
      continue;
    }

    const files = await listImageFiles(fullDir);
    for (const file of files) {
      if (!seen.has(file)) {
        seen.add(file);
        allFiles.push(file);
      }
    }
  }

  const results = [];
  for (const filePath of allFiles) {
    try {
      const result = await ensureWebp(filePath);
      results.push(result);
    } catch (error) {
      results.push({ sourcePath: filePath, status: "failed", error });
    }
  }

  const converted = results.filter((item) => item.status === "converted");
  const skipped = results.filter((item) => item.status === "skipped");
  const failed = results.filter((item) => item.status === "failed");

  console.log(`Converted: ${converted.length}`);
  converted.forEach((item) => {
    console.log(`- ${path.relative(ROOT, item.sourcePath)} -> ${path.relative(ROOT, item.targetPath)}`);
  });

  console.log(`\nSkipped (already exists): ${skipped.length}`);
  skipped.forEach((item) => {
    console.log(`- ${path.relative(ROOT, item.sourcePath)} -> ${path.relative(ROOT, item.targetPath)}`);
  });

  if (failed.length > 0) {
    console.log(`\nFailed: ${failed.length}`);
    failed.forEach((item) => {
      console.log(`- ${path.relative(ROOT, item.sourcePath)} (${item.error?.message ?? "unknown error"})`);
    });
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Image conversion failed:", error);
  process.exit(1);
});
