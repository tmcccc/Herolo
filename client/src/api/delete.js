const deleteMessage = async (messageId) => {
  try {
    await fetch(`api/v1/messages/${messageId}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    });

    return true;
  } catch (error) {
    return false;
  }
};

export default deleteMessage;
