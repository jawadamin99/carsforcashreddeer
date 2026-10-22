import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, CarFront, Check, Clock3, Handshake, HeartHandshake, Home, Leaf, MapPin, MessageSquareQuote, Recycle, Scale, ShieldCheck, Truck, Wrench } from "lucide-react";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "About Cars for Cash Red Deer | Local Car Buyers",
  description: "Meet Cars for Cash Red Deer, a local Central Alberta car buyer. Learn how we work, what we promise every seller, and why Red Deer drivers trust us.",
  alternates: { canonical: "https://www.carsforcashreddeer.ca/about/" },
  openGraph: { title: "About Cars for Cash Red Deer | Local Car Buyers", description: "A local Central Alberta car buyer built around clear offers, free towing and respectful service.", url: "https://www.carsforcashreddeer.ca/about/", siteName: "Cars for Cash Red Deer", locale: "en_CA", type: "website", images: [{ url: "/social-share.png", width: 1200, height: 630, alt: "Cars for Cash Red Deer" }] },
  twitter: { card: "summary_large_image", title: "About Cars for Cash Red Deer", description: "Meet the local Central Alberta vehicle buyers.", images: ["/social-share.png"] },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.carsforcashreddeer.ca/about/#page",
  url: "https://www.carsforcashreddeer.ca/about/",
  name: "About Cars for Cash Red Deer",
  description: "The story, service promises and responsible vehicle handling practices of Cars for Cash Red Deer.",
  about: { "@id": "https://www.carsforcashreddeer.ca/#business" },
  breadcrumb: { "@id": "https://www.carsforcashreddeer.ca/about/#breadcrumb" },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": "https://www.carsforcashreddeer.ca/#business",
  name: "Cars for Cash Red Deer",
  url: "https://www.carsforcashreddeer.ca/",
  address: { "@type": "PostalAddress", streetAddress: "74C Clearview Dr", addressLocality: "Red Deer", addressRegion: "AB", postalCode: "T4E 0A1", addressCountry: "CA" },
  areaServed: ["Red Deer", "Central Alberta", "Calgary", "Airdrie", "Lethbridge"],
};
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": "https://www.carsforcashreddeer.ca/about/#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.carsforcashreddeer.ca/" }, { "@type": "ListItem", position: 2, name: "About", item: "https://www.carsforcashreddeer.ca/about/" }] };

const promises = [
  { icon: Scale, title: "A clear, firm offer", text: "We explain the vehicle's metal value, useful parts, resale potential and the effect of damage. If the car matches your description, the offer is what we pay." },
  { icon: Truck, title: "No hidden fees", text: "Towing is free. There are no fuel charges, difficult-access fees or surprise deductions at pickup." },
  { icon: Banknote, title: "Payment before it leaves", text: "You are paid at pickup. You never hand over your vehicle and wait for the money to arrive later." },
  { icon: HeartHandshake, title: "Advice—even if you sell elsewhere", text: "If a private sale or inexpensive repair makes more sense, we will say so. Trust matters more than winning one deal." },
  { icon: Clock3, title: "Respect for time and property", text: "We arrive in the booked window, communicate changes and leave your driveway the way we found it." },
];

