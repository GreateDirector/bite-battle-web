import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIRS = ["public", "public/assets", "public/images"];
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const LARGE_FILE_THRESHOLD_BYTES = 500 * 1024;

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

function bytesToMB(bytes) {
  return bytes / (1024 * 1024);
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

  const fileStats = await Promise.all(
    allFiles.map(async (filePath) => {
      const stats = await fs.stat(filePath);
      return {
        path: path.relative(ROOT, filePath),
        sizeBytes: stats.size,
      };
    })
  );

  const totalSizeBytes = fileStats.reduce((sum, file) => sum + file.sizeBytes, 0);
  const largeFiles = fileStats
    .filter((file) => file.sizeBytes > LARGE_FILE_THRESHOLD_BYTES)
    .sort((a, b) => b.sizeBytes - a.sizeBytes);
  const top20 = [...fileStats].sort((a, b) => b.sizeBytes - a.sizeBytes).slice(0, 20);

  console.log("IMAGE REPORT (PNG/JPG/JPEG)");
  console.log(`Total images: ${fileStats.length}`);
  console.log(`Total size (MB): ${bytesToMB(totalSizeBytes).toFixed(2)}`);
  console.log("");
  console.log(`Files larger than 500KB: ${largeFiles.length}`);
  largeFiles.forEach((file) => {
    console.log(`- ${file.path} (${bytesToMB(file.sizeBytes).toFixed(2)} MB)`);
  });
  console.log("");
  console.log("Top 20 largest images:");
  top20.forEach((file) => {
    console.log(`- ${file.path} (${bytesToMB(file.sizeBytes).toFixed(2)} MB)`);
  });
}

main().catch((error) => {
  console.error("Image report failed:", error);
  process.exit(1);
});
