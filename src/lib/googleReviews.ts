import { reviews as fallbackReviews, type Review } from "@/data/reviews";
import { site } from "@/data/site";

export type ReviewsData = {
  rating: number;
  total: number;
  reviews: Review[];
  source: "google" | "fallback";
};

type GooglePlace = {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string };
    relativePublishTimeDescription?: string;
  }>;
};

// Preia recenziile reale din Google (Places API New). Dacă lipsește configurarea
// sau apelul eșuează, revine la recenziile scrise în cod — situl rămâne mereu plin.
export async function getReviews(): Promise<ReviewsData> {
  const fallback: ReviewsData = {
    rating: site.googleRating,
    total: site.googleReviews,
    reviews: fallbackReviews,
    source: "fallback",
  };

  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return fallback;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=ro`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        // Reîmprospătează cel mult o dată pe zi (nu la fiecare vizită) —
        // rămâne lejer în limita gratuită Google.
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return fallback;

    const data = (await res.json()) as GooglePlace;

    const mapped: Review[] = (data.reviews ?? [])
      .map((r) => {
        const author = r.authorAttribution?.displayName?.trim() || "Client Google";
        const text = r.text?.text || r.originalText?.text || "";
        return {
          author,
          initial: author.charAt(0).toUpperCase() || "•",
          date: r.relativePublishTimeDescription || "",
          rating: r.rating ?? 5,
          text,
        };
      })
      .filter((r) => r.text.length > 0);

    if (!mapped.length) return fallback;

    return {
      rating: data.rating ?? site.googleRating,
      total: data.userRatingCount ?? site.googleReviews,
      reviews: mapped,
      source: "google",
    };
  } catch {
    return fallback;
  }
}
