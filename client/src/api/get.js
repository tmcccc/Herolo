import AwesomeDebouncePromise from 'awesome-debounce-promise';

const get = AwesomeDebouncePromise(async function (userId) {
  try {
    const res = await fetch(`/api/v1/messages/${userId}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    const obj = await res.json();

    return obj.messages;
  } catch (err) {
    return [];
  }
}, 500);

export default get;
