export function MarqueeSection() {
  const requests1 = [
    'Landing Page',
    'Contact Page need to update',
    'Pitch deck urgent',
    'Branding',
  ];

  const requests2 = [
    'Landing Page',
    'Contact Page need to update',
    'Pitch deck urgent',
    'Branding',
    'Logo',
  ];

  return (
    <section className="py-12 overflow-hidden bg-muted/20">
      <div className="space-y-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...requests1, ...requests1, ...requests1].map((request, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-3 bg-card border border-border rounded-full body-md"
            >
              {request}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="heading-lg">kree8ing…</p>
        </div>

        <div className="flex animate-marquee whitespace-nowrap">
          {[...requests2, ...requests2, ...requests2].map((request, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-3 bg-card border border-border rounded-full body-md"
            >
              {request}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-secondary hover:underline heading-md"
          >
            Just click
          </button>
        </div>
      </div>
    </section>
  );
}