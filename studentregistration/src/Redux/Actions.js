export const RegistrationAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};

export const LogInAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};
