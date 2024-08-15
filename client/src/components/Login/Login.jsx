import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log("Error response:", error.response);
      setError(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg max-w-md w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">Login</h2>
        <p className="text-gray-400">Sign in to your account</p>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-300"
          >
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
