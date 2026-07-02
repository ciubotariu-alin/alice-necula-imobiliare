import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

function Stars({ n }: { n: number }) {
  const full = Math.round(n);
  return (
    <span className="stars" aria-label={`${n} din 5 stele`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function Reviews() {
  return (
    <div>
      <div className="rating-head">
        <div className="pill">Recenzii Google</div>
        <div style={{ margin: "14px 0 4px", fontSize: "2rem", fontWeight: 700, color: "var(--navy)" }}>
          {site.googleRating.toFixed(1)}
        </div>
        <Stars n={site.googleRating} />
        <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 6 }}>
          pe baza a {site.googleReviews} de recenzii reale
        </div>
      </div>
      <div className="reviews-row">
        {reviews.slice(0, 4).map((r) => (
          <article className="review-card" key={r.author}>
            <div className="review-top">
              <span className="avatar">{r.initial}</span>
              <div>
                <div className="review-name">{r.author}</div>
                <div className="review-date">{r.date}</div>
              </div>
            </div>
            <Stars n={r.rating} />
            <p className="review-text" style={{ marginTop: 8 }}>
              {r.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
