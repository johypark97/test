import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("a", "routes/a.tsx"),
] satisfies RouteConfig;
