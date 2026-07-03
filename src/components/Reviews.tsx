import { getReviews } from "@/lib/googleReviews";

function Stars({ n }: { n: number }) {
  const full = Math.round(n);
  return (
    <span className="stars" aria-label={`${n} din 5 stele`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default async function Reviews() {
  const { rating, total, reviews } = await getReviews();

  return (
    <div>
      <div className="rating-head">
        <div className="pill">Recenzii Google</div>
        <div style={{ margin: "14px 0 4px", fontSize: "2rem", fontWeight: 700, color: "var(--navy)" }}>
          {rating.toFixed(1)}
        </div>
        <Stars n={rating} />
        <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 6 }}>
          pe baza a {total} de recenzii reale
        </div>
      </div>
      <div className="reviews-row">
        {reviews.slice(0, 4).map((r) => (
          <article className="review-card" key={r.author + r.date}>
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
