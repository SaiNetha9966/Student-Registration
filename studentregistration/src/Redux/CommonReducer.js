import INITIAL_STATE from "./IntialState";
import {RegistrationReducer} from "./Reducers"



const reducers = {
    REGISTRATION_DATA_START :RegistrationReducer,
    REGISTRATION_DATA_SUCCESS :RegistrationReducer,
    REGISTRATION_DATA_FAILURE :RegistrationReducer
}

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
