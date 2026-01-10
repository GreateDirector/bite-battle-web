import Image from "next/image";

interface MapFieldOverlayProps {
  imageSrc: string;
  alt: string;
  top: string;
  left: string;
  width?: number;
  height?: number;
}

export default function MapFieldOverlay({
  imageSrc,
  alt,
  top,
  left,
  width = 115,
  height = 115,
}: MapFieldOverlayProps) {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{ top, left }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-[115px] h-auto"
      />
    </div>
  );
}

