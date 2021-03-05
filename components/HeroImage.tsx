import Image from "next/image";

interface HeroImageProps {
  imagePath?: string;
  height?: number;
  width?: number;
}

const HeroImage = ({
  imagePath = "/HeroImage.png",
  height = 808,
  width = 1873,
}: HeroImageProps) => {
  return (
    <div className="select-none flex justify-center min-h-small">
      <Image src={imagePath} alt="hero" height={height} width={width} />
    </div>
  );
};

export default HeroImage;
