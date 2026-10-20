'use client';

import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const CallToAction = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <section aria-labelledby="cta-heading" className="relative mt-16 overflow-hidden text-white">
      <Image
        src="/assets/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-24 text-center">
        <h2 id="cta-heading" className="text-4xl font-bold md:text-5xl">
          Ready for Your Next Adventure?
        </h2>

        <p className="max-w-2xl text-lg">
          Discover breathtaking destinations and book your next unforgettable trip today.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/destinations" className="uppercase bg-cyan-500 px-5 py-3">
            Explore Destinations
          </Link>

          {/* Wait for the session check so the button never flashes the wrong state */}
          {!isPending && (
            <Link
              href={session ? '/my-bookings' : '/signup'}
              className="uppercase bg-white/50 px-5 py-3"
            >
              {session ? 'My Bookings' : 'Sign Up'}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;