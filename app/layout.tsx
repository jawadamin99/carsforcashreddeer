import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.carsforcashreddeer.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cash for Cars Red Deer | Top Dollar + Free Towing Today",
  description:
    "Get cash for cars Red Deer, AB. Any make, any condition, running or not. Free towing, same-day pickup and payment on the spot. Get your instant quote now.",
  alternates: { canonical: "https://www.carsforcashreddeer.ca/" },
  openGraph: {
    title: "Cash for Cars Red Deer | Top Dollar + Free Towing Today",
    description:
      "Get cash for cars Red Deer, AB. Any make, any condition, running or not. Free towing, same-day pickup and payment on the spot. Get your instant quote now.",
    url: "/",
    siteName: "Cars for Cash Red Deer",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/social-share.png",
        width: 1200,
        height: 630,
        alt: "Cars for Cash Red Deer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Cars Red Deer | Top Dollar + Free Towing Today",
    description:
      "Any make, any condition. Get a fast cash offer with free towing in Red Deer.",
    images: ["/social-share.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
