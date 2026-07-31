"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-slate-900 to-black px-6">
      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-lg">
        {/* Error Icon */}
        <div className="mb-6 text-7xl">⚠️</div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white">
          Something went wrong!
        </h1>

        {/* Description */}
        <p className="mt-4 text-slate-300">
          We encountered an unexpected error while loading this page.
          Please try again or return to the homepage.
        </p>

        {/* Optional Error Message (Development Only) */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mt-6 rounded-lg bg-red-900/30 p-4 text-left">
            <p className="text-sm text-red-300 font-mono">
              {error.message}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-500"
          >
            🔄 Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-slate-500 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            🏠 Back to Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          If the problem persists, please contact support.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;