import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/CatwikiLogo.svg" width={130} height={45} alt="logo" />
    </div>
  );
};

export default Logo;
