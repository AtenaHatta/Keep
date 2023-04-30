import { combineReducers } from "@reduxjs/toolkit";
import notesSliceReducer from "./notesSlice";
import userSliceReducer from "./userSlice";

export const rootReducer = combineReducers({
  noteData: notesSliceReducer,
  user: userSliceReducer
})