import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as CONSTANTS from "../../../utilities/Constants";
import axios from "axios";
const initialState = {
  allChaptersList: [],
  currentChapter: 1,
  chapterFontSize: 3,
  isLoading: true,
};

export const getChapters = createAsyncThunk(
  "chapters/getChapters",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(CONSTANTS.BASE_URL + "chapters");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    updateCurrentChapter: (state, action) => {
      const currentChapter = action.payload;

      state.currentChapter = currentChapter;
    },
  },
  extraReducers: {
    [getChapters.pending]: (state) => {
      state.isLoading = true;
    },
    [getChapters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allChaptersList = action.payload;
    },
    [getChapters.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(chaptersSlice);
export const { updateCurrentChapter } = chaptersSlice.actions;

export default chaptersSlice.reducer;
