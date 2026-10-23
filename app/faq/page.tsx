import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, ChevronDown, FileCheck2, Gauge, HelpCircle, Home, MapPin, Phone, Recycle, Truck, Wrench } from "lucide-react";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Cash for Cars FAQ | Selling Your Car in Red Deer & Alberta",
  description: "Answers to common questions about selling your car for cash in Red Deer and Alberta: pricing, paperwork, liens, plates, pickup, hail damage and more.",
  alternates: { canonical: "https://www.carsforcashreddeer.ca/faq/" },
  openGraph: { title: "Cash for Cars FAQ | Selling Your Car in Red Deer & Alberta", description: "Straight answers about quotes, paperwork, liens, pickup, payment and vehicle condition.", url: "https://www.carsforcashreddeer.ca/faq/", siteName: "Cars for Cash Red Deer", locale: "en_CA", type: "website", images: [{ url: "/social-share.png", width: 1200, height: 630, alt: "Cars for Cash Red Deer" }] },
  twitter: { card: "summary_large_image", title: "Cash for Cars FAQ", description: "Answers about selling your vehicle for cash in Alberta.", images: ["/social-share.png"] },
};

type Question = { question: string; schemaAnswer: string; answer?: ReactNode };
type Category = { id: string; title: string; icon: typeof HelpCircle; questions: Question[] };
const categories: Category[] = [
  { id: "pricing", title: "Getting a Quote and Pricing", icon: Gauge, questions: [
    { question: "How do you decide what my car is worth?", schemaAnswer: "We look at the year, make, model and trim, the odometer reading, whether it runs, body and mechanical damage, title status, and current demand. For end-of-life vehicles, the weight, current scrap metal prices and the catalytic converter set the base value. Parts in demand can raise the offer above scrap." },
    { question: "Is the quote free, and am I obligated to accept it?", schemaAnswer: "The quote is free and there is no obligation. You can take time to compare it with other offers." },
    { question: "Why might your offer differ from an online valuation tool?", schemaAnswer: "Online tools usually assume a car in average, running condition being sold privately or traded in. Our offer reflects your car's actual condition and a fast, guaranteed sale with free towing included." },
    { question: "Can the price change when you arrive?", schemaAnswer: "Only if the vehicle is materially different from the description, for example if a running car will not start or the catalytic converter is missing but was not mentioned. Accurate descriptions mean the price stays the same." },
    { question: "Do you match other offers?", schemaAnswer: "If you have a written offer from another licensed buyer, share it. We will review it and try to beat it." },
  ]},
  { id: "paperwork", title: "Paperwork and Ownership", icon: FileCheck2, questions: [
    { question: "What documents do I need to sell my car in Alberta?", schemaAnswer: "Your Alberta vehicle registration in your name, government-issued photo ID that matches it, and a bill of sale, which we provide. If there is a loan, we also need your lender's details." },
    { question: "What if I lost my registration?", schemaAnswer: "You can get a replacement from any Alberta registry agent. Call us first and we will tell you exactly what you need for your situation." },
    { question: "Can I sell a car that is registered to someone else?", schemaAnswer: "Only the registered owner, or someone legally authorized to act for them, can sell the vehicle. That includes an executor selling on behalf of an estate, with the appropriate documents." },
    { question: "Can I sell a car that still has a loan on it?", schemaAnswer: "Yes. We confirm the payout with your lender, pay the lender directly and pay you any amount left over. If you owe more than the car is worth, we tell you the shortfall before you commit." },
    { question: "Do I keep my licence plates?", schemaAnswer: "Yes. In Alberta, plates stay with the owner, not the vehicle. Remove them before pickup and keep them for your next vehicle or return them to a registry agent." },
    { question: "Do I need to cancel my insurance?", schemaAnswer: "Yes. Contact your insurer after the sale and give them the date on the bill of sale so you stop paying for coverage on a car you no longer own." },
  ]},
  { id: "pickup", title: "Pickup and Payment", icon: Truck, questions: [
    { question: "Is towing really free?", schemaAnswer: "Yes. There is no towing charge and nothing is deducted from your offer for pickup." },
    { question: "How quickly can you collect my car?", schemaAnswer: "In Red Deer and nearby communities, same-day or next-day pickup is often available. Calgary, Airdrie and Lethbridge are served on scheduled pickup days.", answer: <>In Red Deer and nearby communities, same-day or next-day pickup is often available. <Link href="/cash-for-cars-calgary/">Calgary</Link>, <Link href="/cash-for-cars-airdrie/">Airdrie</Link> and <Link href="/cash-for-cars-lethbridge/">Lethbridge</Link> are served on scheduled pickup days.</> },
    { question: "How will I be paid?", schemaAnswer: "You are paid by cash, e-transfer or certified cheque at pickup, before the vehicle is loaded." },
    { question: "Do I have to be there?", schemaAnswer: "In most cases, yes, so we can check your ID, complete the bill of sale and pay you. If you cannot be present, ask us about other arrangements." },
    { question: "Can you collect a car without keys or with flat tires?", schemaAnswer: "Yes. Our flatbed and wheel-lift equipment handles vehicles with no keys, flat or missing tires, locked steering or seized engines." },
    { question: "What should I take out of the car?", schemaAnswer: "All personal belongings, licence plates, garage door openers, toll passes and parking permits. Clear your phone pairings and saved addresses from the infotainment system too." },
  ]},
  { id: "condition", title: "Vehicle Condition", icon: Wrench, questions: [
    { question: "Do you buy cars that do not run?", schemaAnswer: "Yes. Non-running vehicles are a large part of what we buy. See cash for junk cars.", answer: <>Yes. Non-running vehicles are a large part of what we buy. See <Link href="/cash-for-junk-cars/">cash for junk cars</Link>.</> },
    { question: "Do you buy cars with accident or flood damage?", schemaAnswer: "Yes. We price the damage into the offer. Tell us what happened and send photos if you can." },
    { question: "What about salvage or rebuilt vehicles?", schemaAnswer: "We buy both. A salvage vehicle cannot be re-registered in Alberta until it is repaired and passes a Salvage Vehicle Inspection, so selling it as-is saves you that cost and time." },
    { question: "Do you buy hail damaged cars?", schemaAnswer: "Yes, including vehicles where you kept the insurance settlement. See cash for hail damaged cars.", answer: <>Yes, including vehicles where you kept the insurance settlement. See <Link href="/cash-for-hail-damaged-cars/">cash for hail damaged cars</Link>.</> },
    { question: "Is my car worth more if I sell the parts separately?", schemaAnswer: "Rarely. Removing the catalytic converter, wheels or battery reduces our offer by about as much as those parts would fetch, and selling them takes time. A complete car is usually the better deal." },
  ]},
  { id: "vehicles", title: "Types of Vehicles", icon: CarFront, questions: [
    { question: "What kinds of vehicles do you buy?", schemaAnswer: "Cars, pickup trucks, SUVs, crossovers, minivans and light commercial vans from every major manufacturer." },
    { question: "Do you buy very old vehicles?", schemaAnswer: "Yes. Age is not a barrier. Older vehicles are often priced on weight and parts." },
    { question: "Do you buy vehicles from farms and acreages?", schemaAnswer: "Yes. We collect from yards, fields and outbuildings across Central and Southern Alberta." },
  ]},
  { id: "areas", title: "Service Areas", icon: MapPin, questions: [
    { question: "Where do you buy cars?", schemaAnswer: "Across Red Deer and Central Alberta, including Sylvan Lake, Lacombe, Blackfalds, Innisfail and Penhold, plus Calgary, Airdrie and Lethbridge.", answer: <>Across <Link href="/">Red Deer</Link> and Central Alberta, including Sylvan Lake, Lacombe, Blackfalds, Innisfail and Penhold, plus <Link href="/cash-for-cars-calgary/">Calgary</Link>, <Link href="/cash-for-cars-airdrie/">Airdrie</Link> and <Link href="/cash-for-cars-lethbridge/">Lethbridge</Link>.</> },
    { question: "Is my price lower if I live further away?", schemaAnswer: "No. Distance within our service areas does not reduce your offer." },
  ]},
  { id: "recycling", title: "Recycling and the Environment", icon: Recycle, questions: [
    { question: "What happens to my car after you buy it?", schemaAnswer: "Repairable vehicles are reconditioned and resold. End-of-life vehicles go to licensed recyclers who drain fluids, recycle batteries and tires, salvage parts and recycle the metal. Read more on our scrap car removal page.", answer: <>Repairable vehicles are reconditioned and resold. End-of-life vehicles go to licensed recyclers who drain fluids, recycle batteries and tires, salvage parts and recycle the metal. Read more on our <Link href="/scrap-car-removal/">scrap car removal</Link> page.</> },
  ]},
];

