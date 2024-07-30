import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          MyApp
        </Link>
        <div>
          <Link to="/" className="text-white px-3 hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-white px-3 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
