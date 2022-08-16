const reducer = (state = [], action) => {
  switch (action.type) {
    case "create":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
