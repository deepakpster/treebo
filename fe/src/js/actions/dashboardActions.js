// @flow

export function addModal(modal) {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_MODAL", modal });
  };
}

export function hideModal(index) {
  return (dispatch, getState) => {
    dispatch({ type: "REMOVE_MODAL", index });
  };
}