export default function AboutPage() {
  return <main className="about-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <section className="about-hero"><div className="about-hero-image" aria-hidden="true"><Image src="/assets/2016-ford-f160.jpeg" alt="" fill priority sizes="100vw" className="cover-image" /></div><div className="about-hero-overlay" aria-hidden="true" /><div className="page-shell about-hero-inner"><SiteHeader /><div className="about-hero-copy"><nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/"><Home aria-hidden="true" /> Home</Link><span>/</span><span>About</span></nav><span className="eyebrow">Local car buyers. Straight answers.</span><h1>About Cars for Cash <em>Red Deer</em></h1><p>We built a simpler, fairer way for Central Alberta drivers to sell unwanted vehicles—whatever the make, age or condition.</p><div><Link className="primary-button" href="/#quote">Talk to our team <ArrowRight aria-hidden="true" /></Link><Link className="text-link" href="/how-it-works/">See how it works <ArrowRight aria-hidden="true" /></Link></div></div><div className="about-hero-note"><MapPin aria-hidden="true" /><span>Local base</span><strong>74C Clearview Dr</strong><small>Red Deer, Alberta T4E 0A1</small></div></div></section>

    <section className="about-intro section-pad"><div className="page-shell about-intro-grid"><div><span className="eyebrow dark">Why we exist</span><h2>Selling an unwanted car was harder than it needed to be.</h2></div><div><p className="lead">Private sales dragged on for weeks, trade-in offers were low, and owners of broken-down vehicles were often told to pay someone to take them away.</p><p>Cars for Cash Red Deer is a local Central Alberta business that buys cars, trucks, SUVs and vans in any condition. We started because sellers deserved a simpler, fairer option.</p></div></div></section>

    <section className="about-story section-pad"><div className="page-shell about-story-grid"><div className="about-story-photo"><Image src="/assets/2017 Chevy Silverado.jpeg" alt="Vehicle handled by Cars for Cash Red Deer" fill sizes="(max-width: 800px) 100vw, 46vw" className="cover-image" /></div><div><span className="eyebrow">Our story</span><h2>Built here, for drivers here.</h2><p><strong>For more than 10 years,</strong> Cars for Cash Red Deer has helped Central Alberta drivers move on from vehicles they no longer want, need or can justify repairing.</p><p>We built the business around a straightforward idea: selling a car should not mean weeks of listings, strangers at your door or a surprise towing bill. Our team gives sellers a clear offer, arranges pickup and completes the handover without turning a simple sale into another project.</p><p>That local experience matters. We understand the vehicles, weather and distances that shape driving in Alberta—from high-kilometre commuter cars and hail-damaged SUVs to work trucks and vehicles parked on rural acreages. Today, we serve Red Deer and nearby communities with daily pickup routes extending to Calgary, Airdrie and Lethbridge.</p><address><MapPin aria-hidden="true" /> 74C Clearview Dr, Red Deer, AB T4E 0A1</address></div></div></section>

    <section className="about-promises section-pad"><div className="page-shell"><div className="about-heading"><span className="eyebrow dark">The standard on every pickup</span><h2>What we promise every seller</h2></div><div className="about-promise-list">{promises.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="about-responsible section-pad"><div className="page-shell about-responsible-grid"><div><Recycle aria-hidden="true" /><span className="eyebrow">Every vehicle gets a responsible next step</span><h2>How we handle vehicles responsibly</h2><p>Repairable cars are reconditioned and resold, helping keep affordable transportation available in Alberta.</p><p>End-of-life vehicles go to licensed recyclers who drain and recycle fluids, process batteries and tires through approved programs, salvage usable parts and return metal to manufacturing. Nothing ends up abandoned in a field.</p></div><div className="about-cycle"><article><Wrench aria-hidden="true" /><strong>Repair</strong><span>Recondition viable vehicles</span></article><article><CarFront aria-hidden="true" /><strong>Reuse</strong><span>Recover useful parts</span></article><article><Leaf aria-hidden="true" /><strong>Recycle</strong><span>Process fluids, tires and metal</span></article></div></div></section>

    <section className="about-local section-pad"><div className="about-local-photo" aria-hidden="true"><Image src="/assets/2011-mitsubishi-lancer.jpeg" alt="" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" /></div><div className="page-shell about-local-grid"><div /><div><span className="eyebrow">Accountable in our own community</span><h2>Why local matters</h2><p>We live and work in Central Alberta. We know the neighbourhoods, back lanes and acreage roads. We know what hail season does to cars around Calgary and Airdrie, and what years of road salt can do to a frame.</p><p>Being local also means being accountable: our name is on every bill of sale, and our reviews are public.</p><div className="about-local-points"><span><Check aria-hidden="true" /> Local roads and access knowledge</span><span><Check aria-hidden="true" /> Regional vehicle-market experience</span><span><Check aria-hidden="true" /> A real Red Deer business address</span></div></div></div></section>

    <section className="about-reviews section-pad"><div className="page-shell"><div className="about-review-heading"><MessageSquareQuote aria-hidden="true" /><span className="eyebrow dark">What our customers say</span><h2>Real words from real sellers.</h2><p>Recent customer experiences shared through our Google Business Profile.</p></div><div className="about-review-list"><blockquote><MessageSquareQuote aria-hidden="true" /><p>Fantastic experience, highly recommend. Paid what they said over the phone, anyone any calgary should use these guys to pick up their junk cars!!</p><footer>Brodie Sauer</footer></blockquote><blockquote><MessageSquareQuote aria-hidden="true" /><p>They came on time and paid what the promised on the phone i highly recommend them to anyone want to sell their junk cars for cash.</p><footer>Dunsin Adefisayo</footer></blockquote><blockquote><MessageSquareQuote aria-hidden="true" /><p>Great experience, quick and easy. Took my truck same day and paid same day</p><footer>Kaeleb Askes</footer></blockquote></div></div></section>

    <section className="about-services section-pad" id="how-it-works"><div className="page-shell"><div className="about-heading light"><span className="eyebrow">Ways we can help</span><h2>Our services</h2></div><div className="about-service-links"><Link href="/scrap-car-removal/"><Truck aria-hidden="true" /><span>Scrap car removal</span><ArrowRight aria-hidden="true" /></Link><Link href="/cash-for-used-cars/"><CarFront aria-hidden="true" /><span>Cash for used cars</span><ArrowRight aria-hidden="true" /></Link><Link href="/cash-for-junk-cars/"><Wrench aria-hidden="true" /><span>Cash for junk cars</span><ArrowRight aria-hidden="true" /></Link><Link href="/cash-for-scrap-cars/"><Scale aria-hidden="true" /><span>Cash for scrap cars</span><ArrowRight aria-hidden="true" /></Link><Link href="/cash-for-hail-damaged-cars/"><ShieldCheck aria-hidden="true" /><span>Cash for hail damaged cars</span><ArrowRight aria-hidden="true" /></Link></div><p className="about-process-link">See how the process works on our <Link href="/how-it-works/">How It Works page</Link>, or visit the <Link href="/">cash for cars Red Deer</Link> homepage.</p></div></section>

    <section className="about-contact"><div className="page-shell about-contact-grid"><Handshake aria-hidden="true" /><div><span className="eyebrow">Talk to us</span><h2>Have a car you want gone—or just a question?</h2><p>We are happy to help you understand what it is worth and what your options are.</p></div><div><Link className="primary-button" href="/#quote">Request a free quote <ArrowRight aria-hidden="true" /></Link><Link className="text-link" href="/contact/">Send us a message <ArrowRight aria-hidden="true" /></Link></div></div></section>

    <footer className="site-footer"><div className="page-shell footer-grid"><div className="footer-brand"><Image src="/assets/carsfircashreddeer-logo.png" width={2172} height={724} alt="Cars for Cash Red Deer" /><p>Local, straightforward vehicle buying across Red Deer and Central Alberta.</p></div><div><h2>Contact</h2><a href="tel:[PHONE]">[PHONE]</a><span>74C Clearview Dr, Red Deer, AB T4E 0A1</span><span>Open daily, 7:00 AM–11:00 PM</span></div><div><h2>Services</h2><Link href="/scrap-car-removal/">Scrap Car Removal</Link><Link href="/cash-for-used-cars/">Cash for Used Cars</Link><Link href="/cash-for-junk-cars/">Cash for Junk Cars</Link><Link href="/cash-for-scrap-cars/">Cash for Scrap Cars</Link><Link href="/cash-for-hail-damaged-cars/">Hail Damaged Cars</Link></div><div><h2>Locations</h2><Link href="/cash-for-cars-calgary/">Calgary</Link><Link href="/cash-for-cars-airdrie/">Airdrie</Link><Link href="/cash-for-cars-lethbridge/">Lethbridge</Link></div></div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Cars for Cash Red Deer.</span><span>Clear offer. Free towing. Respectful service.</span></div></footer>
  </main>;
}
