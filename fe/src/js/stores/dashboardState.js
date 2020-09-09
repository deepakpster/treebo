const initialState = {
  modals: [],
  idCounter: 0,
  active: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MODAL":
      console.log("Add Modal");
      const idCounter = { ...state }.idCounter + 1;
      const id = `modal-${idCounter}`;
      return {
        ...state,
        active: id,
        idCounter,
        modals: [...state.modals, { ...action.modal, id: id }],
      };
    case "REMOVE_MODAL":
      const findIndex = [...state.modals].findIndex(
        (m) => m.id === action.index
      );
      state.modals.splice(findIndex, 1);
      const activeElId =
        state.modals.length > 0
          ? state.modals[state.modals.length - 1].id
          : null;
      return { ...state, active: activeElId, modals: [...state.modals] };
    default:
      return { ...state };
  }
};
