import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {  // dispatch from NoteInput.jsx
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          text: action.payload.text,
          date: action.payload.date
        }
      ];
    },
    edditNote: (state, action) => {  // dispatch from Card.jsx
      const index = state.findIndex((note) => note.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].text = action.payload.text;
      state[index].date = action.payload.date;
    },
    deleteNote: (state, action) => { // dispatch from CardWrapper.jsx
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, edditNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
