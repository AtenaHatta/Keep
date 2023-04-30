import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import ModalClickOutside from '@/components/hooks/ModalClickOutside';
import { useRef, useEffect } from 'react';

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef() // this is used to close modal on click outside

  // close modal on click outside
  ModalClickOutside(modalRef, isOpen, () => onClose())  

  // scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-overlay" />
      <div ref={modalRef} className="modal-body">
        <button className="modal-close"  onClick={onClose}><GrFormClose /></button>
        {children}
      </div>
    </div>
  )
}

export default Modal;
