import { configureStore } from '@reduxjs/toolkit';
import chaptersSlice from '../store/features/chapters/chapetersSlice'
export const store = configureStore({
  reducer: {
    chapters: chaptersSlice
  },
});