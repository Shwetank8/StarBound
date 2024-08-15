import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState(""); // Add username state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username, // Include username in the signup request
        email,
        password,
      });
      console.log(response.data);
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg max-w-lg w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">Sign Up</h2>
        <p className="text-gray-400">Create a new account</p>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
            autoComplete="new-password"
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-300"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
