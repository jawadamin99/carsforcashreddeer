import type { MetadataRoute } from "next";

const baseUrl = "https://www.carsforcashreddeer.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/scrap-car-removal/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cash-for-used-cars/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cash-for-junk-cars/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cash-for-scrap-cars/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cash-for-hail-damaged-cars/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cash-for-cars-calgary/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/cash-for-cars-airdrie/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/cash-for-cars-lethbridge/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/how-it-works/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
