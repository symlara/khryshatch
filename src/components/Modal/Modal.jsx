import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button onClick={toggleModal}>Enter the fall</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
