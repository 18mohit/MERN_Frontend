import React, { useState, useEffect } from 'react';
import Sensei from './Sensei';
import axios from 'axios';
import AllBlackBeltStu from './AllBlackBeltStu';
import { USER_API_END_POINT } from '@/context/contex';

function Team() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${USER_API_END_POINT}/users`, { withCredentials: true });
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false when the fetch is complete
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (deletedUserId) => {
    setUsers(users.filter(user => user._id !== deletedUserId)); // Filter out the deleted user
  };

  return (
    <>
      <div className="relative">
      {loading ? (
                    <div className="flex  items-center flex-col h-screen">
                    <div className="loader">
                      <img
                        src="https://media.tenor.com/fdALT4i5ERYAAAAC/kung-fu-fighting.gif"
                        alt="kung fu gif"
                        className="w-[30vw] h-[40vw] sm:w-[20vw] sm:h-[30vw]"
                      />
                    </div>
                    <p className="font-serif text-[5vw]  sm:text-[2vw]">Please wait...</p>
                  </div>
                  
                ) : (
          <div>
            {
              users.length < 1 ? (
                <span>Member is not available</span>
              ) : (
                <div className='flex justify-center bg-slate-200 p-5'>
                  <div className="grid grid-cols-2 bg-slate-200 lg:grid-cols-5 gap-4">
                    {users.map((userr, index) => (
                      <div key={index}>
                        <Sensei userr={userr} onDelete={handleDelete} />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            <AllBlackBeltStu />
          </div>
        )}
      </div>
    </>
  );
}

export default Team;
