import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BriefcaseBusiness,
  CalendarCheck,
  CarFront,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  HandCoins,
  Home,
  KeyRound,
  MapPin,
  MessageSquareOff,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Tags,
  Timer,
  Truck,
  UsersRound,
  WalletCards,
  Wrench,
} from "lucide-react";
import FaqList, { type FaqItem } from "../components/faq-list";
import QuoteForm from "../components/quote-form";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Cash for Used Cars Red Deer | Sell Your Car Fast Today",
  description:
    "Sell your used car in Red Deer for cash without listings, lowball trade-ins or tire kickers. Any year, any mileage, loans paid out. Free pickup and same-day payment.",
  alternates: { canonical: "https://www.carsforcashreddeer.ca/cash-for-used-cars/" },
  openGraph: {
    title: "Cash for Used Cars Red Deer | Sell Your Car Fast Today",
    description: "Sell your used car without listings, lowball trade-ins or strangers at your door.",
    url: "https://www.carsforcashreddeer.ca/cash-for-used-cars/",
    siteName: "Cars for Cash Red Deer",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/social-share.png", width: 1200, height: 630, alt: "Cars for Cash Red Deer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Used Cars Red Deer | Sell Your Car Fast Today",
    description: "A firm cash offer, free pickup and same-day payment for used vehicles in Red Deer.",
    images: ["/social-share.png"],
  },
};

