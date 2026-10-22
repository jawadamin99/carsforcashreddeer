import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type QuotePayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  vehicle?: unknown;
  message?: unknown;
  pageUrl?: unknown;
  website?: unknown;
};

const limits = { name: 100, phone: 40, email: 200, city: 100, vehicle: 250, message: 2000, pageUrl: 500 } as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function emailIsValid(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: QuotePayload;
  try {
    payload = await request.json() as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const quote = {
    name: clean(payload.name, limits.name),
    phone: clean(payload.phone, limits.phone),
    email: clean(payload.email, limits.email),
    city: clean(payload.city, limits.city),
    vehicle: clean(payload.vehicle, limits.vehicle),
    message: clean(payload.message, limits.message),
  };

  if (!quote.name || !quote.phone || !quote.city || !quote.vehicle || !quote.message || !emailIsValid(quote.email)) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM, CONTACT_TO, CONTACT_CC } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Quote email configuration is incomplete.");
    return NextResponse.json({ error: "Email delivery is not configured yet. Please call us instead." }, { status: 503 });
  }

  const port = Number.parseInt(SMTP_PORT, 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("SMTP_PORT is invalid.");
    return NextResponse.json({ error: "Email delivery is not configured yet. Please call us instead." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const safe = Object.fromEntries(Object.entries(quote).map(([key, value]) => [key, escapeHtml(value)])) as typeof quote;
  const submittedAt = new Intl.DateTimeFormat("en-CA", { dateStyle: "full", timeStyle: "short", timeZone: "America/Edmonton" }).format(new Date());
  const ipAddress = clean(request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0], 100) || "Unavailable";
  const userAgent = clean(request.headers.get("user-agent"), 500) || "Unavailable";
  const pageUrl = clean(payload.pageUrl, limits.pageUrl) || clean(request.headers.get("referer"), limits.pageUrl) || "Unavailable";
  const tracking = { ipAddress: escapeHtml(ipAddress), userAgent: escapeHtml(userAgent), pageUrl: escapeHtml(pageUrl) };
  const subjectName = quote.name.replace(/[\r\n]+/g, " ");
  const subjectVehicle = quote.vehicle.replace(/[\r\n]+/g, " ");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      bcc: CONTACT_CC || undefined,
      replyTo: quote.email || undefined,
      subject: `New cash offer request — ${subjectVehicle} — ${subjectName}`,
      text: [
        "New quote request from carsforcashreddeer.ca",
        `Submitted: ${submittedAt}`,
        "",
        `Name: ${quote.name}`,
        `Phone: ${quote.phone}`,
        `Email: ${quote.email || "Not provided"}`,
        `City: ${quote.city}`,
        `Vehicle: ${quote.vehicle}`,
        "",
        "Message:",
        quote.message,
        "",
        "Tracking details:",
        `IP address: ${ipAddress}`,
        `User agent: ${userAgent}`,
        `Page URL: ${pageUrl}`,
      ].join("\n"),
      html: `<!doctype html><html><body style="margin:0;background:#ece9e3;font-family:Arial,Helvetica,sans-serif;color:#172025"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ece9e3"><tr><td align="center" style="padding:28px 12px"><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;max-width:620px;background:#fff"><tr><td style="height:6px;background:#ae181e"></td></tr><tr><td style="padding:28px 34px;border-bottom:1px solid #ddd"><img src="https://www.carsforcashreddeer.ca/assets/carsfircashreddeer-logo.png" width="220" alt="Cars for Cash Red Deer" style="display:block;max-width:100%;height:auto"></td></tr><tr><td style="padding:35px 34px 22px"><p style="margin:0 0 10px;color:#ae181e;font-size:11px;font-weight:bold;letter-spacing:1.3px;text-transform:uppercase">New website quote request</p><h1 style="margin:0;font-size:29px;line-height:1.2">${safe.vehicle}</h1><p style="margin:10px 0 0;color:#657075;font-size:13px">Received ${escapeHtml(submittedAt)}</p></td></tr><tr><td style="padding:0 34px 30px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #ddd"><tr><td style="padding:15px 0;border-bottom:1px solid #ddd"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Name</p><p style="margin:0;font-size:15px;font-weight:bold">${safe.name}</p></td></tr><tr><td style="padding:15px 0;border-bottom:1px solid #ddd"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Phone</p><p style="margin:0;font-size:15px;font-weight:bold"><a href="tel:${safe.phone}" style="color:#ae181e">${safe.phone}</a></p></td></tr><tr><td style="padding:15px 0;border-bottom:1px solid #ddd"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Email</p><p style="margin:0;font-size:15px;font-weight:bold">${safe.email || "Not provided"}</p></td></tr><tr><td style="padding:15px 0;border-bottom:1px solid #ddd"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">City</p><p style="margin:0;font-size:15px;font-weight:bold">${safe.city}</p></td></tr><tr><td style="padding:15px 0;border-bottom:1px solid #ddd"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Vehicle details</p><p style="margin:0;font-size:15px;font-weight:bold">${safe.vehicle}</p></td></tr><tr><td style="padding:15px 0"><p style="margin:0 0 5px;color:#727b7f;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Message</p><p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.65">${safe.message}</p></td></tr></table></td></tr><tr><td style="padding:24px 34px;background:#f4f1eb"><p style="margin:0 0 15px;color:#ae181e;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px">Tracking details</p><p style="margin:7px 0;font-size:12px;line-height:1.55;color:#596469"><strong>IP address:</strong> ${tracking.ipAddress}</p><p style="margin:7px 0;font-size:12px;line-height:1.55;color:#596469;overflow-wrap:anywhere"><strong>User agent:</strong> ${tracking.userAgent}</p><p style="margin:7px 0;font-size:12px;line-height:1.55;color:#596469;overflow-wrap:anywhere"><strong>Page URL:</strong> ${tracking.pageUrl}</p></td></tr><tr><td style="padding:22px 34px;background:#172025;color:#b8c2c6;font-size:12px;line-height:1.6">Reply to this email${quote.email ? " to contact the seller" : " or call the phone number above"}. The private notification copy is sent using BCC.</td></tr></table></td></tr></table></body></html>`,
    });
  } catch (error) {
    console.error("Quote email delivery failed:", error);
    return NextResponse.json({ error: "We could not send your request. Please try again or call us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
