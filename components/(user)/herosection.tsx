import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* First Image */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-screen">
        <Image
          src="/public2.jpg"
          alt="Background 1"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Second Image */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-screen">
        <Image
          src="/public1.jpg"
          alt="Background "
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
