import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { posts, getPost } from "@/data/posts";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Articol" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date || undefined,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = marked.parse(post.body) as string;
  const dateLabel = post.date
    ? new Date(post.date).toLocaleDateString("ro-RO", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          {post.category && (
            <div className="pill" style={{ marginBottom: 16 }}>
              {post.category}
            </div>
          )}
          <h1>{post.title}</h1>
          {dateLabel && <p>{dateLabel}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container article">
          {post.image && <img src={post.image} alt={post.title} className="article-hero" />}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
          <div style={{ marginTop: 40 }}>
            <Link href="/blog" className="btn btn-ghost">
              ← Toate articolele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
