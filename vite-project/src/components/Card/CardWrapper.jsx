import { useDispatch, useSelector } from 'react-redux'
import Card from '@/components/Card/Card'
import { deleteNote } from '@/redux/notesSlice'

function CardWrapper() {
  const dispatch = useDispatch(); 
  const notes = useSelector((state) => state.noteData); // state of store
  // console.log(notes);

  // delete (send to Redux)
  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }

  return (
    <div className='card-wrapper'>
    { notes.length  > 0
     ? notes.map((note) => (
      <Card 
      key={note.id} 
      id={note.id} 
      title={note.title} 
      text={note.text} 
      date={note.date}
      handleDelete={handleDelete}
      />
     ))
    : ""}
    </div>
  )
}

export default CardWrapper