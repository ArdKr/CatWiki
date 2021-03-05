import Logo from "../components/Logo";

const Layout = ({ children }) => {
  return (
    <main className="container mx-auto pt-3 md:pt-6 px-3 md:px-0">
      <Logo />

      {children}
    </main>
  );
};

export default Layout;
