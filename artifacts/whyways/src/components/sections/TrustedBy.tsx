import React from 'react';

const partners = [
  'Microsoft',
  'AWS',
  'Google Cloud',
  'Meta',
  'Oracle',
  'IBM',
  'SAP',
  'Salesforce',
  'HubSpot',
  'Accenture',
  'Deloitte',
  'ServiceNow',
];

export const TrustedBy = () => {
  return (
    <section className="py-12 border-y border-border bg-background overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="flex w-[200%] animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[...partners, ...partners, ...partners].map((name, index) => (
          <div
            key={`${name}-${index}`}
            className="flex-1 flex items-center justify-center min-w-[160px] px-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="font-heading font-bold text-lg text-foreground whitespace-nowrap tracking-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
