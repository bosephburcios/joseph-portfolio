"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-10 py-4 bg-black/80 backdrop-blur-xl rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-lg tracking-tight">JT</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-2 text-gray-300 text-sm">
          {[
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Personal", href: "#personal" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 rounded-full transition-all duration-300 hover:text-white hover:brightness-125 group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/40 transition-transform duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
