import React, { useState } from "react";
import { Pen } from "lucide-react";
import BlackBeltStu from "./BlackBeltStu";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import AddBlackStu from "./AddBlackStu";

function Profile() {
  const [open, setOpen] = useState(false);
  const [addStuopen, setAddStuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <div className="bg-slate-600">
        <div className="bg-slate-900 max-w-7xl mx-auto border border-gray-400 rounded-2xl my-5 p-8">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="w-[25vw] h-[30vw] cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src={user?.photo || "https://via.placeholder.com/150"}
                  alt="Profile"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-medium text-xl">{user?.fullname}</h1>
                    <span className="text-gray-600">
                      {user?.profile?.bio || "No bio available"}
                    </span>
                  </div>
                  <div>
                    <h1 className="font-medium text-xl">
                      Your Black Belt Students
                    </h1>
                    <span className="text-gray-600">20</span>
                    {/* Replace with dynamic data if available */}
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold mt-[1vw]">Bio</h1>
                  <p className="max-w-[40vw]">
                    {user?.profile?.bio ||
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi enim doloremque dolor soluta ad ducimus eaque. Perferendis, obcaecati? Commodi assumenda enim quibusdam optio quaerat dicta quam illo aperiam velit."}
                  </p>
                  <div className="flex justify-between max-w-[32vw]">
                    <div>
                      <h1 className="font-semibold mt-[1vw]">Contact Number</h1>
                      <h1>{user?.profile?.contactNumber || "1234567890"}</h1>
                    </div>
                    <div>
                      <h1 className="font-medium mt-[1vw] text-xl">
                        Certificate
                      </h1>
                      {user?.certificate ? (
                        <a
                          className="text-blue-900"
                          target="_blank"
                          href={user.certificate}
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      ) : (
                        <span>No certificate available</span>
                      )}
                      <div>
                        <button
                          onClick={() => setAddStuOpen(true)}
                          className="mt-[6vw]"
                        >
                          Add Student
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(true)} className="">
              <Pen />
            </button>
          </div>
        </div>
        <div className="bg-slate-900">
          <BlackBeltStu />
          <UpdateProfile open={open} setOpen={setOpen} />
          <AddBlackStu addStuopen={addStuopen} setAddStuOpen={setAddStuOpen} />
        </div>
      </div>
    </>
  );
}

export default Profile;
