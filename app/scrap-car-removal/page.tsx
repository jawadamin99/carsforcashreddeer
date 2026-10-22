import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  CalendarCheck,
  CarFront,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Droplets,
  Factory,
  FileCheck2,
  Gauge,
  Hammer,
  Home,
  KeyRound,
  Leaf,
  MapPin,
  PackageOpen,
  Phone,
  ShieldCheck,
  Snowflake,
  Timer,
  Truck,
  UserRoundCheck,
  Warehouse,
  Wrench,
} from "lucide-react";
import FaqList, { type FaqItem } from "../components/faq-list";
import QuoteForm from "../components/quote-form";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Free Scrap Car Removal Red Deer | Same-Day Pickup + Cash",
  description:
    "Free scrap car removal Red Deer. We tow your old, dead or abandoned car the same day, handle the paperwork, recycle it responsibly and pay you cash.",
  alternates: { canonical: "https://www.carsforcashreddeer.ca/scrap-car-removal/" },
  openGraph: {
    title: "Free Scrap Car Removal Red Deer | Same-Day Pickup + Cash",
    description:
      "Free towing for old, dead or abandoned cars in Red Deer, with paperwork help and responsible recycling.",
    url: "https://carsforcashreddeer.ca/scrap-car-removal/",
    siteName: "Cars for Cash Red Deer",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/assets/2011-mitsubishi-lancer.jpeg",
        width: 1600,
        height: 1200,
        alt: "Scrap car being collected on a flatbed in Red Deer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Scrap Car Removal Red Deer | Same-Day Pickup + Cash",
    description: "Free towing, same-day pickup and responsible vehicle recycling in Red Deer.",
    images: ["/assets/2011-mitsubishi-lancer.jpeg"],
  },
};

const scrapFaqs: FaqItem[] = [
  {
    question: "Do you charge anything to remove my scrap car?",
    answer: "No. Removal is free and we pay you for the vehicle. There are no deductions for towing, fuel or access.",
  },
  {
    question: "Can you remove a car with no keys?",
    answer: "Yes. Missing keys do not stop a pickup. Our flatbed equipment can load vehicles with locked steering or seized wheels.",
  },
  {
    question: "How quickly can you remove my car?",
    answer: "Same-day removal is often available in Red Deer if you call in the morning. Otherwise, we can usually collect within one to two days.",
  },
  {
    question: "Do I have to be home during the pickup?",
    answer: "Ideally yes, so we can check ID and complete the bill of sale with you. Ask about options if you cannot be present.",
  },
  {
    question: "What happens to my car after you take it?",
    answer: "It goes to a licensed recycler where fluids are drained, usable parts are salvaged and the metal is recycled.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://carsforcashreddeer.ca/scrap-car-removal/#service",
  name: "Scrap Car Removal Red Deer",
  serviceType: "Scrap car removal and vehicle disposal",
  description:
    "Free scrap car removal in Red Deer with towing, paperwork assistance, responsible recycling and payment at pickup.",
  provider: {
    "@type": "AutomotiveBusiness",
    "@id": "https://www.carsforcashreddeer.ca/#business",
    name: "Cars for Cash Red Deer",
    telephone: "[PHONE]",
  },
  areaServed: ["Red Deer", "Sylvan Lake", "Blackfalds", "Lacombe", "Penhold", "Innisfail", "Springbrook", "Red Deer County"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
    description: "Free vehicle pickup and towing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: scrapFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carsforcashreddeer.ca/" },
    { "@type": "ListItem", position: 2, name: "Scrap Car Removal", item: "https://carsforcashreddeer.ca/scrap-car-removal/" },
  ],
};

