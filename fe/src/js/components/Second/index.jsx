import React, { useState, useEffect, useContext } from "react";
import Modal, { ActiveModalProvider } from "./Modal";
import ToggleContent from "./useModal";

import styles from "./styles.scss";

const Dashboard = (props) => {
  const [maxWidth, setMaxWidth] = useState(1024);
  const [minWidth, setMinWidth] = useState(200);
  const [minHeight, setMinHeight] = useState(300);
  const [maxHeight, setMaxHeight] = useState(1024);
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(200);
  const [modals, setModals] = useState([]);
  const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState("");

  let containerRef = null;

  useEffect(() => {
    const { offsetWidth, offsetHeight } = containerRef;
    setMaxHeight(offsetHeight);
    setMaxWidth(offsetWidth);
  }, [maxHeight, maxWidth, containerRef]);

  function addModals() {
    const _id = `modal-${count}`;
    const cmp = (
      <ToggleContent
        key={_id}
        width={width}
        height={height}
        id={_id}
        toggle={(show) => (
          <button
            className={`btn btn-primary`}
            onClick={show}
          >{`Modal ${count}`}</button>
        )}
        close={(hide, id) => (
          <button
            className={`btn btn-danger`}
            onClick={() => {
              if (modals.length > 0) {
                setActiveModal([...modals].pop().props.id);
              } else {
                setActiveModal("");
              }
              hide();
            }}
          >
            Close
          </button>
        )}
      >
        <span>{`This is Modal - ${count}`}</span>
      </ToggleContent>
    );

    setCount(count + 1);
    setActiveModal(_id);
    setModals([...modals, cmp]);
  }

  return (
    <ActiveModalProvider value={activeModal}>
      <div className={styles.dashboard}>
        <div className={`form-inline m-2 ${styles.toolbar}`}>
          <div className="input-group mr-2">
            <label htmlFor="height">Height: </label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              min={minHeight}
              max={maxHeight}
              aria-describedby="heightHelp"
              placeholder="Enter Height in PX"
              onBlur={() => {
                if (height < minHeight) {
                  setHeight(minHeight);
                } else if (height > maxHeight) {
                  setHeight(maxHeight);
                }
              }}
              onChange={(eOpts) => setHeight(eOpts.target.value)}
            />
          </div>
          <div className="input-group mr-2">
            <label htmlFor="width">Width: </label>
            <input
              type="number"
              className="form-control"
              id="width"
              min={minWidth}
              max={maxWidth}
              value={width}
              aria-describedby="widthHelp"
              placeholder="Enter Width in PX"
              onBlur={() => {
                if (width < minWidth) {
                  setWidth(minWidth);
                } else if (width > maxWidth) {
                  setWidth(maxWidth);
                }
              }}
              onChange={(eOpts) => setWidth(eOpts.target.value)}
            />
          </div>
          <button className={`btn btn-primary mr-2`} onClick={addModals}>
            Create
          </button>
          <button
            className={`btn btn-link`}
            onClick={() => props.history.push("/")}
          >
            Approach 1
          </button>
        </div>
        <div
          className={styles.modalContainer}
          ref={(ref) => (containerRef = ref)}
        >
          {modals.map((c, cIdx) => {
            return c;
          })}
        </div>
        <div id="modal-el"></div>
      </div>
    </ActiveModalProvider>
  );
};

export default Dashboard;