const usedCarFaqs: FaqItem[] = [
  { question: "Will you buy my car if the check engine light is on?", answer: "Yes. We factor known issues into the offer. You do not need to repair anything before selling." },
  { question: "Can I sell my car if I still owe money on it?", answer: "Yes. We pay out your lender directly and give you any equity left over." },
  { question: "Do you buy cars with high mileage?", answer: "Yes. We regularly buy vehicles with well over 250,000 kilometres, especially trucks and SUVs." },
  { question: "Is selling to you faster than a private sale?", answer: "Much faster. Most sellers go from first call to payment within one or two days, without listings, viewings or negotiation." },
  { question: "Do you buy cars that are not registered in my name?", answer: "We can only buy from the registered owner or someone legally authorized to sell, such as an estate executor, with the right documents." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.carsforcashreddeer.ca/cash-for-used-cars/#service",
  name: "Cash for Used Cars Red Deer",
  serviceType: "Used vehicle purchasing",
  description: "Fast cash offers for running used cars, trucks, SUVs, minivans and work vans in Red Deer, including vehicles with loans or mechanical issues.",
  provider: { "@type": "AutomotiveBusiness", "@id": "https://www.carsforcashreddeer.ca/#business", name: "Cars for Cash Red Deer", telephone: "[PHONE]" },
  areaServed: ["Red Deer", "Sylvan Lake", "Blackfalds", "Lacombe", "Penhold", "Innisfail"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: usedCarFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carsforcashreddeer.ca/" },
    { "@type": "ListItem", position: 2, name: "Cash for Used Cars", item: "https://www.carsforcashreddeer.ca/cash-for-used-cars/" },
  ],
};

export default function CashForUsedCarsPage() {
  return (
    <main className="used-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="used-hero">
        <div className="used-hero-photo" aria-hidden="true"><Image src="/assets/2017-lexus.jpeg" alt="" fill priority sizes="100vw" className="cover-image" /></div>
        <div className="used-hero-overlay" aria-hidden="true" />
        <div className="page-shell used-hero-layout">
          <SiteHeader />
          <div className="used-hero-copy">
            <nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/"><Home aria-hidden="true" /> Home</Link><span>/</span><span>Cash for Used Cars</span></nav>
            <span className="eyebrow">Skip the listing. Keep your time.</span>
            <h1>Cash for Used Cars <em>Red Deer</em></h1>
            <p>One call gets you a firm offer. We collect the vehicle on your schedule and pay you on the spot.</p>
            <div className="used-hero-actions"><a href="#quote" className="primary-button">Get a free valuation <ArrowRight aria-hidden="true" /></a><a href="tel:[PHONE]" className="text-link"><Phone aria-hidden="true" /> [PHONE]</a></div>
            <div className="used-hero-proof"><span><Timer aria-hidden="true" /> Fast firm offers</span><span><Truck aria-hidden="true" /> Free pickup</span><span><Banknote aria-hidden="true" /> Same-day payment</span></div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="used-intro section-pad">
        <div className="page-shell used-intro-grid">
          <div><span className="eyebrow dark">A simpler sale</span><h2>Sell the car, not your evenings and weekends.</h2></div>
          <div className="used-prose">
            <p className="lead">You want to sell your car. You do not want the work that usually comes with it.</p>
            <p>You do not want to photograph it, write a listing, answer the same question forty times on Facebook Marketplace, meet strangers for test drives, and then watch a buyer try to knock a thousand dollars off at the last minute. You also do not want to accept a trade-in offer that feels like the dealer is doing you a favour.</p>
            <p>We buy used cars, trucks, SUVs and minivans in Red Deer for cash, quickly and on your schedule. One call gets you a firm offer, and we come to you to collect the vehicle and pay you on the spot.</p>
            <a href="#quote">Request your free used car valuation <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="usual-way section-pad">
        <div className="page-shell">
          <div className="used-heading"><span className="eyebrow">Why the usual way wears you down</span><h2>The problem with selling a used car the usual way</h2></div>
          <div className="pain-grid">
            <article><UsersRound aria-hidden="true" /><h3>Private sales take time and carry risk</h3><p>A private sale can get you a good price, but only if you have weeks to spare. No-shows, low offers, fake e-transfers, counterfeit drafts and strangers at your address all become your problem.</p></article>
            <article><Tags aria-hidden="true" /><h3>Trade-ins are convenient but cost you money</h3><p>A dealership has to recondition your car and resell it at a profit, so the offer reflects that margin. If you are not buying from that dealer, the option disappears entirely.</p></article>
            <article><AlertTriangle aria-hidden="true" /><h3>Mechanical issues scare off private buyers</h3><p>A check engine light, slipping transmission, oil leak or cracked windshield can make a usable car hard to sell. Buyers walk away or negotiate far beyond the repair cost.</p></article>
          </div>
          <div className="used-solution"><ShieldCheck aria-hidden="true" /><p><strong>Selling to us removes each problem.</strong> You get a fair, fast offer, deal with a local business instead of a stranger, and mechanical issues are simply factored into the price.</p></div>
        </div>
      </section>

      <section className="used-vehicles section-pad">
        <div className="page-shell">
          <div className="split-heading"><div><span className="eyebrow dark">Any year. Almost any mileage.</span><h2>Used vehicles we buy</h2></div><p>High mileage, cosmetic damage, worn tires or a check engine light are not deal-breakers. We price your vehicle as it is.</p></div>
          <div className="vehicle-showcase">
            <article><div><Image src="/assets/2011-mitsubishi-lancer.jpeg" alt="Used sedan in Red Deer" fill sizes="(max-width: 800px) 100vw, 30vw" className="cover-image" /></div><h3>Sedans & hatchbacks</h3><p>Honda Civic, Toyota Corolla, Hyundai Elantra, Mazda3, Chevrolet Cruze and more.</p></article>
            <article><div><Image src="/assets/2016-ford-f160.jpeg" alt="Used Ford pickup truck" fill sizes="(max-width: 800px) 100vw, 30vw" className="cover-image" /></div><h3>Pickup trucks</h3><p>Ford F-150, Ram 1500, Chevrolet Silverado, GMC Sierra and Toyota Tacoma.</p></article>
            <article><div><Image src="/assets/hyundai-tuscon.jpeg" alt="Used SUV in Alberta" fill sizes="(max-width: 800px) 100vw, 30vw" className="cover-image" /></div><h3>SUVs & crossovers</h3><p>Ford Escape, Toyota RAV4, Honda CR-V, Jeep Grand Cherokee and Nissan Rogue.</p></article>
            <article><div><Image src="/assets/toyota-sienna.jpeg" alt="Used Toyota minivan in Red Deer" fill sizes="(max-width: 800px) 100vw, 30vw" className="cover-image" /></div><h3>Minivans & family vehicles</h3><p>Dodge Grand Caravan, Honda Odyssey, Toyota Sienna and other family vehicles.</p></article>
          </div>
          <p className="commercial-note"><BriefcaseBusiness aria-hidden="true" /> We also buy work vans and light commercial vehicles.</p>
        </div>
      </section>

      <section className="used-value section-pad">
        <div className="page-shell used-value-grid">
          <div className="value-photo"><Image src="/assets/2017 Chevy Silverado.jpeg" alt="Used Chevrolet pickup assessed for value" fill sizes="(max-width: 800px) 100vw, 42vw" className="cover-image" /><span><BadgeDollarSign aria-hidden="true" /> Firm offer</span></div>
          <div>
            <span className="eyebrow dark">A professional, explained valuation</span><h2>How we value your used car</h2>
            <p>We look at the same factors any professional buyer uses, and explain them rather than hiding them.</p>
            <div className="value-list">
              <article><CarFront aria-hidden="true" /><div><h3>Year, make, model and trim</h3><p>Popular models and higher trims hold their value better.</p></div></article>
              <article><Gauge aria-hidden="true" /><div><h3>Odometer reading</h3><p>Lower mileage helps, but high-mileage vehicles with good service history still sell well.</p></div></article>
              <article><Wrench aria-hidden="true" /><div><h3>Mechanical condition</h3><p>Engine, transmission, brakes, suspension and warning lights all matter.</p></div></article>
              <article><Sparkles aria-hidden="true" /><div><h3>Body and interior</h3><p>Rust, dents, hail damage, upholstery tears and windshield cracks are noted.</p></div></article>
              <article><FileCheck2 aria-hidden="true" /><div><h3>Accident history</h3><p>Previous collisions and salvage or rebuilt status affect resale value.</p></div></article>
              <article><CircleGauge aria-hidden="true" /><div><h3>Current Alberta demand</h3><p>Four-wheel-drive trucks and SUVs remain in steady demand across the province.</p></div></article>
            </div>
            <p className="firm-note"><Check aria-hidden="true" /> As long as the car matches what you told us, the price quoted is the price paid.</p>
          </div>
        </div>
      </section>

      <section className="sale-comparison section-pad">
        <div className="page-shell">
          <div className="used-heading dark"><span className="eyebrow">Choose what matters most</span><h2>Private sale vs trade-in vs selling to us</h2></div>
          <div className="comparison-options">
            <article><span>Most effort</span><UsersRound aria-hidden="true" /><h3>Private sale</h3><strong>Potentially the highest price</strong><p>Weeks of listings, viewings, payment risk and repeated negotiation.</p></article>
            <article><span>Least flexible</span><WalletCards aria-hidden="true" /><h3>Trade-in</h3><strong>Quick when buying another car</strong><p>Only works through that dealer, with value reduced for reconditioning and profit.</p></article>
            <article className="recommended"><span>Best balance</span><HandCoins aria-hidden="true" /><h3>Selling to us</h3><strong>Fair cash price the same day</strong><p>No listings, no strangers at your door and no obligation to buy another vehicle.</p></article>
          </div>
        </div>
      </section>

      <section className="better-offer section-pad">
        <div className="page-shell better-offer-grid">
          <div><span className="eyebrow dark">Small preparation, better context</span><h2>How to get a higher offer for your used car</h2></div>
          <ol>
            <li><span>01</span><p>Clean out the interior and give the car a wash so photos show its real condition.</p></li>
            <li><span>02</span><p>Gather service records, receipts for recent repairs and both sets of keys.</p></li>
            <li><span>03</span><p>Tell us about upgrades such as new tires, a remote starter or a recent brake job.</p></li>
            <li><span>04</span><p>Be upfront about known problems so the offer does not change at pickup.</p></li>
          </ol>
        </div>
      </section>

      <section className="loan-section section-pad">
        <div className="page-shell loan-grid">
          <div className="loan-icon"><ReceiptText aria-hidden="true" /></div>
          <div><span className="eyebrow">A loan does not stop the sale</span><h2>Selling a used car that still has a loan</h2><p>Many people think they cannot sell a car until it is paid off. That is not true. Tell us about the lien when you request your quote. We confirm the payout with your lender, pay the lender directly from the sale, and pay you any remaining balance.</p><p>If you owe more than the car is worth, we explain the difference clearly so you can decide what to do.</p></div>
        </div>
      </section>

      <section className="used-process section-pad">
        <div className="page-shell">
          <div className="used-heading"><span className="eyebrow dark">Four clear steps</span><h2>Our used car buying process</h2></div>
          <div className="used-process-grid">
            <article><span>1</span><MessageSquareOff aria-hidden="true" /><h3>Tell us about your car</h3><p>Share the year, make, model, mileage, trim, condition and known issues. Photos help us make a more accurate offer.</p></article>
            <article><span>2</span><BadgeDollarSign aria-hidden="true" /><h3>Receive a firm offer</h3><p>Most offers are ready within minutes during business hours.</p></article>
            <article><span>3</span><CalendarCheck aria-hidden="true" /><h3>Choose your pickup time</h3><p>We come to your home, workplace or anywhere convenient in Red Deer, or you can drop off the vehicle.</p></article>
            <article><span>4</span><Banknote aria-hidden="true" /><h3>Complete the sale</h3><p>We confirm the VIN, complete the bill of sale, and pay you before the vehicle leaves.</p></article>
          </div>
        </div>
      </section>

      <section className="used-documents section-pad">
        <div className="page-shell used-docs-grid">
          <div><span className="eyebrow dark">Bring what you have</span><h2>Documents you need to sell your used car in Alberta</h2><p>In Alberta, licence plates stay with you. Remove them before we drive or tow the car away, then cancel your insurance or move it to your next vehicle.</p></div>
          <div className="used-doc-list">
            <span><Check aria-hidden="true" /> Current Alberta registration certificate</span>
            <span><Check aria-hidden="true" /> Government-issued photo ID matching the owner</span>
            <span><Check aria-hidden="true" /> Lender details and payout information, if applicable</span>
            <span><KeyRound aria-hidden="true" /> All keys, fobs and the owner&apos;s manual, if available</span>
            <span><ClipboardCheck aria-hidden="true" /> Service records, if available, to support a higher offer</span>
          </div>
        </div>
      </section>

      <section className="not-worth-fixing section-pad">
        <div className="page-shell fix-grid">
          <div className="fix-photo"><Image src="/assets/hyundai-tuscon.jpeg" alt="Used SUV with winter wear in Alberta" fill sizes="(max-width: 800px) 100vw, 46vw" className="cover-image" /></div>
          <div><span className="eyebrow">Repair or sell as-is?</span><h2>When a used car is not worth fixing</h2><p>If your used car has developed a serious problem, such as a failed transmission or engine damage, it may make more sense to sell it now than pay for repairs. Ask for an as-is offer and compare it with your repair estimate.</p><p>If it no longer runs, our <Link href="/cash-for-junk-cars/">cash for junk cars</Link> service is built for that situation. If it has storm damage, see <Link href="/cash-for-hail-damaged-cars/">cash for hail damaged cars</Link>.</p></div>
        </div>
      </section>

      <section className="used-areas section-pad">
        <div className="page-shell used-areas-grid">
          <div><MapPin aria-hidden="true" /><span>Red Deer</span><strong>We come to you</strong></div>
          <div><span className="eyebrow dark">Local and surrounding communities</span><h2>Where we buy used cars</h2><p>We buy used vehicles throughout Red Deer and the surrounding area, including Sylvan Lake, Blackfalds, Lacombe, Penhold and Innisfail.</p><p>We also buy through <Link href="/cash-for-cars-calgary/">Cash for Cars Calgary</Link>, <Link href="/cash-for-cars-airdrie/">Cash for Cars Airdrie</Link> and <Link href="/cash-for-cars-lethbridge/">Cash for Cars Lethbridge</Link>.</p><p>See every service on our <Link href="/">cash for cars Red Deer</Link> homepage, or learn about free <Link href="/scrap-car-removal/">scrap car removal</Link> for end-of-life vehicles.</p></div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="page-shell faq-grid"><div className="faq-heading"><span className="eyebrow dark">Before you sell</span><h2>Cash for used cars FAQs</h2><p>Have a loan, warning light or unusual vehicle? Call [PHONE] and tell us about it.</p></div><FaqList items={usedCarFaqs} /></div>
      </section>

      <section className="used-final-cta">
        <div className="used-final-photo" aria-hidden="true"><Image src="/assets/2016-ford-f160.jpeg" alt="" fill sizes="100vw" className="cover-image" /></div><div className="used-final-overlay" aria-hidden="true" />
        <div className="page-shell used-final-content"><span className="eyebrow">No listing required</span><h2>Sell your used car for cash today.</h2><p>Skip the listings and lowball offers. Get a firm price for your used car and have the money in hand this week.</p><div><a href="#quote" className="primary-button">Request your free quote <ArrowRight aria-hidden="true" /></a><a href="tel:[PHONE]" className="text-link"><Phone aria-hidden="true" /> Call [PHONE]</a></div></div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand"><Image src="/assets/carsfircashreddeer-logo.png" width={2172} height={724} alt="Cars for Cash Red Deer" /><p>Fast, firm offers for used vehicles across Red Deer and Central Alberta.</p></div>
          <div><h2>Contact</h2><a href="tel:[PHONE]">[PHONE]</a><span>74C Clearview Dr, Red Deer, AB T4E 0A1</span><span>Open daily, 7:00 AM–11:00 PM</span></div>
          <div><h2>Services</h2><Link href="/scrap-car-removal/">Scrap Car Removal</Link><Link href="/cash-for-used-cars/">Cash for Used Cars</Link><Link href="/cash-for-junk-cars/">Cash for Junk Cars</Link><Link href="/cash-for-scrap-cars/">Cash for Scrap Cars</Link><Link href="/cash-for-hail-damaged-cars/">Hail Damaged Cars</Link></div>
          <div><h2>Locations</h2><Link href="/cash-for-cars-calgary/">Calgary</Link><Link href="/cash-for-cars-airdrie/">Airdrie</Link><Link href="/cash-for-cars-lethbridge/">Lethbridge</Link></div>
        </div>
        <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Cars for Cash Red Deer.</span><span>No listings. No strangers. No lowball trade-in.</span></div>
      </footer>
    </main>
  );
}
