import { Link } from "react-router";

function Nav() {
  return (
    <nav className="shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] !mb-6 !px-7 flex justify-between items-center">
      <Link to="/">
        <img src="./logo.png" alt="gym-logo" className="h-16 object-cover" />
      </Link>
      <Link to="/">
        <h2 className="text-blue-500 text-xl font-bold">Home</h2>
      </Link>
    </nav>
  );
}

export default Nav;
