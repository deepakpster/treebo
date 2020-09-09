import React from "react";
import ModalComponenet from "./modal";
import styles from "./styles.scss";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minWidth: 200,
      maxWidth: 1024,
      width: 200,
      minHeight: 300,
      maxHeight: 1024,
      height: 300,
      modals: [], // Component state
    };
    this.createModal = this.createModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const { offsetWidth, offsetHeight } = this.containerRef;
    this.setState({
      maxWidth: offsetWidth,
      maxHeight: offsetHeight,
    });
  }
  createModal() {
    const { height, width, modals } = this.state;
    this.props.dashboardActions.addModal({
      height,
      width,
      visible: true,
    });
    // this.setState({
    //   modals: [...modals, { height, width, visible: true }],
    // });
  }
  closeModal() {
    const { modals } = this.state;
    this.hideModal(modals.length - 1);
  }
  hideModal(index) {
    // const { modals } = this.state;
    // modals.splice(index, 1);
    // this.setState([...modals]);
    this.props.dashboardActions.hideModal(index);
  }
  render() {
    const {
      height,
      width,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth,
      // modals,
    } = this.state;

    const { modals, active } = this.props.dashboardState;

    return (
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
                  this.setState({ height: minHeight });
                } else if (height > maxHeight) {
                  this.setState({ height: maxHeight });
                }
              }}
              onChange={(eOpts) =>
                this.setState({ height: eOpts.target.value })
              }
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
                  this.setState({ width: minWidth });
                } else if (width > maxWidth) {
                  this.setState({ width: maxWidth });
                }
              }}
              onChange={(eOpts) => this.setState({ width: eOpts.target.value })}
            />
          </div>
          <button className={`btn btn-primary mr-2`} onClick={this.createModal}>
            Create
          </button>
          <button className={`btn btn-danger`} onClick={this.closeModal}>
            Close
          </button>
        </div>
        <div
          className={styles.modalContainer}
          ref={(ref) => (this.containerRef = ref)}
        >
          {modals.map((m, mIdx) => {
            const { height, width, id } = m;
            return (
              <ModalComponenet
                key={id}
                width={width}
                minWidth={minWidth}
                maxWidth={maxWidth}
                height={height}
                minHeight={minHeight}
                maxHeight={maxHeight}
                index={id}
                hideModal={this.hideModal}
                closable={id === active}
              >
                <p>{`This is modal - ${id}`}</p>
              </ModalComponenet>
            );
          })}
        </div>
        <div id="modal-root"></div>
      </div>
    );
  }
}
