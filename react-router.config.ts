import type { Config } from "@react-router/dev/config";

const basenameHelper = (path?: string) =>
  !path || path === "/" ? "/" : `/${path.trim().replace(/^\/+|\/+$/g, "")}`;

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: process.env.VITE_BASE_PATH,
} satisfies Config;
