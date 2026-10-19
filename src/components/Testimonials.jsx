import Image from 'next/image';

// Sample content: replace with real traveler feedback before using it publicly.
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Beach holiday traveler',
    image: '/assets/person1.png',
    quote:
      'Booking was quick and the whole trip felt well planned. I found the perfect destination in minutes.',
  },
  {
    name: 'David Okafor',
    role: 'City break traveler',
    image: '/assets/person2.png',
    quote:
      'I loved how easy it was to compare places and manage my booking. I will definitely book again.',
  },
];

const Testimonials = () => {
  return (
    <section aria-labelledby="reviews-heading" className="max-w-7xl mx-auto mt-16 px-6">
      <div className="text-center">
        <h2 id="reviews-heading" className="text-3xl font-bold">What Travelers Say</h2>
        <p className="text-muted mt-2">Stories from people who explored with us</p>
      </div>

      <div className="grid gap-5 mt-10 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure key={item.name} className="border p-6">
            <blockquote className="text-lg">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="flex items-center gap-4 mt-6">
              <Image
                src={item.image}
                alt={item.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;