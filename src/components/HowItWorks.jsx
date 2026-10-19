const steps = [
  {
    title: 'Explore',
    description:
      'Browse featured places or search all destinations by location, budget and duration.',
  },
  {
    title: 'Book',
    description:
      'Pick a destination, check the details, and book your trip in just a few clicks.',
  },
  {
    title: 'Travel',
    description:
      'Manage or cancel any booking from My Bookings, then pack your bags.',
  },
];

const HowItWorks = () => {
  return (
    <section aria-labelledby="how-heading" className="max-w-7xl mx-auto mt-16 px-6">
      <div className="text-center">
        <h2 id="how-heading" className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted mt-2">Planning your next trip takes three simple steps</p>
      </div>

      <ol className="grid gap-5 mt-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="border p-6">
            <span className="text-5xl font-bold text-cyan-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-bold mt-4">{step.title}</h3>
            <p className="text-muted mt-2">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;