import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: process.env.VITE_BASE_PATH || "/",
} satisfies Config;

// basename: process.env.VITE_BASE_PATH ?? "/", - OK
// basename: process.env.VITE_BASE_PATH || "/", - OK 처음에는 안됐는데 왜 되는거야
// no basename: - failed
