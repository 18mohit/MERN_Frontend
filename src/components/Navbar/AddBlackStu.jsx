import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { BLACKSTU_API_END_POINT } from "@/context/contex";

function AddBlackStu({ addStuopen, setAddStuOpen }) {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user); // Corrected to access auth slice
  const [formData, setFormData] = useState({
    studentname: "",
    date: "",
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user || !user._id) {
      toast.error("User is not authenticated.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("studentname", formData.studentname);
    data.append("date", formData.date);
    if (formData.certificate) {
      data.append("certificate", formData.certificate);
    }
    data.append("userId", user._id); // add the user ID to the form data

    try {
      const response = await axios.post(
        `${BLACKSTU_API_END_POINT}/register`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data?.success) {
        toast.success("Student added successfully!");
        setAddStuOpen(false);
      }
    } catch (error) {
      console.log("Error details:", error.response?.data || error.message);
      toast.error("Failed to add student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={addStuopen} onOpenChange={setAddStuOpen}>
      <DialogContent className="bg-slate-600">
        <DialogHeader>
          <DialogTitle>Add Your Black Belt</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="studentname">Full Name</Label>
              <Input
                id="studentname"
                name="studentname"
                value={formData.studentname}
                onChange={handleChange}
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="certificate">Certificate</Label>
              <Input
                id="certificate"
                name="certificate"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="col-span-3 border border-gray-400"
              />
            </div>
          </div>
          <DialogFooter>
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? "opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddBlackStu;