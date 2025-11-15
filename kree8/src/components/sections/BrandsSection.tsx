export function BrandsSection() {
  const brands = [
    'Brand 1',
    'Brand 2',
    'Brand 3',
    'Brand 4',
    'Brand 5',
    'Brand 6',
    'Brand 7',
    'Brand 8',
  ];

  return (
    <section className="py-12 overflow-hidden bg-background">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="mx-8 body-lg text-muted-foreground font-semibold"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}