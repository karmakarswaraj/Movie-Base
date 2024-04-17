import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: "", 
        genres: [] 
    },
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        }
    }
});

export default homeSlice.reducer;

export const { setUrl, setGenres } = homeSlice.actions;
