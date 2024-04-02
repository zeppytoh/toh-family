import Image from "next/image";
import heroImage from "../public/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          ありえない、を超えよう。
        </h1>
      </div>
    </div>
  );
};

export default Hero;
