import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  plain?: boolean;
};

export default function SectionTitle({ eyebrow, title, lead, center, plain }: Props) {
  return (
    <div className={`head-block ${center ? "center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${center ? "" : "left"}`}>{eyebrow}</span>}
      <h2 className={`section-title ${plain ? "plain" : ""}`}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
