import INITIAL_STATE from "./IntialState";
import { RegistrationReducer, logInReducer } from "./Reducers";

const reducers = {
  REGISTRATION_DATA_START: RegistrationReducer,
  REGISTRATION_DATA_SUCCESS: RegistrationReducer,
  REGISTRATION_DATA_FAILURE: RegistrationReducer,

  LOGIN_DATA_START: logInReducer,
  LOGIN_DATA_SUCCESS: logInReducer,
  LOGIN_DATA_FAILURE: logInReducer
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
