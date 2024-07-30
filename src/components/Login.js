import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "./common/Input";
import Button from "./common/Button";
import "./Login.css"; // Assuming this file contains additional custom styles

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url(https://wallpaperbat.com/img/8344887-wallpaper-forest-mountain-fog-5k.jpg)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-effect max-w-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-center text-3xl font-bold mb-4 text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Sign In</Button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-200 hover:text-blue-500"
              to="/password-recovery"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-300 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-200 hover:text-blue-500 font-bold"
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
