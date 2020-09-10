import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.scss";

const ModalContext = React.createContext("");

const Modal = ({ children, width, height }) =>
  ReactDOM.createPortal(
    <div
      className={`card ${styles.modal}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        top: `calc(50vh - ${height / 2 - 60}px)`,
        left: `calc(50vw - ${width / 2}px)`,
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-el")
  );

export const ActiveModalContext = ModalContext;
export const ActiveModalProvider = ModalContext.Provider;
export default Modal;
