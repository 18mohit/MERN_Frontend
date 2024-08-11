import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BLACKSTU_API_END_POINT } from "@/context/contex";

function BlackBeltStu() {
  const [blackStudent, setBlackStudent] = useState([]);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    const fetchBlackStu = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(
            `${BLACKSTU_API_END_POINT}/get/student/${user._id}`,
            { withCredentials: true }
          );
          if (response.data.success) {
            setBlackStudent(response.data.students || []); // Ensure it's an array
          } else {
            console.error("No students found:", response.data.message);
          }
        } else {
          console.error("User ID is not available.");
        }
      } catch (error) {
        console.error("Error fetching BlackStudent:", error);
      }
    };
  
    fetchBlackStu();
  }, [user]);
  
  
  return (
    <div className="max-w-7xl mx-auto bg-slate-900 border border-gray-400 rounded-2xl my-5 p-8">
      <p className="text-[4vw] pb-3 lg:text-[2vw] font-bold text-yellow-300">
       BlackBelt Students of Sensei <span className="font-serif text-yellow-400 ">{user.fullname}</span> 
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-800 text-violet-600">
              <th className="w-[20%] text-[3.5vw] lg:text-[1.6vw] font-bold text-2xl">Date</th>
              <th className="w-[55%] text-[3.5vw] lg:text-[1.6vw] font-bold text-2xl">Name</th>
              <th className="w-[25%] text-[3.5vw] lg:text-[1.6vw] font-bold text-2xl">Certificate</th>
            </tr>
          </thead>
          <tbody>
            {blackStudent.length > 0 ? (
              blackStudent.map((stu, index) => (
                <tr className="hover:bg-slate-800" key={stu._id || index}>
                  <td className="text-sky-100 text-[2.5vw] lg:text-[1.2vw]">
                    {new Date(stu.date).toLocaleDateString()}
                  </td>
                  <td className="text-[3vw] studentname lg:text-[1.3vw]">
                    {stu.studentname}
                  </td>
                  <td>
                    <a
                      className="text-blue-500 text-[2.9vw] lg:text-[1.2vw] underline"
                      href={stu.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificate
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-sky-100">
                  No black belts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlackBeltStu;
