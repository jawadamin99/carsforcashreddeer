"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const serviceLinks = [
  ["Scrap Car Removal", "/scrap-car-removal/"],
  ["Cash for Used Cars", "/cash-for-used-cars/"],
  ["Cash for Junk Cars", "/cash-for-junk-cars/"],
  ["Cash for Scrap Cars", "/cash-for-scrap-cars/"],
  ["Hail Damaged Cars", "/cash-for-hail-damaged-cars/"],
] as const;

const aboutLinks = [
  ["About Us", "/about/"],
  ["How It Works", "/how-it-works/"],
  ["Frequently Asked Questions", "/faq/"],
] as const;

const locationLinks = [
  ["Red Deer", "/"],
  ["Calgary", "/cash-for-cars-calgary/"],
  ["Airdrie", "/cash-for-cars-airdrie/"],
  ["Lethbridge", "/cash-for-cars-lethbridge/"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"about" | "services" | "locations" | null>(null);

  const close = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Cars for Cash Red Deer home" onClick={close}>
        <Image
          src="/assets/carsfircashreddeer-logo.png"
          width={2172}
          height={724}
          alt="Cars for Cash Red Deer"
          priority
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="main-navigation" className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
        <Link href="/" onClick={close}>Home</Link>
        <div className={openDropdown === "about" ? "nav-dropdown dropdown-open" : "nav-dropdown"}>
          <button type="button" aria-expanded={openDropdown === "about"} onClick={() => setOpenDropdown((value) => value === "about" ? null : "about")}>About <ChevronDown size={16} aria-hidden="true" /></button>
          <div className="dropdown-menu">
            {aboutLinks.map(([label, href]) => <Link href={href} key={href} onClick={close}>{label}</Link>)}
          </div>
        </div>
        <div className={openDropdown === "services" ? "nav-dropdown dropdown-open" : "nav-dropdown"}>
          <button
            type="button"
            aria-expanded={openDropdown === "services"}
            onClick={() => setOpenDropdown((value) => value === "services" ? null : "services")}
          >
            Services <ChevronDown size={16} aria-hidden="true" />
          </button>
          <div className="dropdown-menu">
            {serviceLinks.map(([label, href]) => (
              <Link href={href} key={href} onClick={close}>{label}</Link>
            ))}
          </div>
        </div>
        <div className={openDropdown === "locations" ? "nav-dropdown dropdown-open" : "nav-dropdown"}>
          <button type="button" aria-expanded={openDropdown === "locations"} onClick={() => setOpenDropdown((value) => value === "locations" ? null : "locations")}>Locations <ChevronDown size={16} aria-hidden="true" /></button>
          <div className="dropdown-menu">
            {locationLinks.map(([label, href]) => <Link href={href} key={href} onClick={close}>{label}</Link>)}
          </div>
        </div>
        <Link href="/contact/" onClick={close}>Contact</Link>
      </nav>

      <a className="header-call" href="tel:[PHONE]" aria-label="Call Cars for Cash Red Deer">
        <Phone size={18} aria-hidden="true" />
        <span>[PHONE]</span>
      </a>
    </header>
  );
}
