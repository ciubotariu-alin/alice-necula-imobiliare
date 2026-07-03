import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Placeholder from "@/components/Placeholder";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  description:
    "Amarant & cuișoare — chestii imobiliare pe înțelesul tuturor: strategie de preț, pregătirea casei, cartierele din nordul Bucureștiului.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="pill" style={{ marginBottom: 16 }}>Blog</div>
          <h1>Amarant &amp; cuișoare</h1>
          <p>Chestii imobiliare pe înțelesul tuturor — din experiența reală a pieței.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Articole" title="Ultimele articole" />
          <div className="grid grid-2">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="property-card" key={post.slug}>
                <div className="property-media">
                  <span className="badge gold" style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                    {post.category}
                  </span>
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="property-photo" />
                  ) : (
                    <Placeholder showIcon />
                  )}
                </div>
                <div className="property-body">
                  <div className="review-date" style={{ marginBottom: 8 }}>
                    {new Date(post.date).toLocaleDateString("ro-RO", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="property-title" style={{ fontSize: "1.15rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.95rem" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