export default function ScrapCarRemovalPage() {
  return (
    <main className="scrap-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="scrap-hero">
        <div className="scrap-hero-photo" aria-hidden="true">
          <Image src="/assets/2011-mitsubishi-lancer.jpeg" alt="" fill priority sizes="100vw" className="cover-image" />
        </div>
        <div className="scrap-hero-overlay" aria-hidden="true" />
        <div className="page-shell scrap-hero-layout">
          <SiteHeader />
          <div className="scrap-hero-copy">
            <nav className="page-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/"><Home aria-hidden="true" /> Home</Link><span>/</span><span>Scrap Car Removal</span>
            </nav>
            <span className="eyebrow">Free towing across Red Deer</span>
            <h1>Scrap Car Removal <em>Red Deer</em></h1>
            <p>We collect old, dead and abandoned vehicles, handle the paperwork, recycle them properly and pay you when they leave.</p>
            <div className="scrap-hero-actions">
              <a href="#quote" className="primary-button">Book free removal <ArrowRight aria-hidden="true" /></a>
              <a href="tel:[PHONE]" className="text-link"><Phone aria-hidden="true" /> [PHONE]</a>
            </div>
            <div className="scrap-hero-proof">
              <span><Truck aria-hidden="true" /> Free pickup</span>
              <span><Timer aria-hidden="true" /> Often same day</span>
              <span><CircleDollarSign aria-hidden="true" /> Cash at pickup</span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="scrap-intro section-pad">
        <div className="page-shell scrap-intro-grid">
          <div>
            <span className="eyebrow dark">From problem to gone</span>
            <h2>Your unwanted car should not cost you another dollar.</h2>
          </div>
          <div className="scrap-prose">
            <p className="lead">An old car that no longer runs becomes a problem the moment it stops being transport.</p>
            <p>It takes up a parking spot, it leaks onto the driveway, your condo board or landlord wants it gone, and the City of Red Deer can issue a notice if it sits unregistered on the street. Arranging a tow truck yourself costs money, and most scrapyards will not come to you.</p>
            <p>Our scrap car removal service fixes all of that. We come to wherever the car is, tow it away for free, handle the paperwork, recycle it properly and pay you for it. You do not lift a finger beyond signing the bill of sale.</p>
            <a className="scrap-inline-cta" href="tel:[PHONE]">Call [PHONE] to book a free scrap car pickup, often the same day. <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="free-removal section-pad">
        <div className="page-shell">
          <div className="scrap-section-heading">
            <span className="eyebrow">Free means free</span>
            <h2>No towing fee. No fuel surcharge. No difficult-access charge.</h2>
            <p>The offer we give you on the phone is the amount you receive, provided the car matches the description.</p>
          </div>
          <div className="access-grid">
            <article><Warehouse aria-hidden="true" /><h3>Tight access</h3><p>Stuck in a back alley, tight garage or behind a fence.</p></article>
            <article><Gauge aria-hidden="true" /><h3>Flat or no wheels</h3><p>Sitting on flat tires or with no wheels at all.</p></article>
            <article><Snowflake aria-hidden="true" /><h3>Snow and fields</h3><p>Buried in snow or sitting in a field on an acreage.</p></article>
            <article><KeyRound aria-hidden="true" /><h3>Missing keys</h3><p>Seized engine, locked steering or no keys.</p></article>
            <article><Hammer aria-hidden="true" /><h3>Partly dismantled</h3><p>Stripped of parts, burned out or partly taken apart.</p></article>
          </div>
          <div className="equipment-strip"><Truck aria-hidden="true" /><p><strong>Equipped for difficult pickups.</strong> Our drivers use flatbeds and wheel-lift equipment, so we can move vehicles that a standard tow truck would struggle with.</p></div>
        </div>
      </section>

      <section className="removal-reasons section-pad">
        <div className="page-shell">
          <div className="split-heading">
            <div><span className="eyebrow dark">Why people call us</span><h2>Common reasons Red Deer residents need a car removed</h2></div>
            <p>Every pickup starts with a slightly different problem. These are the ones we hear most often.</p>
          </div>
          <div className="reason-grid">
            <article><Wrench aria-hidden="true" /><h3>The repair costs more than the car</h3><p>A failed transmission or cracked engine block on an older vehicle can cost more to fix than the car would sell for. Removal turns a repair bill into a payment.</p></article>
            <article><Home aria-hidden="true" /><h3>You are moving or clearing a property</h3><p>Estate clean-ups, house sales and moves out of Red Deer often uncover a vehicle nobody wants to deal with. We remove it before closing day.</p></article>
            <article><ShieldCheck aria-hidden="true" /><h3>Bylaw, condo or landlord pressure</h3><p>Many condo and rental agreements prohibit inoperable vehicles in parking stalls. If you received a warning, we can usually collect before the deadline.</p></article>
            <article><CarFront aria-hidden="true" /><h3>It has been sitting for years</h3><p>Cars left in sheds, barns and farmyards around Red Deer County lose value every season to rust and rodents. Remove it while its metal and parts still have value.</p></article>
          </div>
        </div>
      </section>

      <section className="pickup-day section-pad">
        <div className="page-shell">
          <div className="scrap-section-heading dark-text">
            <span className="eyebrow dark">No surprises at the curb</span>
            <h2>What happens on pickup day</h2>
            <p>Knowing exactly what to expect removes the stress from the process. Most pickups take under 30 minutes.</p>
          </div>
          <div className="pickup-steps">
            <article><span>01</span><CalendarCheck aria-hidden="true" /><h3>Booking</h3><p>Call [PHONE] or submit the form with the year, make, model, location and condition. We confirm the offer and pickup window.</p></article>
            <article><span>02</span><PackageOpen aria-hidden="true" /><h3>Preparation</h3><p>Remove personal items, licence plates, garage door openers and any toll or parking passes.</p></article>
            <article><span>03</span><Truck aria-hidden="true" /><h3>Arrival</h3><p>Our driver arrives in the booked window, checks the VIN against your registration and confirms the condition.</p></article>
            <article><span>04</span><ClipboardCheck aria-hidden="true" /><h3>Paperwork</h3><p>Show photo ID and registration, then complete the bill of sale with us. If something is missing, we explain the next step.</p></article>
            <article><span>05</span><CircleDollarSign aria-hidden="true" /><h3>Payment and tow</h3><p>You are paid, the car is loaded onto the flatbed, and it is gone.</p></article>
          </div>
        </div>
      </section>

      <section className="scrap-documents section-pad">
        <div className="page-shell scrap-documents-grid">
          <div className="document-photo">
            <Image src="/assets/2014-chevy-equinox.jpg" alt="Vehicle being loaded for removal in Red Deer" fill sizes="(max-width: 800px) 100vw, 42vw" className="cover-image" />
            <div><FileCheck2 aria-hidden="true" /><strong>We bring the bill of sale.</strong></div>
          </div>
          <div>
            <span className="eyebrow dark">A legal Alberta transfer</span>
            <h2>Documents for scrap car removal in Alberta</h2>
            <p>For a legal transfer, you will need your Alberta vehicle registration, matching government photo ID and a signed bill of sale, which we provide.</p>
            <div className="document-checks">
              <span><Check aria-hidden="true" /> Alberta vehicle registration</span>
              <span><Check aria-hidden="true" /> Matching government photo ID</span>
              <span><Check aria-hidden="true" /> Signed bill of sale</span>
            </div>
            <p>If the registration is lost, a replacement can be obtained from any Alberta registry agent. If the registered owner has passed away, the executor can sell the vehicle with the appropriate estate documents, and we are happy to explain what that involves.</p>
            <aside><UserRoundCheck aria-hidden="true" /><p>After pickup, keep your copy of the bill of sale, keep your plates, and contact your insurance company to cancel coverage so you are not paying a premium on a car you no longer own.</p></aside>
          </div>
        </div>
      </section>

      <section className="responsible-disposal section-pad">
        <div className="page-shell disposal-grid">
          <div>
            <Leaf aria-hidden="true" className="disposal-leaf" />
            <span className="eyebrow">More than clearing space</span>
            <h2>Environmentally responsible car disposal</h2>
            <p>A single end-of-life vehicle contains engine oil, coolant, transmission and brake fluid, washer fluid, refrigerant, a lead-acid battery, tires and—in some older models—mercury-containing switches. Left in a yard, these leak into soil and groundwater.</p>
            <p>The result of proper processing is that most of the vehicle&apos;s weight is recycled rather than buried in a landfill.</p>
          </div>
          <div className="recycle-process">
            <article><Droplets aria-hidden="true" /><span>Drain and capture fluids for recycling or safe disposal</span></article>
            <article><Snowflake aria-hidden="true" /><span>Recover refrigerant according to environmental regulations</span></article>
            <article><BatteryCharging aria-hidden="true" /><span>Recycle the battery and tires through approved programs</span></article>
            <article><Wrench aria-hidden="true" /><span>Salvage reusable alternators, starters, doors and mirrors</span></article>
            <article><Factory aria-hidden="true" /><span>Separate steel, aluminum and copper for manufacturing</span></article>
          </div>
        </div>
      </section>

      <section className="scrap-comparison section-pad">
        <div className="page-shell comparison-grid">
          <div><span className="eyebrow dark">Different name, same pickup</span><h2>Junk car removal vs scrap car removal</h2></div>
          <div>
            <p>People use the terms interchangeably, and so do we. Whether you call it junk car removal, scrap car removal, old car removal or vehicle disposal, the service is the same: free towing, proper recycling and payment for your vehicle.</p>
            <p>If your car still runs or has useful parts, we may be able to pay more for it through our <Link href="/cash-for-junk-cars/">cash for junk cars</Link> service. If you want to understand exactly how the value of a scrap vehicle is calculated, read our guide to <Link href="/cash-for-scrap-cars/">cash for scrap cars</Link>.</p>
          </div>
        </div>
      </section>

      <section className="scrap-areas section-pad">
        <div className="page-shell scrap-areas-grid">
          <div className="area-marker"><MapPin aria-hidden="true" /><strong>Free pickup</strong><span>Red Deer & Central Alberta</span></div>
          <div>
            <span className="eyebrow">Where we collect</span>
            <h2>Areas we cover for scrap car removal</h2>
            <p>We provide free removal across Red Deer, including the north and south sides of the river, as well as Sylvan Lake, Blackfalds, Lacombe, Penhold, Innisfail, Springbrook and rural Red Deer County.</p>
            <p>We also offer removal through our pages for <Link href="/cash-for-cars-calgary/">Cash for Cars Calgary</Link>, <Link href="/cash-for-cars-airdrie/">Cash for Cars Airdrie</Link> and <Link href="/cash-for-cars-lethbridge/">Cash for Cars Lethbridge</Link>.</p>
          </div>
        </div>
      </section>

      <section className="other-help section-pad">
        <div className="page-shell">
          <div className="scrap-section-heading dark-text"><span className="eyebrow dark">More ways we can help</span><h2>Find the right service for your vehicle</h2></div>
          <div className="help-links">
            <Link href="/cash-for-used-cars/"><CarFront aria-hidden="true" /><span><strong>Cash for used cars</strong>For vehicles that still run well</span><ArrowRight aria-hidden="true" /></Link>
            <Link href="/cash-for-hail-damaged-cars/"><Snowflake aria-hidden="true" /><span><strong>Cash for hail damaged cars</strong>For storm-damaged vehicles</span><ArrowRight aria-hidden="true" /></Link>
            <Link href="/"><Home aria-hidden="true" /><span><strong>Cash for cars Red Deer</strong>See every way we can help</span><ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="page-shell faq-grid">
          <div className="faq-heading"><span className="eyebrow dark">Before we collect</span><h2>Scrap car removal FAQs</h2><p>Have a difficult-access vehicle or unusual paperwork? Call [PHONE] and describe the situation.</p></div>
          <FaqList items={scrapFaqs} />
        </div>
      </section>

      <section className="scrap-final-cta">
        <div className="scrap-final-photo" aria-hidden="true"><Image src="/assets/cash-for-scrap-cars.jpeg" alt="" fill sizes="100vw" className="cover-image" /></div>
        <div className="scrap-final-overlay" aria-hidden="true" />
        <div className="page-shell scrap-final-content">
          <span className="eyebrow">Clear the space today</span>
          <h2>Book your free scrap car removal.</h2>
          <p>That old car will not get more valuable sitting in your driveway. Book a free pickup now and get paid when it leaves.</p>
          <div><a href="#quote" className="primary-button">Request free removal <ArrowRight aria-hidden="true" /></a><a href="tel:[PHONE]" className="text-link"><Phone aria-hidden="true" /> Call [PHONE]</a></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand"><Image src="/assets/carsfircashreddeer-logo.png" width={2172} height={724} alt="Cars for Cash Red Deer" /><p>Free scrap car pickup and straightforward cash offers across Red Deer and Central Alberta.</p></div>
          <div><h2>Contact</h2><a href="tel:[PHONE]">[PHONE]</a><span>74C Clearview Dr, Red Deer, AB T4E 0A1</span><span>Open daily, 7:00 AM–11:00 PM</span></div>
          <div><h2>Services</h2><Link href="/scrap-car-removal/">Scrap Car Removal</Link><Link href="/cash-for-used-cars/">Cash for Used Cars</Link><Link href="/cash-for-junk-cars/">Cash for Junk Cars</Link><Link href="/cash-for-scrap-cars/">Cash for Scrap Cars</Link><Link href="/cash-for-hail-damaged-cars/">Hail Damaged Cars</Link></div>
          <div><h2>Locations</h2><Link href="/cash-for-cars-calgary/">Calgary</Link><Link href="/cash-for-cars-airdrie/">Airdrie</Link><Link href="/cash-for-cars-lethbridge/">Lethbridge</Link></div>
        </div>
        <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Cars for Cash Red Deer.</span><span>Free towing. Proper recycling. Cash at pickup.</span></div>
      </footer>
    </main>
  );
}
