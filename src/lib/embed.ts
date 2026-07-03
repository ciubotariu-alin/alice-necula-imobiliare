// Transformă un link YouTube/Vimeo într-un URL care poate fi încorporat (iframe).
// Acceptă și link-uri normale copiate din bara de adrese.
export function embedUrl(url?: string | null): string | null {
  if (!url) return null;
  const u = url.trim();

  // YouTube: youtu.be/ID, watch?v=ID, /embed/ID, /shorts/ID
  const yt =
    u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;

  // Vimeo: vimeo.com/ID
  const vimeo = u.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return null;
}
