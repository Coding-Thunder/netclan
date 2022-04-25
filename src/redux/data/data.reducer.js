import dataTypes from "./data.types";

const INITIAL_STATE = {
  data: null,
  error: "",
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataTypes.SET_DATA_TO_VISUALIZE:
      return {
        ...state,
        data: action.payload,
      };
    case dataTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
