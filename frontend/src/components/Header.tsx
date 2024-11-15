import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary p-4 text-white flex justify-between items-center shadow-md z-50 px-10">
      <h1 className="text-2xl font-extrabold">TEST APP</h1>
      <nav className="flex gap-4">
        <Link to="/" className="font-medium">
          Home
        </Link>
        <Link to="/contact" className="font-medium">
          Contact
        </Link>
        <Link to="/todo" className="font-medium">Todo</Link>
      </nav>
    </header>
  );
};

export default Header;
