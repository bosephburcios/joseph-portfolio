"use client";

import Image from "next/image";

const projects = [
  { image: "/images/hero-cards/ut.jpeg" },
  { image: "/images/hero-cards/code.jpeg" },
  { image: "/images/hero-cards/sax.jpeg" },
  { image: "/images/hero-cards/remodel.jpeg" },
  { image: "/images/hero-cards/setup.jpeg" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#000000] via-[#050812] to-[#0a0e18] text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(60,100,255,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[1600px] h-[800px] rounded-full blur-[160px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4),transparent_70%)]" />

      {/* main centered container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1200px] px-6 space-y-10 -mt-8">
        {/* text + button */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in-up">
            Joseph Turcios
          </h1>
          <p
            className="text-gray-400 text-lg animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            Software Engineer • UT Austin • AWS
          </p>
          <button
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className="mt-6 px-10 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            Explore My Work
          </button>
        </div>

        {/* sliding cards */}
        <div className="relative w-full max-w-[1100px] overflow-hidden mt-16">
          {/* gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0e18] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0e18] to-transparent z-20" />

          {/* sliding track */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex gap-6 w-[200%]">
              {[...projects, ...projects].map((proj, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-[220px] ${
                    i % 2 === 0 ? "h-[280px]" : "h-[250px]"
                  } rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500`}
                >
                  <Image
                    src={proj.image}
                    alt={`project-${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
