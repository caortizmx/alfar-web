import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {} // ✅ recomendado en dev con Next 16 + next-intl
};

export default withNextIntl(nextConfig);