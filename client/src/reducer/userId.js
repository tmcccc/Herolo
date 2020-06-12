const userIdReducer = (state, action) => {
  switch (action.type) {
    case 'change_id':
      return action.id;

    default:
      return state;
  }
};

export { userIdReducer as default };
