const messagesReducer = (state, action) => {
  switch (action.type) {
    case 'get_sent':
      return action.data.filter((message) => message.sender === action.userId);

    case 'get_reciver':
      return action.data.filter((message) => message.reciver === action.userId);

    case 'delete_message':
      const messages = [...state];
      return messages.filter((message) => message._id !== action.id);

    case 'init_messages':
      return [];

    default:
      return state;
  }
};

export { messagesReducer as default };
