/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import createNextIntlPlugin from "next-intl/plugin";
import "./src/env.js";

/** @type {import('next').NextConfig} */
const config = {
  // 你的其他 Next.js 配置
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(config);
