import Image from "next/image";
import Input from "./Input";

interface DropdownSearchProps {
  placeholder?: string;
  icon?: string;
  //   Will be applied to both the input and the button
  style?: object;
  name: string;
}

interface IconProps {
  src: string;
}

const Icon = ({ src }: IconProps) => {
  return (
    <>
      <Image src={src} height={24} width={24} alt="icon" />
    </>
  );
};

const DropdownSearch = ({
  placeholder,
  icon,
  style = {},
  name,
}: DropdownSearchProps) => {
  const onChange = () => {
    //
  };

  return (
    <div>
      {/* Input will be displayed if user is on pc or tablet (lg breakpoint) */}
      <div className="relative mt-12">
        <Input placeholder={placeholder} style={style} onChange={onChange} />
        <span className="absolute top-3 right-5 lg:top-6 lg:right-8 hidden md:block">
          <Icon src={icon} />
        </span>
      </div>

      {/* Button will be displayed on smaller devices (smaller than lg breakpoint) */}
      <button className="flex justify-items-center justify-between items-center md:hidden bg-white text-brown-dark px-4 py-1 text-sm font-semibold rounded-4xl gap-5 mt-3">
        {name} <Icon src={icon} />
      </button>
    </div>
  );
};

export default DropdownSearch;
