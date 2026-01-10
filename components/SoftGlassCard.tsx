import { ReactNode, forwardRef } from "react";

interface SoftGlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SoftGlassCard = forwardRef<HTMLDivElement, SoftGlassCardProps>(
  ({ children, className = "", style }, ref) => {
    return (
      <div
        ref={ref}
        className={`soft-glass rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

SoftGlassCard.displayName = "SoftGlassCard";

export default SoftGlassCard;

