import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const login = (formData, history, setError) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred during login. Please try again.");
    }
  }
};

export const register = (formData, history , setError) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    setError(error.message);
    console.log(error);
  }
};
