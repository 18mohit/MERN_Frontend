import React from 'react'
import nature from '../../../assets/nature.jpeg';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { LucideShieldClose } from 'lucide-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/context/contex';
// import useGetallBlackStu from '@/components/hooks/useGetAllBlackStu';

function Sensei({ userr, onDelete }) {
  const { user } = useSelector((store) => store.auth);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  const deleteSensei = async () => {
    try {
        const response = await axios.delete(`${USER_API_END_POINT}/delete/${userr._id}`, {
            withCredentials: true,
        });
        if (response.data?.success) {
            onDelete(userr._id); 
            toast.success("Sensei deleted successfully");
        } else {
            toast.error("Failed to delete Sensei");
        }
    } catch (error) {
        console.error("Error deleting Sensei:", error.response?.data || error.message);
        toast.error("Failed to delete Sensei");
    }
};
  return (
     <div className=' w-[40vw] h-[70vw] sm:h-[23vw] sm:w-[18vw] shadow-xl hover:shadow-slate-500 border border-gray-200 pt-[0vw] pl-[1vw] pr-[1vw] pb-[2vw] rounded '>
          {user && user.role == "Owner" && (
          <button
           onClick={deleteSensei}
            className=' absolute flex p-[0.3vw] bg-red-600 bg-opacity-50 text-white rounded'
            ><LucideShieldClose
            className=' w-[3.5vw] h-[3.5vw] sm:w-[1vw] sm:h-[1vw] '/></button>
           )}
          <img className='pt-2 h-[43vw] sm:h-[15vw] w-full align-middle ' src={userr?.photo} alt="" />
              <div className='grid '>
                    <h1 className='text-[5vw] sm:text-[1.3vw] font-serif text-black ' >{ userr?.fullname }</h1>
                    <span className='text-slate-500 text-[3vw] sm:text-[1vw] font-semibold' >{userr.role}</span>  
                    <Button className='shadow-md hover:shadow-slate-500 text-[3vw] sm:text-[1.2vw]' onPress={onOpen}>More info</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => ( 
            <>
              <ModalHeader className="flex flex-col gap-1">{userr.fullname}</ModalHeader>
              <ModalBody>
                <p>
                {userr?.profile?.bio || userr?.profile?.fullname }
                  {userr?.profile?.email }
                </p>
                
                <p>{userr?.certificate ? (
                        <a
                          className="text-blue-900"
                          target="_blank"
                          href={userr.certificate}
                          rel="noopener noreferrer"
                        >
                          {userr.fullname}'s Certificate
                        </a>
                      ) : (
                        <span>No certificate available</span>
                      )}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
              </div>
     </div>
  )
};

export default Sensei