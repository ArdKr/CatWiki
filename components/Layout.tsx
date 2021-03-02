import Logo from "../components/Logo";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto pt-3 md:pt-6 px-3 md:px-0">
      <Logo />

      {children}
    </div>
  );
};

export default Layout;
