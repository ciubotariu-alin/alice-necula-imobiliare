import { IconImage } from "./icons";

type Props = {
  label?: string;
  variant?: "default" | "gold" | "navy";
  className?: string;
  showIcon?: boolean;
};

/**
 * Elegant image placeholder. Replace these with real photos by swapping the
 * component for an <img>/next Image once assets are available.
 */
export default function Placeholder({
  label,
  variant = "default",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <div className={`ph ${variant === "default" ? "" : variant} ${className}`}>
      <div className="ph-inner">
        {showIcon && <IconImage />}
        {label && <div className="ph-label">{label}</div>}
      </div>
    </div>
  );
}
