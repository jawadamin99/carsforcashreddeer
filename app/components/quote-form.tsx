"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(form);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your request.");
      setStatus("error");
    }
  }

  return (
    <form className="quote-form" id="quote" onSubmit={handleSubmit} aria-label="Request a cash offer">
      <div className="form-heading">
        <span className="eyebrow">Free, no-obligation quote</span>
        <h2>Tell us what you drive.</h2>
      </div>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Full name" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(403) 000-0000" required />
        </label>
        <label>
          <span>Email <small>Optional</small></span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>City</span>
          <input name="city" type="text" autoComplete="address-level2" placeholder="Red Deer" required />
        </label>
        <label className="full-field">
          <span>Vehicle details</span>
          <input name="vehicle" type="text" placeholder="Year, make, model and condition" required />
        </label>
        <label className="full-field">
          <span>Message</span>
          <textarea name="message" rows={2} placeholder="Anything else we should know?" required />
        </label>
        <label className="form-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="submit-button" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Get my cash offer"} <ArrowRight size={20} aria-hidden="true" />
      </button>
      {status === "success" ? (
        <p className="form-status" role="status">
          <CheckCircle2 size={19} aria-hidden="true" />
          Thanks—your quote request has been sent. We will contact you shortly.
        </p>
      ) : status === "error" ? (
        <p className="form-error" role="alert">{errorMessage}</p>
      ) : (
        <p className="form-note">No fees. No obligation. Your information stays private.</p>
      )}
    </form>
  );
}
