import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch images
export const fetchImages = createAsyncThunk('gallery/fetchImages', async () => {
  const response = await axios.get('http://localhost:4000/api/images');
  return response.data;
});

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    images: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },


});

export const { addImage } = gallerySlice.actions;

export default gallerySlice.reducer;
