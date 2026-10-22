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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "LocalBusiness"],
  "@id": `${siteUrl}/#business`,
  name: "Cars for Cash Red Deer",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/carsfircashreddeer-logo.png`,
  image: `${siteUrl}/assets/2011-mitsubishi-lancer.jpeg`,
  telephone: "[PHONE]",
  address: {
    "@type": "PostalAddress",
    streetAddress: "74C Clearview Dr",
    addressLocality: "Red Deer",
    addressRegion: "AB",
    postalCode: "T4E 0A1",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "23:00",
    },
  ],
  areaServed: [
    "Red Deer",
    "Sylvan Lake",
    "Blackfalds",
    "Lacombe",
    "Penhold",
    "Innisfail",
    "Springbrook",
    "Gasoline Alley",
    "Red Deer County",
  ],
  priceRange: "$$",
};

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
        url: "/assets/2011-mitsubishi-lancer.jpeg",
        width: 1600,
        height: 1200,
        alt: "Vehicle ready for free towing in Red Deer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Cars Red Deer | Top Dollar + Free Towing Today",
    description:
      "Any make, any condition. Get a fast cash offer with free towing in Red Deer.",
    images: ["/assets/2011-mitsubishi-lancer.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
