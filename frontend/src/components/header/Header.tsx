import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks/query";
import { useAuth } from "@/context/authContext";

function Header() {
  const { mutate, isPending } = useLogout();
  const { isLoggedin, user } = useAuth();
  const handleLogout = () => {
    mutate();
  };
  return (
    <header className="px-8 py-4 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/50"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">MyWebsite</h1>
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="#" className="hover:text-blue-600">
            About
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          {!isLoggedin ? (
            <>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>{" "}
            </>
          ) : (
            <Button onClick={handleLogout} disabled={isPending}>
              {isPending ? "Logging out..." : "Logout"}
            </Button>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <div className="bg-black p-2 px-4 rounded-full text-white">{user.username.slice(0, 1).toUpperCase()}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
