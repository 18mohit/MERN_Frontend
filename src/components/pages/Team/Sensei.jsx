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
     <div className=' w-[40vw] h-[70vw] lg:h-[23vw] lg:w-[18vw] shadow-xl hover:shadow-slate-500 border border-gray-200 pt-[0vw] pl-[1vw] pr-[1vw] pb-[2vw] rounded '>
          {user && user.role == "Owner" && (
          <button
           onClick={deleteSensei}
            className=' absolute flex p-[0.3vw] bg-red-600 bg-opacity-50 text-white rounded'
            ><LucideShieldClose
            className=' w-[3.5vw] h-[3.5vw] lg:w-[1vw] lg:h-[1vw] '/></button>
           )}
          <img className='pt-2 h-[43vw] lg:h-[15vw] w-full align-middle ' src={userr?.photo} alt="" />
              <div className='grid '>
                    <h1 className='text-[5vw] lg:text-[1.3vw] font-serif text-black ' >{ userr?.fullname }</h1>
                    <span className='text-slate-500 text-[3vw] lg:text-[1vw] font-semibold' >{userr.role}</span>  
                    <Button className='shadow-md hover:shadow-slate-500 text-[3vw] lg:text-[1.2vw] ' onPress={onOpen}>More info</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => ( 
            <>
              <ModalHeader className="flex flex-col gap-1">{userr.fullname}</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
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