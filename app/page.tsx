import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BatteryWarning,
  Calculator,
  CalendarClock,
  CarFront,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  IdCard,
  KeyRound,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  Recycle,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import FaqList, { type FaqItem } from "./components/faq-list";
import QuoteForm from "./components/quote-form";
import SiteHeader from "./components/site-header";

const services = [
  {
    title: "Scrap Car Removal",
    href: "/scrap-car-removal/",
    image: "/assets/cash-for-scrap-cars.jpeg",
    alt: "Older pickup ready for scrap car removal",
    copy: "If your car has reached the end of its life, our scrap car removal service gets it off your property for free. We handle the towing, the paperwork and environmentally responsible disposal of fluids, batteries and tires, and we still pay you for it.",
  },
  {
    title: "Cash for Used Cars",
    href: "/cash-for-used-cars/",
    image: "/assets/2017-lexus.jpeg",
    alt: "Used Lexus SUV available for a cash offer",
    copy: "Still running but you want a fast, simple sale? We offer cash for used cars of any age and mileage, including vehicles with mechanical issues, lingering loan balances or cosmetic wear that puts private buyers off.",
  },
  {
    title: "Cash for Junk Cars",
    href: "/cash-for-junk-cars/",
    image: "/assets/2011-mitsubishi-lancer.jpeg",
    alt: "Non-running Mitsubishi being collected by a tow truck",
    copy: "Cars that will not start, failed an inspection, or are missing parts still have value. Our cash for junk cars service pays you for vehicles other buyers will not touch, running or not.",
  },
  {
    title: "Cash for Scrap Cars",
    href: "/cash-for-scrap-cars/",
    image: "/assets/2017 Chevy Silverado.jpeg",
    alt: "Damaged Chevrolet pickup truck",
    copy: "Want to know what your old car is worth by weight and parts? With cash for scrap cars, we price your vehicle on its metal weight, catalytic converter and reusable components, so you get a fair figure rather than a guess.",
  },
  {
    title: "Cash for Hail Damaged Cars",
    href: "/cash-for-hail-damaged-cars/",
    image: "/assets/hyundai-tuscon.jpeg",
    alt: "Hyundai SUV in an Alberta winter setting",
    copy: "Central and southern Alberta sit in one of Canada's most active hail regions. If a storm has dented your roof, hood and trunk, our cash for hail damaged cars service buys the vehicle as-is, including insurance write-offs and salvage-status vehicles.",
  },
] as const;

const pricingFactors = [
  [CarFront, "Year, make and model", "Some models are in high demand for parts or resale, which raises their value even when damaged."],
  [CircleGauge, "Running condition", "A car that starts and drives is worth more, but a non-running vehicle still has value."],
  [Wrench, "Damage", "Body, frame, flood and hail damage each affect value differently. Cosmetic damage may leave the drivetrain intact."],
  [Scale, "Weight and metal prices", "For end-of-life vehicles, steel and aluminum set the floor price. Trucks and SUVs usually earn more as scrap."],
  [Sparkles, "Valuable parts", "The catalytic converter, engine, transmission, alternator, wheels and electronics can add to the offer."],
  [PackageCheck, "Completeness", "A vehicle with all major parts is worth more than a stripped shell."],
] as const;

