export const RegistrationReducer = (state, payload) => {
  return {
    ...state,
    RegistrationData: payload && payload.data && payload.data,
    RegistrationMsg: payload && payload.message && payload.message,
    RegistrationLoading: payload && payload.loading && payload.loading,
  };
};
