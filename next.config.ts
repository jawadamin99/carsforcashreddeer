import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "carsforcashreddeer.ca" }],
        destination: "https://www.carsforcashreddeer.ca/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
