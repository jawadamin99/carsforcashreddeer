"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = active === index;
        const panelId = `faq-panel-${index}`;
        return (
          <article className={isOpen ? "faq-item faq-open" : "faq-item"} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setActive(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-answer" id={panelId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
