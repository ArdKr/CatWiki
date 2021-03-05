import Image from "next/image";

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
  style,
  name,
}: DropdownSearchProps) => {
  return (
    <div>
      {/* Input will be displayed if user is on pc or tablet (lg breakpoint) */}
      <input
        type="text"
        placeholder={placeholder}
        style={style}
        className="px-5 py-3 lg:px-7 lg:py-5 rounded-4xl text-brown-dark placeholder-brown-dark text-md lg:text-lg font-medium hidden md:block"
      />

      {/* Button will be displayed on smaller devices (smaller than lg breakpoint) */}
      <button className="flex justify-items-center justify-between items-center md:hidden bg-white text-brown-dark px-4 py-1 text-sm font-semibold rounded-4xl gap-5 mt-3">
        {name} <Icon src={icon} />
      </button>
    </div>
  );
};

export default DropdownSearch;
