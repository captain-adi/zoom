import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/50"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold text-gray-800">MyWebsite</h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to={"/signup"}>
          <Button>Singup</Button>
        </Link>
        <Link to={"login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
