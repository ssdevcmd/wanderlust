import Image from 'next/image';

const features = [
  {
    icon: '/assets/MapTrifold.png',
    title: 'Curated Destinations',
    description:
      'Handpicked places and tour packages, so every trip is worth your time.',
  },
  {
    icon: '/assets/Headset.png',
    title: 'Friendly Support',
    description:
      'Questions before or during your trip? Our team is here to help.',
  },
  {
    icon: '/assets/ShieldCheck.png',
    title: 'Secure Booking',
    description:
      'Sign in to book, view and manage all your reservations safely in one place.',
  },
];

const WhyChooseUs = () => {
  return (
    <section aria-labelledby="why-heading" className="max-w-7xl mx-auto mt-16 px-6">
      <div className="text-center">
        <h2 id="why-heading" className="text-3xl font-bold">Why Choose Wanderlust</h2>
        <p className="text-muted mt-2">Everything you need for a smooth, memorable trip</p>
      </div>

      <div className="grid gap-5 mt-10 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="border p-6 text-center transition hover:border-cyan-500">
            <Image
              src={feature.icon}
              alt=""
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
            <p className="text-muted mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;