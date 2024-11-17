import React from "react";
import close from "../assets/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <img
          src={close}
          alt="Close icon"
          className="modal__close-icon"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