const faqs: FaqItem[] = [
  {
    question: "How fast can you pick up my car in Red Deer?",
    answer: "Most pickups inside Red Deer happen the same day or the next day. Call in the morning and there is a good chance we can collect it that afternoon.",
  },
  {
    question: "Do you buy cars that do not run?",
    answer: "Yes. We buy non-running, broken down and accident-damaged vehicles every day. Towing is free regardless of condition.",
  },
  {
    question: "Is towing really free?",
    answer: "Yes. There is no towing charge and nothing is deducted from your offer for pickup anywhere in our Red Deer service area.",
  },
  {
    question: "Can I sell a car without the registration?",
    answer: "Proof of ownership is required by law, but a lost registration is easy to replace at an Alberta registry agent. Call us and we will walk you through the quickest option for your situation.",
  },
  {
    question: "What types of vehicles do you buy?",
    answer: "Cars, pickup trucks, SUVs, minivans, crossovers and light commercial vans of every make, including Ford, Chevrolet, GMC, Dodge, Ram, Toyota, Honda, Nissan, Hyundai, Kia, Mazda, Jeep, Volkswagen and Subaru.",
  },
  {
    question: "How is the payment made?",
    answer: "You are paid at pickup, before the vehicle leaves. Ask about the payment methods available when you book.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Cash for Cars Red Deer",
      item: "https://www.carsforcashreddeer.ca/",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero">
        <div className="hero-image" aria-hidden="true">
          <Image
            src="/assets/2016-ford-f160.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="cover-image"
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="page-shell hero-inner">
          <SiteHeader />
          <div className="hero-content">
            <p className="location-kicker"><MapPin size={17} aria-hidden="true" /> Red Deer, Alberta</p>
            <h1>Cash for Cars <em>Red Deer, AB</em></h1>
            <p className="hero-copy">
              Any make. Any condition. A firm offer, free towing and payment on the spot—usually today or tomorrow.
            </p>
            <div className="hero-actions">
              <a href="#quote" className="primary-button">Get a free quote <ArrowRight aria-hidden="true" /></a>
              <a href="tel:[PHONE]" className="text-link"><Phone size={19} aria-hidden="true" /> Call [PHONE]</a>
            </div>
            <div className="hero-proof" aria-label="Service highlights">
              <span><Truck aria-hidden="true" /> Free towing</span>
              <span><CalendarClock aria-hidden="true" /> Same-day pickup</span>
              <span><Banknote aria-hidden="true" /> Paid at pickup</span>
            </div>
          </div>
          <QuoteForm />
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>Cars</span><i>•</i><span>Trucks</span><i>•</i><span>SUVs</span><i>•</i><span>Vans</span><i>•</i><span>Running or not</span>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="page-shell intro-grid">
          <div className="section-title intro-title">
            <span className="eyebrow dark">A better way to sell</span>
            <h2>One call. One clear offer. One less car in your driveway.</h2>
          </div>
          <div className="intro-copy">
            <p className="lead">You have a car you no longer want, and every option so far has been a hassle.</p>
            <p>Private buyers book a viewing and never show up. The dealership offers a trade-in figure that barely covers a tank of gas. The scrapyard wants you to arrange your own tow. Meanwhile the vehicle sits in your driveway, still costing you insurance and taking up space.</p>
            <p>We make that problem go away in a single phone call. Cars for Cash Red Deer buys cars, trucks, SUVs and vans in any condition, pays you on the spot, and tows the vehicle away for free. Running, broken down, written off or rusted out, we give you a firm offer and pick it up, usually the same day or the next.</p>
            <p><strong>Call [PHONE] or fill in the quote form for a no-obligation cash offer in minutes.</strong></p>
          </div>
        </div>
      </section>

      <section className="why-us section-pad">
        <div className="page-shell">
          <div className="split-heading">
            <div>
              <span className="eyebrow">Built around real sellers</span>
              <h2>Why Red Deer drivers choose us to sell their cars</h2>
            </div>
            <p>Selling privately can take weeks. A dealership trade-in is quicker, but its value reflects the margin the dealer needs. If your vehicle does not run, neither option works at all.</p>
          </div>
          <div className="reason-track">
            <article><Handshake aria-hidden="true" /><h3>No haggling</h3><p>You describe the car, we give you a clear offer, and it does not drop at pickup when the car matches what you told us.</p></article>
            <article><Truck aria-hidden="true" /><h3>No towing fees</h3><p>Pickup is free from driveways, parking lots, back alleys and acreages across Red Deer and the surrounding area.</p></article>
            <article><Banknote aria-hidden="true" /><h3>No waiting for payment</h3><p>You are paid at pickup, before your vehicle leaves the property.</p></article>
            <article><BatteryWarning aria-hidden="true" /><h3>No condition too bad</h3><p>Missing keys, dead engine, blown transmission, flood or hail damage, failed inspection—even no wheels.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h3>Paperwork help</h3><p>We explain what you need and complete the bill of sale with you.</p></article>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="page-shell">
          <div className="services-heading">
            <span className="eyebrow dark">Choose your situation</span>
            <h2>Our car buying services in Red Deer</h2>
            <p>Every car is different, so we have a dedicated service for each situation. Pick the one that fits your vehicle.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.href}>
                <div className="service-image">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 35vw" className="cover-image" />
                  <span className="service-badge">We buy it as-is</span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Link href={service.href}>Explore this service <ArrowRight size={19} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section-pad" id="how-it-works">
        <div className="page-shell">
          <div className="split-heading light">
            <div><span className="eyebrow">Simple from start to finish</span><h2>How selling your car for cash works</h2></div>
            <p>The whole process usually takes less than a day from your first call to money in your hand.</p>
          </div>
          <div className="process-line">
            <article><span>1</span><BadgeDollarSign aria-hidden="true" /><h3>Get your quote</h3><p>Call [PHONE] or use the online form. Tell us the year, make, model, approximate mileage and condition. Photos help but are not required. We give you a firm cash offer, usually within minutes.</p></article>
            <article><span>2</span><CalendarClock aria-hidden="true" /><h3>Book a pickup time</h3><p>Choose a time that suits you. Same-day pickup is often available in Red Deer, with evening and weekend slots available on request.</p></article>
            <article><span>3</span><Banknote aria-hidden="true" /><h3>Get paid on the spot</h3><p>Our driver confirms the vehicle, you sign the bill of sale, and you receive payment before we tow it away. You keep your licence plates.</p></article>
          </div>
        </div>
      </section>

      <section className="pricing section-pad">
        <div className="page-shell pricing-grid">
          <div className="pricing-visual">
            <Image src="/assets/toyota-sienna-black.jpeg" alt="Vehicle assessed for a fair cash offer in winter" fill sizes="(max-width: 900px) 100vw, 42vw" className="cover-image" />
            <div className="price-stamp"><Calculator aria-hidden="true" /><span>Fair value.<br />Clearly explained.</span></div>
          </div>
          <div className="pricing-content">
            <span className="eyebrow dark">Know what adds value</span>
            <h2>What determines how much cash you get for your car</h2>
            <p>We would rather explain how we price vehicles than hand you a number with no reasoning behind it. The main factors are:</p>
            <div className="factor-list">
              {pricingFactors.map(([Icon, title, copy]) => (
                <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
            <p className="match-note"><ShieldCheck aria-hidden="true" /> If you get a higher written quote from another licensed buyer in Red Deer, tell us. We will look at it and do our best to match it.</p>
          </div>
        </div>
      </section>

      <section className="paperwork section-pad">
        <div className="page-shell paperwork-grid">
          <div>
            <span className="eyebrow">Alberta paperwork, simplified</span>
            <h2>What you need to sell your car in Alberta</h2>
            <p className="paperwork-intro">Missing paperwork is one of the biggest reasons people put off selling. In most cases, you need far less than you think.</p>
          </div>
          <div className="document-list">
            <article><FileCheck2 aria-hidden="true" /><div><h3>Proof of ownership</h3><p>Your Alberta vehicle registration certificate in your name. If it is lost, we can explain how to get a replacement from a registry agent, and in many cases we can still help.</p></div></article>
            <article><IdCard aria-hidden="true" /><div><h3>Photo ID</h3><p>Government-issued photo ID that matches the name on the registration.</p></div></article>
            <article><ClipboardCheck aria-hidden="true" /><div><h3>Signed bill of sale</h3><p>We bring one and complete it with you at pickup.</p></div></article>
            <article><KeyRound aria-hidden="true" /><div><h3>Lien status</h3><p>If there is still a loan on the car, let us know. We can work with the lender to pay it out from the sale.</p></div></article>
          </div>
          <aside className="plate-note">
            <strong>You keep your plates.</strong>
            <p>In Alberta, licence plates stay with the owner, not the vehicle. Remove them before pickup, then cancel or transfer the registration and call your insurer to cancel coverage.</p>
          </aside>
        </div>
      </section>

      <section className="coverage section-pad" id="areas">
        <div className="page-shell coverage-grid">
          <div className="coverage-copy">
            <span className="eyebrow dark">Local pickup coverage</span>
            <h2>Cash for cars across Red Deer and Central Alberta</h2>
            <p>We are a local Red Deer business, so we know the city well. We pick up across every neighbourhood, including Clearview, Timberlands, Inglewood, Vanier Woods, Anders, Lancaster, Morrisroe, Sunnybrook, Deer Park, Highland Green, Riverside Meadows, Westpark and downtown.</p>
            <p>We also cover the communities around Red Deer, including Sylvan Lake, Blackfalds, Lacombe, Penhold, Innisfail, Springbrook, Gasoline Alley and rural Red Deer County. If your vehicle is on a farm or acreage, we can still collect it.</p>
            <div className="city-links" aria-label="Other Alberta service locations">
              <Link href="/cash-for-cars-calgary/">Cash for Cars Calgary <ArrowRight aria-hidden="true" /></Link>
              <Link href="/cash-for-cars-airdrie/">Cash for Cars Airdrie <ArrowRight aria-hidden="true" /></Link>
              <Link href="/cash-for-cars-lethbridge/">Cash for Cars Lethbridge <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="area-visual">
            <div className="map-rings" aria-hidden="true"><span /><span /><span /></div>
            <MapPin className="map-pin" aria-hidden="true" />
            <strong>Red Deer</strong>
            <div className="area-chips">
              {["Sylvan Lake", "Blackfalds", "Lacombe", "Penhold", "Innisfail", "Springbrook", "Gasoline Alley", "Red Deer County"].map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="recycling section-pad">
        <div className="page-shell recycling-grid">
          <div className="recycling-image"><Image src="/assets/toyota-sienna.jpeg" alt="Toyota minivan ready for pickup in Red Deer" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" /></div>
          <div className="recycling-copy">
            <Leaf aria-hidden="true" />
            <span className="eyebrow">A cleaner end of the road</span>
            <h2>Responsible recycling that keeps Red Deer clean</h2>
            <p>An abandoned car leaks oil, coolant, brake fluid and battery acid into the ground. When we take a vehicle that cannot be saved, it goes to licensed recycling partners who drain and dispose of fluids correctly, recycle the battery and tires, and send the metal back into manufacturing.</p>
            <p>Usable parts are recovered and resold, which keeps the cost of repairs down for other drivers in Alberta.</p>
            <div className="recycling-tags"><span><Recycle aria-hidden="true" /> Metal recovered</span><span><Check aria-hidden="true" /> Fluids handled correctly</span></div>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="page-shell faq-grid">
          <div className="faq-heading">
            <span className="eyebrow dark">Straight answers</span>
            <h2>Frequently asked questions about cash for cars in Red Deer</h2>
            <p>Still unsure about your vehicle? Call [PHONE] and tell us what is sitting in your driveway.</p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-image" aria-hidden="true"><Image src="/assets/2014-chevy-equinox.jpg" alt="" fill sizes="100vw" className="cover-image" /></div>
        <div className="cta-overlay" aria-hidden="true" />
        <div className="page-shell cta-content">
          <span className="eyebrow">Ready when you are</span>
          <h2>Get your cash offer today.</h2>
          <p>Every week a car sits unused, it loses value and keeps costing you insurance and space. Get a firm offer now and have it gone by tomorrow.</p>
          <div><a href="#quote" className="primary-button">Request a free quote <ArrowRight aria-hidden="true" /></a><a href="tel:[PHONE]" className="text-link"><Phone aria-hidden="true" /> [PHONE]</a></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <Image src="/assets/carsfircashreddeer-logo.png" width={2172} height={724} alt="Cars for Cash Red Deer" />
            <p>Fast, straightforward cash offers for vehicles across Red Deer and Central Alberta.</p>
          </div>
          <div><h2>Contact</h2><a href="tel:[PHONE]">[PHONE]</a><span>74C Clearview Dr, Red Deer, AB T4E 0A1</span><span>Open daily, 7:00 AM–11:00 PM</span></div>
          <div><h2>Services</h2>{services.map((service) => <Link href={service.href} key={service.href}>{service.title}</Link>)}</div>
          <div><h2>Locations</h2><Link href="/cash-for-cars-calgary/">Calgary</Link><Link href="/cash-for-cars-airdrie/">Airdrie</Link><Link href="/cash-for-cars-lethbridge/">Lethbridge</Link></div>
        </div>
        <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Cars for Cash Red Deer.</span><span>Any make. Any condition. Free towing.</span></div>
      </footer>
    </main>
  );
}
