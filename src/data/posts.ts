import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  body: string; // conținutul articolului, în markdown
};

const dir = path.join(process.cwd(), "content", "blog");

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value ? String(value) : "";
}

// Articolele sunt editabile din panoul /admin (content/blog/*.md).
function loadPosts(): Post[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  const loaded = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: (data.title as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
      date: normalizeDate(data.date),
      category: (data.category as string) ?? "",
      image: (data.image as string) ?? "",
      body: content,
    } satisfies Post;
  });

  // cele mai noi primele
  return loaded.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const posts: Post[] = loadPosts();

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
