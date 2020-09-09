import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.scss";

const Modal = React.memo((props) => {
  const domEl = document.getElementById("modal-root");

  if (!domEl) return null;

  const { closable, index, hideModal, children } = props;

  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);

  return ReactDOM.createPortal(
    <div
      className={`card ${styles.modal}`}
      style={{
        left: `calc(50vw - ${width / 2}px)`,
        top: 60,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <div className="card-header">
        <span>{`Header ${index}`}</span>
        {closable && (
          <span
            className={`material-icons float-right clickable`}
            onClick={() => hideModal(index)}
          >
            close
          </span>
        )}
      </div>
      <div className={`card-body`}>{children}</div>
    </div>,
    domEl
  );
});

export default Modal;
