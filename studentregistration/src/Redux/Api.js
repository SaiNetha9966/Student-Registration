import axios from "axios";
import { RegistrationAction, LogInAction } from "./Actions";
import * as Constants from "./Constants";

const headers = {
  "access-control-allow-origin": "*",
  "Content-Type": "application/x-www-form-urlencoded"
};

export const registerStudent = (data) => async (dispatch) => {
  dispatch(RegistrationAction(Constants.REGISTRATION_DATA_START, {}, "", true));
  console.log(data);
  let config = {
    method: "post",
    url: "http://localhost:5043/api/Registration/Registration",
    data: data
  };

  await axios(config)
    .then((response) => {
      dispatch(
        RegistrationAction(
          Constants.REGISTRATION_DATA_SUCCESS,
          response,
          response.message,
          false
        )
      );
      console.log(response);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            RegistrationAction(
              Constants.REGISTRATION_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            RegistrationAction(
              Constants.REGISTRATION_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            RegistrationAction(
              Constants.REGISTRATION_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 502) {
          dispatch(
            RegistrationAction(
              Constants.REGISTRATION_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else
          dispatch(
            RegistrationAction(
              Constants.REGISTRATION_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const logInStudent = (data) => async (dispatch) => {
  dispatch(LogInAction(Constants.LOGIN_DATA_START, {}, "", true));
  let config = {
    method: "post",
    url: "http://localhost:5043/api/Registration/Login",
    data: data
  };

  console.log(headers);

  await axios(config)
    .then((response) => {
      dispatch(
        LogInAction(
          Constants.LOGIN_DATA_SUCCESS,
          response,
          response.message,
          false
        )
      );
      console.log(response);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            LogInAction(
              Constants.LOGIN_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            LogInAction(
              Constants.LOGIN_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            LogInAction(
              Constants.LOGIN_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 502) {
          dispatch(
            LogInAction(
              Constants.LOGIN_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else
          dispatch(
            LogInAction(
              Constants.LOGIN_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
