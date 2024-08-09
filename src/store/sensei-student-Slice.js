import { createSlice } from '@reduxjs/toolkit';

const blackStuSclice = createSlice({
    name : "blackStu",
    initialState : {
         allBlackStu : [],
         searchStudentByText: "",
    },
    reducers: {
        setAllBlackStu: (state, action) => {
            state.allBlackStu = action.payload;
        },
        setsearchStudentByText: (state, action) => {
            state.searchStudentByText = action.payload;
        }
    }
});
export const { setAllBlackStu, setsearchStudentByText } = blackStuSclice.actions; 
export default blackStuSclice.reducer;