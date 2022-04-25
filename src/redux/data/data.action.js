import axios from "axios";
import dataTypes from "./data.types";

// const url = "http://localhost:5000/";
const url = "https://vinaybaseapi.herokuapp.com/";

export const fetch50 = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}netclan`);
    dispatch({
      type: dataTypes.SET_DATA_TO_VISUALIZE,
      payload: response.data.data.splice(0, 50),
    });
  } catch (error) {
    dispatch({ type: dataTypes.SET_ERROR, payload: error.message });
  }
};

export const fetch100 = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}netclan`);
    dispatch({
      type: dataTypes.SET_DATA_TO_VISUALIZE,
      payload: response.data.data.splice(0, 100),
    });
  } catch (error) {
    dispatch({ type: dataTypes.SET_ERROR, payload: error.message });
  }
};

export const fetchAll = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}netclan`);
    dispatch({
      type: dataTypes.SET_DATA_TO_VISUALIZE,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: dataTypes.SET_ERROR, payload: error.message });
  }
};
