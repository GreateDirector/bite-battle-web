import Image from "next/image";

interface MapFieldOverlayProps {
  imageSrc: string;
  alt: string;
  top: string;
  left: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function MapFieldOverlay({
  imageSrc,
  alt,
  top,
  left,
  width = 115,
  height = 115,
  className = "",
}: MapFieldOverlayProps) {
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{ top, left }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-[115px] h-auto"
        loading="lazy"
      />
    </div>
  );
}

