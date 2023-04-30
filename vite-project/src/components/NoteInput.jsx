import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import { v4 as uuid } from 'uuid';

const NoteInput = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // unique id
  const id = uuid();

  // title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  // text
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // submit (send to Redux)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(  // dispatch action
      addNote({ // payload
      id: id, 
      title: title,
      text: text,
      date: new Date().toLocaleDateString()
    }));
    setTitle(''); // clear title after submit
    setText('')  // clear text after submit
  };


  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input  
      className="addBar" 
      type="text" 
      placeholder='title'
      value={title} 
      onChange={handleTitleChange}
      />
      <textarea  
      className="addBar" 
      type="text" 
      placeholder='text'
      value={text} 
      onChange={handleTextChange} 
      />
      <button 
      className="addButton" 
      type="submit"
      >Submit</button>
    </form>
  )
};

export default NoteInput;
