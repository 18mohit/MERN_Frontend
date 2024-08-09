import React, { useState, useEffect } from 'react';
import Sensei from './Sensei';
import axios from 'axios';
import AllBlackBeltStu from './AllBlackBeltStu';

function Team() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/users", { withCredentials: true });
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <div>
      {
        users.length < 1 ? (
          <span>Member is not available</span>
        ) : (
          <div className='flex justify-center bg-slate-200 p-5'>
            <div className="grid grid-cols-2 bg-slate-200 lg:grid-cols-5 gap-4">
              {users.map((user, index) => (
                <div key={index}>
                  <Sensei user={user} />
                </div>
              ))}
            </div>
          </div>
        )
      }
      <AllBlackBeltStu/>
      </div>
    </>
  );
}

export default Team;