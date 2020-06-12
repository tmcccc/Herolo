export const getSend = (data, userId) => ({ type: 'get_sent', data, userId });

export const getRecive = (data, userId) => ({
  type: 'get_reciver',
  data,
  userId,
});

export const deleteCMessage = (id) => ({
  type: 'delete_message',
  id,
});

export const initMessages = () => ({ type: 'init_messages' });
