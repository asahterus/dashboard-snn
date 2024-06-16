import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Team from "./components/team/Team";
import Fitur from "./components/fitur/Fitur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto">
      <Hero />
      <Fitur />
      <Team />

    </main>
  );
}
