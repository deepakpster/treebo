import React, { useState, useContext } from "react";
import Modal, { ActiveModalContext } from "./Modal";

const ToggleContent = ({ toggle, close, children, id, width, height }) => {
  const [isShown, setIsShown] = React.useState(true);

  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  const activeModal = useContext(ActiveModalContext);

  const toggleShow = () => setIsShown(!isShown);
  const component = (
    <React.Fragment>
      {isShown && (
        <Modal width={width} height={height}>
          {activeModal == id && close(hide, id)}
          {children}
        </Modal>
      )}
    </React.Fragment>
  );
  return component;
};
export default ToggleContent;
