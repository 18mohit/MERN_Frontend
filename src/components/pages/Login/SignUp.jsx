import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../../../context/contex";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    profile: {},
    photo: null,
    certificate: null,
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFilechangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files?.[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submitData = new FormData();
    submitData.append("fullname", formData.fullname);
    submitData.append("email", formData.email);
    submitData.append("password", formData.password);
    submitData.append("role", formData.role);
    submitData.append("photo", formData.photo);
    submitData.append("certificate", formData.certificate);

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data && res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
      // Clear the form fields on error
      setFormData({
        fullname: "",
        email: "",
        password: "",
        role: "",
      });
      setLoading(false); // Stop loading indicator
    }
  };

  return (
<div className="flex items-center justify-center p-4 bg-gray-100">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 p-8 space-y-6 bg-white rounded shadow-md">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Sign Up.</h2>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          className="block text-sm sm:text-base md:text-lg font-medium text-gray-700"
          htmlFor="fullname"
        >
          Name
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          required
        />
      </div>
      <div>
        <label
          className="block text-sm sm:text-base md:text-lg font-medium text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          required
        />
      </div>
      <div>
        <label
          className="block text-sm sm:text-base md:text-lg font-medium text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          required
        />
      </div>
      <div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex flex-wrap justify-around">
            {["Student", "Sensei", "Owner"].map((role, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  checked={formData.role === role}
                  onChange={handleInputChange}
                  value={role}
                  className="cursor-pointer w-[1.6vw] h-[1.6vw]"
                />
                <Label htmlFor={`r${index}`} className="text-sm sm:text-base md:text-lg">{role}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div>
        <label
          className="block text-sm sm:text-base md:text-lg font-medium text-gray-700"
          htmlFor="photo"
        >
          Photo
        </label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={onFilechangeHandler}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          required
        />
      </div>
      <div>
        <label
          className="block text-sm sm:text-base md:text-lg font-medium text-gray-700"
          htmlFor="certificate"
        >
          Certificate
        </label>
        <input
          type="file"
          name="certificate"
          accept="image/*"
          onChange={onFilechangeHandler}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className={`w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          loading ? "opacity-50" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Submitting....." : "Submit"}
      </button>
    </form>
    <p className="text-sm sm:text-base md:text-lg text-center text-gray-600">
      Already have an account?{" "}
      <NavLink to="/login">
        <button className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">
          Sign in
        </button>
      </NavLink>
    </p>
  </div>
</div>

  );
};

export default SignUp;
