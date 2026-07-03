export type VideoEmbed = {
  src: string; // URL care poate fi pus într-un <iframe>
  portrait: boolean; // true pentru TikTok (format vertical 9:16)
};

// Transformă un link YouTube / Vimeo / TikTok într-un player încorporabil.
// Acceptă link-uri normale copiate din bara de adrese (cu tot cu parametri).
export function videoEmbed(url?: string | null): VideoEmbed | null {
  if (!url) return null;
  const u = url.trim();

  // YouTube: youtu.be/ID, watch?v=ID, /embed/ID, /shorts/ID
  const yt = u.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i,
  );
  if (yt) return { src: `https://www.youtube.com/embed/${yt[1]}`, portrait: false };

  // Vimeo: vimeo.com/ID
  const vimeo = u.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vimeo) return { src: `https://player.vimeo.com/video/${vimeo[1]}`, portrait: false };

  // TikTok: .../@user/video/ID, /v/ID, /embed/v2/ID, /player/v1/ID
  const tiktok = u.match(
    /tiktok\.com\/(?:@[\w.-]+\/video\/|v\/|embed\/v2\/|player\/v1\/)(\d+)/i,
  );
  if (tiktok) return { src: `https://www.tiktok.com/player/v1/${tiktok[1]}`, portrait: true };

  return null;
}
