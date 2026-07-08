import Scene from "@/components/scene";
import Description_01 from "@/components/description-01";
import Hero from "@/components/hero/hero";
import Line from "@/components/line";

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
        <Description_01 />
      </div>
    </div>
  );
}
