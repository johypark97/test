import type { Config } from "@react-router/dev/config";

console.log(`import.meta.env.BASE_URL: ${import.meta.env.BASE_URL}`);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: import.meta.env.BASE_URL,
} satisfies Config;

// basename: process.env.VITE_BASE_PATH ?? "/", - OK
// basename: process.env.VITE_BASE_PATH || "/", - OK 처음에는 안됐는데 왜 되는거야
// no basename: - failed
// import.meta.env.BASE_URL: failed
