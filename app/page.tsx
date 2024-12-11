import Hero from "./components/Hero";
import SecTwo from "./components/SecTwo";
import Suffer from "./components/Suffer";
import Tech from "./components/Tech";
import Three from "./components/Three";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main className="container  [font-family:--font-monadi] flex flex-col max-w-[100vw] overflow-hidden  justify-center items-center bg-[#000000] text-white">
      <Hero />
      <SecTwo />
      <WhySec />
      <Suffer />
      <Three />
      <Tech />
    </main>
  );
}
