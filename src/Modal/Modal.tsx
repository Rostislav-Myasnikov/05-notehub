import css from "./Modal.module.css";
import  NoteForm  from "../NoteForm/NoteForm";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface ModalProp {
    closeModal: () => void
}

 

export default function Modal({closeModal}:ModalProp) {

const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
}

 useEffect(() => {
	  const handleKeyDown = (e: KeyboardEvent) => {
	    if (e.key === "Escape") {
	      closeModal();
	    }
	  };
	
	  document.addEventListener("keydown", handleKeyDown);
	
	  return () => {
	    document.removeEventListener("keydown", handleKeyDown);
	  };
	}, [closeModal]);
  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className={css.modal}><NoteForm onClose={closeModal}/></div>
    </div>,
    document.body
  );
}