const allQuestions = categories.flatMap((category) => category.questions);

function QuestionList({ questions }: { questions: Question[] }) {
  return <div className="faq-page-list">{questions.map((item) => <details key={item.question}><summary><span>{item.question}</span><ChevronDown aria-hidden="true" /></summary><div><p>{item.answer ?? item.schemaAnswer}</p></div></details>)}</div>;
}

export default function FaqPage() {
  return <main className="faq-page">
    <section className="faq-page-hero"><div className="faq-page-photo" aria-hidden="true"><Image src="/assets/2017-lexus.jpeg" alt="" fill priority sizes="100vw" className="cover-image" /></div><div className="faq-page-overlay" aria-hidden="true" /><div className="page-shell faq-page-hero-inner"><SiteHeader /><div className="faq-page-hero-copy"><nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/"><Home aria-hidden="true" /> Home</Link><span>/</span><span>FAQ</span></nav><span className="eyebrow">Straight answers for Alberta sellers</span><h2 className="page-title">Frequently Asked Questions About Selling Your Car <em>for Cash</em></h2><p>Pricing, paperwork, liens, plates, pickup, hail damage and what happens after the sale.</p><div><a className="primary-button" href="tel:[PHONE]">Ask us directly <Phone aria-hidden="true" /></a><Link className="text-link" href="/#quote">Get a free quote <ArrowRight aria-hidden="true" /></Link></div></div><aside><HelpCircle aria-hidden="true" /><strong>{allQuestions.length}</strong><span>clear answers</span><small>across 7 topics</small></aside></div></section>

    <section className="faq-page-intro section-pad"><div className="page-shell faq-page-intro-grid"><div><span className="eyebrow dark">Before you sell</span><h2>Good questions deserve useful answers.</h2></div><div><p className="lead">Selling a vehicle raises a lot of questions, especially when it is old, damaged or tied up in a loan or insurance claim.</p><p>Below are straight answers to the questions Red Deer and Alberta sellers ask most. If yours is not here, call <a href="tel:[PHONE]">[PHONE]</a> and we will answer it directly.</p></div></div></section>

    <nav className="faq-topic-nav" aria-label="FAQ topics"><div className="page-shell">{categories.map(({ id, title, icon: Icon }) => <a href={`#${id}`} key={id}><Icon aria-hidden="true" /><span>{title}</span></a>)}</div></nav>

    <div className="faq-category-wrap">{categories.map(({ id, title, icon: Icon, questions }, index) => <section className={index % 2 ? "faq-category alternate" : "faq-category"} id={id} key={id}><div className="page-shell faq-category-grid"><header><span>0{index + 1}</span><Icon aria-hidden="true" /><h2>{title}</h2></header><QuestionList questions={questions} /></div></section>)}</div>

    <section className="faq-more section-pad"><div className="page-shell faq-more-grid"><div><HelpCircle aria-hidden="true" /><span className="eyebrow">Still have a question?</span><h2>Go deeper—or ask us directly.</h2><p>Learn the complete sale and pickup sequence on our <Link href="/how-it-works/">How It Works page</Link>, understand end-of-life value through <Link href="/cash-for-scrap-cars/">cash for scrap cars</Link>, or explore options for running vehicles on <Link href="/cash-for-used-cars/">cash for used cars</Link>.</p></div><div><span>Available</span><strong>Daily, 7:00 AM–11:00 PM</strong><a href="tel:[PHONE]"><Phone aria-hidden="true" /> [PHONE]</a><Link href="/#quote">Send us a message <ArrowRight aria-hidden="true" /></Link><Link href="/">Return to cash for cars Red Deer</Link></div></div></section>

    <footer className="site-footer"><div className="page-shell footer-grid"><div className="footer-brand"><Image src="/assets/carsfircashreddeer-logo.png" width={2172} height={724} alt="Cars for Cash Red Deer" /><p>Straight answers and straightforward cash offers across Red Deer and Alberta.</p></div><div><h2>Contact</h2><a href="tel:[PHONE]">[PHONE]</a><span>74C Clearview Dr, Red Deer, AB T4E 0A1</span><span>Open daily, 7:00 AM–11:00 PM</span></div><div><h2>Services</h2><Link href="/scrap-car-removal/">Scrap Car Removal</Link><Link href="/cash-for-used-cars/">Cash for Used Cars</Link><Link href="/cash-for-junk-cars/">Cash for Junk Cars</Link><Link href="/cash-for-scrap-cars/">Cash for Scrap Cars</Link><Link href="/cash-for-hail-damaged-cars/">Hail Damaged Cars</Link></div><div><h2>Locations</h2><Link href="/cash-for-cars-calgary/">Calgary</Link><Link href="/cash-for-cars-airdrie/">Airdrie</Link><Link href="/cash-for-cars-lethbridge/">Lethbridge</Link></div></div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Cars for Cash Red Deer.</span><span>Ask clearly. Get a straight answer.</span></div></footer>
  </main>;
}
