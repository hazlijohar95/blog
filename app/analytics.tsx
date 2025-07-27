"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function AnalyticsWrapper() {
  return (
    <>
      <Analytics 
        mode="production"
        debug={false}
      />
      <SpeedInsights 
        sampleRate={0.1} // Sample 10% of users for performance monitoring
      />
    </>
  );
}
