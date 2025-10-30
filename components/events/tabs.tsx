'use client';

import clsx from "clsx";
import Link from "next/link";
import { FC, useState } from "react";

const tabs = [
  { name: "Upcoming Programmes", type: "scroll", href: "#upcoming-programmes" },
  { name: "Internal Events", type: "scroll", href: "#internal-events" },
  { name: "Past Events", type: "link", href: "/events/past" },
];

const Tabs: FC = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);
    return (        
        <div className="mt-24 bg-gray-50 border-b border-gray-200 ">
          <nav className="-mb-px flex flex-wrap gap-x-8 max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              // Render a Next.js Link for external navigation
              if (tab.type === 'link') {
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"
                  >
                    {tab.name}
                  </Link>
                );
              }
              // Render a standard anchor tag for in-page scrolling
              return (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.name)}
                  className={clsx(
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg",
                    isActive
                      ? "border-app-primary text-app-primary"
                      : "border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"
                  )}
                >
                  {tab.name}
                </a>
              );
            })}
          </nav>
        </div>
    )
}

export default Tabs;