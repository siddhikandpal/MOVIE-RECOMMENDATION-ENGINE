import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    //jb jb movie add ki jaae data yaha aa jaen
    loadmovie: (state, action) => {
      state.info = action.payload;
    },
    removemovie: (state, action) => {
        state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadmovie, removemovie } = movieSlice.actions;

export default movieSlice.reducer;
