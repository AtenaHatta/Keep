import { useState } from 'react';
 
 function ShowModal() {
   const [showModal, setShowModal] = useState(false);

   const handleOpenModal = () => {
    setShowModal(false)
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }

   return (
     <div>
      <button onClick={handleOpenModal}>Open</button>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <Card />
          <button onClick={handleCloseModal}></button>
        </Modal>
     </div>
   )
 }
 
 export default ShowModal