"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CONSENT_KEY = "amanyadav.analytics-consent";
type Choice = "granted" | "denied";

export function AnalyticsProvider() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "granted" || stored === "denied") setChoice(stored);
    } catch {
      // Private mode can throw on read; treat that as "no choice yet".
    }
    setSettled(true);
  }, []);

  function decide(next: Choice) {
    try {
      localStorage.setItem(CONSENT_KEY, next);
    } catch {
      // Nothing to do — the choice just won't persist.
    }
    setChoice(next);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {settled && !choice && (
        <div className="consent" role="region" aria-label="Analytics consent">
          <p className="consent-copy">
            Cookieless traffic analytics are off by default. Allow them and I see page counts, nothing that identifies
            you. Details in the <a href="/privacy">privacy policy</a>.
          </p>
          <div className="consent-actions">
            <button type="button" className="consent-deny" onClick={() => decide("denied")}>Essential only</button>
            <button type="button" className="consent-allow" onClick={() => decide("granted")}>Allow analytics</button>
          </div>
        </div>
      )}
    </>
  );
}
