import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRecovery = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
    console.log("Recovery email:", email);
    // Simulate recovery process
    alert("Password recovery email sent!");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleRecovery}
        >
          <h2 className="text-center text-2xl font-bold mb-4">
            Password Recovery
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Recovery Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordRecovery;
