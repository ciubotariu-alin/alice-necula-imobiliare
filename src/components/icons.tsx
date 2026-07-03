import type { SVGProps, ComponentType } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.6l.4-3h-3V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.3v3h2.5v8h2.7z" />
    </svg>
  );
}
export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconLinkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.5v9H4v-9h2.5zM5.2 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 17.5h-2.5v-4.6c0-1.2-.5-1.9-1.5-1.9-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v4.5H11.8s0-7.6 0-9h2.5v1.3c.3-.6 1-1.4 2.5-1.4 1.9 0 3.2 1.2 3.2 3.8v5.3z" />
    </svg>
  );
}
export function IconYoutube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 8.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16 5.1 12 5.1 12 5.1s-4 0-6.8.2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2.2 9.8 2.2 11.5v1c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.7.8 2.2.9 1.6.2 6.6.2 6.6.2s4 0 6.8-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1c0-1.7-.2-3.3-.2-3.3zM10 14.6V9.4l4.2 2.6L10 14.6z" />
    </svg>
  );
}

export function IconTiktok(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.3 1.5.9 2.6 2 3.4.7.5 1.5.8 2.5.9v2.6c-1.4 0-2.7-.4-3.9-1.1v5.7c0 1.3-.4 2.5-1.1 3.5-1 1.5-2.7 2.5-4.6 2.5-2.9 0-5.3-2.3-5.3-5.2 0-2.7 2-4.9 4.6-5.2.3 0 .6-.1.9 0v2.7c-.3-.1-.6-.1-.9-.1-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h3.3z" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function IconBed(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M3 18V8m0 4h18M21 18v-4a3 3 0 00-3-3H3" />
      <path d="M7 11V9a2 2 0 012-2h3" />
    </svg>
  );
}
export function IconBath(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3z" />
      <path d="M6 12V6a2 2 0 012-2 2 2 0 012 2" />
      <path d="M9 6h2" />
    </svg>
  );
}
export function IconRuler(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="1" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </svg>
  );
}
export function IconHouse(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}
export function IconImage(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.8" />
      <path d="M21 16l-5-5-6 6-3-3-4 4" />
    </svg>
  );
}
export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5V19a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

export const socialIcons: Record<string, ComponentType<IconProps>> = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  youtube: IconYoutube,
  tiktok: IconTiktok,
};
