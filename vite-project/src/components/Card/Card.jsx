import { useState, useRef } from "react";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import Modal from "@/components/Modal/Modal";
import { useDispatch } from "react-redux";
import { edditNote } from "@/redux/notesSlice";


function Card({ id, title, text, date, handleDelete }) {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // update (send to Redux)
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef1.current.value);
    dispatch( // dispatch action
      edditNote({ // payload
        id: id,
        title: inputRef1.current.value,
        text: inputRef2.current.value,
        date: new Date().toLocaleDateString(),
      })
    );
    inputRef1.current.value = ""; // clear title after update
    inputRef2.current.value = ""; // clear text after update
    handleCloseModal();
  };

  return (
    <div className="card">
      <div className="card-header">
        <span onClick={handleOpenModal}>
          <MdOutlineEdit />
        </span>
        <span onClick={() => handleDelete(id)}>
          <MdDeleteForever />
        </span>
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{date}</p>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <h2>Edit Note</h2>
          <form onSubmit={handleUpdateSubmit} >
            <input
              type="text"
              ref={inputRef1}
              placeholder="Title"
              defaultValue={title}
            />
            <input 
            placeholder="Text" 
            type="text"
            ref={inputRef2}
            defaultValue={text}
            />
            <button type="submit">Save</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Card;
