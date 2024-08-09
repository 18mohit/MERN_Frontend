import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpSensei = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    photo: "",
    certificate: "",
  });
  const [error, setError] = useState(null);

  const toggleForm = () => {
    navigate("/login/sensei");
  };

  const roleText = role.charAt(0).toUpperCase() + role.slice(1);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const result = await axios.post(
        "https://mern-backend-ti7y.onrender.com/sensei/create",
        formData
      );
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Sign Up for <span className="text-yellow-400">{roleText}</span>
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="fullname"
            >
              Name
            </label>
            <input
              type="text"
              id="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              type="file"
              id="photo"
              value={formData.photo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="certificate"
            >
              certificate
            </label>
            <input
              type="file"
              id="certificate"
              value={formData.certificate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-sm"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={toggleForm}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpSensei;
