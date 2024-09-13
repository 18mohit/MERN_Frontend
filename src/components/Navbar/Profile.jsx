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
        <div className="bg-slate-900 max-w-7xl mx-auto border border-gray-400 rounded-2xl p-8">
          <div className="sm:flex sm:justify-between">
            <div className=" grid w-full justify-center sm:justify-normal sm:flex gap-4">
              <div className="w-full h-full sm:w-[25vw] sm:h-[30vw] cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src={user?.photo || "https://via.placeholder.com/150"}
                  alt="Profile"
                />
              </div>
              <div>
                <div className="block sm:flex sm:justify-between">
                  <div>
                    <h1 className="text-white font-medium text-xl">{user?.fullname}</h1>
                    <span className="text-gray-600">
                      {user?.role || "No bio available"}
                    </span>
                  </div>
                  {/* <div>
                    <h1 className="font-medium text-xl">
                      Your Black Belt Students
                    </h1>
                    <span className="text-gray-600">20</span>
                  </div> */}
                </div>
                <div>
                  <h1 className=" text-white font-semibold mt-[1vw]">Bio</h1>
                  <p className=" text-slate-400 w-full sm:max-w-[40vw]">
                    {user?.profile?.bio ||
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quasi enim doloremque dolor soluta ad ducimus eaque. Perferendis, obcaecati? Commodi assumenda enim quibusdam optio quaerat dicta quam illo aperiam velit."}
                  </p>
                  <div className="flex gap-[10vw] w-full sm:max-w-[32vw]">
                    <div>
                      <h1 className=" text-white font-semibold mt-[1vw]">Contact Number</h1>
                      <h1 className="text-slate-500" >{user?.profile?.contactNumber || "1234567890"}</h1>
                    </div>
                    <div>
                      <h1 className="font-medium text-white mt-[1vw] text-xl">
                        Certificate
                      </h1>
                      {user?.certificate ? (
                        <a
                          className="text-blue-900 text-lg "
                          target="_blank"
                          href={user.certificate}
                          rel="noopener noreferrer"
                        >
                          Click here..
                        </a>
                      ) : (
                        <span>No certificate available</span>
                      )}
                      <div>
                        <button
                          onClick={() => setAddStuOpen(true)}
                          className="mt-[6vw] font-bold  bg-yellow-400 p-2"
                        >
                          Add Student
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(true)} className="sm:-mt-[30vw] text-white ">
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