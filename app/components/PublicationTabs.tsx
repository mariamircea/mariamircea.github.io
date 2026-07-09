"use client";

import { useState } from "react";
import type { Conference, Publication } from "../data/site";
import { ConferenceList } from "./ConferenceList";
import { PublicationList } from "./PublicationList";

type ActiveTab = "publications" | "conferences";

const tabs: { id: ActiveTab; label: string }[] = [
  { id: "publications", label: "Publications" },
  { id: "conferences", label: "Conferences" },
];

export function PublicationTabs({
  publications,
  conferences,
}: {
  publications: Publication[];
  conferences: Conference[];
}) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("publications");

  return (
    <section>
      <div
        className="inline-flex rounded-sm border border-stone-300 p-1"
        role="tablist"
        aria-label="Publication page sections"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              id={`${tab.id}-tab`}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-stone-950 text-white"
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {activeTab === "publications" ? (
          <div
            role="tabpanel"
            id="publications-panel"
            aria-labelledby="publications-tab"
          >
            <PublicationList publications={publications} />
          </div>
        ) : (
          <div
            role="tabpanel"
            id="conferences-panel"
            aria-labelledby="conferences-tab"
          >
            <ConferenceList conferences={conferences} />
          </div>
        )}
      </div>
    </section>
  );
}
