import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 px-6">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-xl text-center">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-wider text-white md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg leading-8 text-slate-300">
          The page you're looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500"
          >
            🏠 Back to Home
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-slate-400">
          Error Code: <span className="font-semibold text-red-400">404</span>
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;