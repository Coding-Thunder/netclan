import drawerTypes from "./drawer.types";

const INITIAL_STATE = {
  show: false,
};

const drawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case drawerTypes.TOOGLE_DRAWER:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default drawerReducer;
