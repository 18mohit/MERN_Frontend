import { BLACKSTU_API_END_POINT } from '@/context/contex';
import { setAllBlackStu } from '@/store/sensei-student-Slice';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetallBlackStu() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllBlackStu  = async () => {
            try {
                const res = await axios.get(`${BLACKSTU_API_END_POINT}/get`, { withCredentials: true });
                if(res.data.success) {
                    dispatch(setAllBlackStu(res.data.blackStu))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBlackStu();
    }, [])
}

export default useGetallBlackStu