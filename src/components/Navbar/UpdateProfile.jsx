import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { LayoutDashboardIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/context/contex";
import { setUser } from "@/store/authSlice";
import { toast } from "sonner";

function UpdateProfile({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    bio: user?.profile?.bio || "",
    photo: user?.photo,
    certificate: user?.certificate,
  });

  const [photo, setPhoto] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const photoChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const certificateChangeHandler = (e) => {
    setCertificate(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", user.email); // Make sure to send the email
    formData.append("bio", input.bio);
    if (photo) {
      formData.append("photo", photo);
    }
    if (certificate) {
      formData.append("certificate", certificate);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog className="bg-slate-600" open={open}>
      <DialogContent
        className="bg-slate-600"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname">Name</Label>
              <Input
                id="fullname"
                name="fullname"
                onChange={onChangeHandler}
                value={input.fullname}
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                onChange={onChangeHandler}
                name="bio"
                value={input.bio}
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="certificate">Certificate</Label>
              <Input
                id="certificate"
                name="certificate"
                onChange={certificateChangeHandler}
                type="file"
                accept="image/*"
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="photo">Image</Label>
              <Input
                id="photo"
                name="photo"
                onChange={photoChangeHandler}
                type="file"
                accept="image/*"
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProfile;
