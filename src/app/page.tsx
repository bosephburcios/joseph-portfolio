import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-white bg-black">
      <Navbar />
      <Hero />
      <Experience />
    </main>
  );
}
