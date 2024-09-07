import React, { useState, useEffect } from 'react';
import Masonry from "react-responsive-masonry";
import AddImage from './AddImage';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { LucideArrowLeft, LucideArrowRight, LucideDownload, LucideShieldClose } from 'lucide-react';
import { GALLERY_API_END_POINT } from '@/context/contex';

function MyGallery() {
    const [images, setImages] = useState([]);
    const [data, setData] = useState({ img: "", i: 0 });
    const [openAddImage, setOpenAddImage] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((store) => store.auth);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${GALLERY_API_END_POINT}/gallery/allimages`, {
                    withCredentials: true,
                });

                if (response.data?.success) {
                    setImages(response.data.images || []);
                }
            } catch (error) {
                console.error("Error fetching images:", error.response?.data || error.message);
                toast.error("Failed to load images.");
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    const viewImage = (img, i) => {
        setData({ img, i });
    };

    const imageAction = (action) => {
        let newIndex = data.i;

        if (action === 'previous-img') {
            newIndex = (newIndex <= 0) ? images.length - 1 : newIndex - 1;
        } else if (action === 'next-img') {
            newIndex = (newIndex >= images.length - 1) ? 0 : newIndex + 1;
        } else if (!action) {
            setData({ img: "", i: 0 });
            return;
        }

        setData({ img: images[newIndex].image, i: newIndex });
    };

    const addNewImage = (newImage) => {
        setImages([newImage, ...images]);
    };

    const downloadImage = async (url) => {
        try {
            const response = await axios.get(url, { responseType: 'blob' });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'image.jpg';
            link.click();
            window.URL.revokeObjxectURL(link.href);
        } catch (error) {
            console.error("Error downloading image:", error);
            toast.error("Failed to download image.");
        }
    };

    const deleteImage = async (imageId) => {
        try {
            const response = await axios.delete(`${GALLERY_API_END_POINT}/image/${imageId}`, {
                withCredentials: true,
            });
            if (response.data?.success) {
                setImages(images.filter((img) => img._id !== imageId));
                toast.success("Image deleted successfully");
            } else {
                toast.error("Failed to delete image");
            }
        } catch (error) {
            console.error("Error deleting image:", error.response?.data || error.message);
            toast.error("Failed to delete image");
        }
    };

    return (
        <>
            {data.img && 
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50'>
                    <button
                        onClick={() => imageAction()}
                        className='absolute top-5 right-5 p-2 h-10 w-10 border border-white text-white'>X</button>
                    <button
                        onClick={() => imageAction("previous-img")}
                        className='absolute left-5 top-1/2 transform -translate-y-1/2 p-2 border border-white'> <LucideArrowLeft/> </button>
                    <img
                        className='max-w-[90%] max-h-[90%]'
                        src={data.img} alt="" />
                    <button
                        onClick={() => imageAction("next-img")}
                        className='absolute right-5 top-1/2 transform -translate-y-1/2 p-2 border border-white'> <LucideArrowRight/> </button>
                </div>
            }

            <div className={`p-2 ${data.img ? 'filter blur-md' : ''}`}>
                {loading ? (
                    <div className="flex items-center flex-col h-screen">
                        <div className="loader">
                            <img
                                src="https://media.tenor.com/fdALT4i5ERYAAAAC/kung-fu-fighting.gif"
                                alt="kung fu gif"
                                className="w-[30vw] h-[40vw] sm:w-[20vw] sm:h-[30vw]"
                            />
                        </div>
                        <p className="font-serif text-[5vw] sm:text-[2vw]">Please wait...</p>
                    </div>
                ) : (
                    <Masonry columnsCount={4} gutter="10px">
                        {images.length <= 0 ? (
                            <p className="font-serif">No images available</p>
                        ) : (
                            images.reverse().map((image, i) => (
                                <div key={i} className='relative'>
                                    <img
                                        src={image.image}
                                        className='w-full cursor-pointer'
                                        onClick={() => viewImage(image.image, i)}
                                    />
                                    <button
                                        onClick={() => downloadImage(image.image)}
                                        className='absolute bottom-[0.5vw] right-[0.5vw] p-[0.3vw] bg-gray-900 bg-opacity-50 text-white rounded'>
                                        <LucideDownload
                                            className=' w-[3.5vw] h-[3.5vw] lg:w-[1vw] lg:h-[1vw] '
                                        />
                                    </button>
                                    {user && user.role === "Owner" && (
                                        <button
                                            onClick={() => deleteImage(image._id)}
                                            className='absolute top-[0.5vw] left-[0.5vw] p-[0.3vw] bg-red-600 bg-opacity-50 text-white rounded'>
                                            <LucideShieldClose
                                            className=' w-[3.5vw] h-[3.5vw] lg:w-[1vw] lg:h-[1vw] '/>
                                        </button>
                                    )}
                                </div>
                            ))
                        )}
                    </Masonry>
                )}
            </div>

            {user && user.role === "Owner" && (
                <div className="flex justify-center mt-4">
                    <button
                        className="h-10 rounded-xl bg-gray-900 hover:bg-gray-950 border text-white font-bold px-8 py-2 transition duration-500"
                        onClick={() => setOpenAddImage(true)}
                    >
                        Add Image
                    </button>
                </div>
            )}

            <div>
                <AddImage openAddImage={openAddImage} setOpenAddImage={setOpenAddImage} addNewImage={addNewImage} />
            </div>
        </>
    );
}

export default MyGallery;
