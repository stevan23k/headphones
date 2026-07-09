import Scene from "@/components/scene";
import Phase02 from "@/components/phase02";
import Hero from "@/components/hero/hero";
import Line from "@/components/line";
import Phase03 from "@/components/phase03";

export default function Home() {
  return (
    <div>
      <Scene />
      <div className="relative z-20">
        <Line />
      </div>
      <div>
        <Hero />
      </div>
      <div className="relative z-10">
        <Phase02 />
      </div>
      <div>
        <Phase03 />
      </div>
    </div>
  );
}
