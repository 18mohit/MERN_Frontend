import React from 'react'
import nature from '../../../assets/nature.jpeg';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
// import useGetallBlackStu from '@/components/hooks/useGetAllBlackStu';

function Sensei({ user }) {
  // useGetallBlackStu();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
     <div className=' w-[40vw] h-[70vw] lg:h-[23vw] lg:w-[18vw] shadow-xl hover:shadow-slate-500 border border-gray-200 pt-[0vw] pl-[1vw] pr-[1vw] pb-[2vw] rounded '>
          <img className='pt-2 h-[43vw] lg:h-[15vw] w-full align-middle ' src={user?.photo} alt="" />
              <div className='grid '>
                    <h1 className='text-[5vw] lg:text-[1.3vw] font-serif text-black ' >{ user?.fullname }</h1>
                    <span className='text-slate-500 text-[3vw] lg:text-[1vw] font-semibold' >{user.role}</span>  
                    <Button className='shadow-md hover:shadow-slate-500 text-[3vw] lg:text-[1.2vw] ' onPress={onOpen}>More info</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => ( 
            <>
              <ModalHeader className="flex flex-col gap-1">{user.fullname}</ModalHeader>
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
                <p>{user?.certificate ? (
                        <a
                          className="text-blue-900"
                          target="_blank"
                          href={user.certificate}
                          rel="noopener noreferrer"
                        >
                          {user.fullname}'s Certificate
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