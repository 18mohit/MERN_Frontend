import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../ui/input";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { GALLERY_API_END_POINT } from "@/context/contex";

function AddImage({ openAddImage, setOpenAddImage, addNewImage }) {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user); 
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { files } = e.target;
    setImage(files[0]);
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
    if (image) {
      data.append("image", image);
    }
    data.append("userId", user._id);

    try {
      const response = await axios.post(
        `${GALLERY_API_END_POINT}/gallery`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data?.success) {
        toast.success("Image uploaded successfully!");
        addNewImage(response.data.data); // Add new image to gallery
        setOpenAddImage(false);
      }
    } catch (error) {
      console.log("Error details:", error.response?.data || error.message);
      toast.error("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openAddImage} onOpenChange={setOpenAddImage}>
      <DialogContent className="bg-slate-600">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                name="image"
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
              {loading ? "Uploading..." : "Upload"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddImage;
