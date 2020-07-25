import axios from "./Axios";
import { LOGGIN_SUCCESSFULL, LOGGIN_FAILURE,REGISTER_SUCESSFULL, REGISTER_FAILURE } from "./ActionType";

export const login = (user) => (dispatch) => {
  axios
    .post(
      `/users/login`,
      user,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch({
        type: LOGGIN_SUCCESSFULL,
      });
      console.log(response);
      localStorage.setItem("usertoken", response.data.token);
      return response.data.token;
    })
      .catch((error) => {
        console.log(error);

      dispatch({
        type: LOGGIN_FAILURE,
      });
    });
};


export const register = (newUser) => (dispatch) => {
  axios
    .post(
      `/users/register`,
     newUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(response);
      dispatch({
        type: REGISTER_SUCESSFULL,
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};