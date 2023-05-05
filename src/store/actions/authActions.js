import * as api from "../../api";
import { openAlertMessage } from "./alertActions";
export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

const setUserDetail = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};
const login = (userDetails, navigate) => {
  const userDetail = userDetails;
  return async (dispatch) => {
    const response = await api.login(userDetail);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetail(userDetails));
      navigate("/dashboard");
    }
  };
};

const register = (userDetails, navigate) => {
  const userDetail = userDetails;
  return async (dispatch) => {
    const response = await api.register(userDetail);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      console.log(response);
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetail(userDetails));
      navigate("/dashboard");
    }
  };
};
