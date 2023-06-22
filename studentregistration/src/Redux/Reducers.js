export const RegistrationReducer = (state, payload) => {
  return {
    ...state,
    RegistrationData: payload && payload.data && payload.data,
    RegistrationMsg: payload && payload.message && payload.message,
    RegistrationLoading: payload && payload.loading && payload.loading
  };
};

export const logInReducer = (state, payload) => {
  return {
    ...state,
    logInData: payload && payload.data && payload.data,
    logInMsg: payload && payload.message && payload.message,
    logInLoading: payload && payload.loading && payload.loading
  };
};
