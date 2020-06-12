const create = async (body) => {
  try {
    const res = await fetch(`api/v1/messages`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const obj = await res.json();

    if (obj.status === 'success')
      return { kind: 'good', message: 'the new message was created' };
  } catch (error) {
    return { kind: 'bad', message: 'you got a error' };
  }
};

export default create;
