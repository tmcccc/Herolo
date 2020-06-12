import React, { useReducer } from 'react';
import userIdReducer from './../../reducer/userId';
import UserId from './UserId';
import Messages from './Messages';

const GetMessages = () => {
  const [userId, dispatch] = useReducer(userIdReducer, '');

  return (
    <>
      <UserId dispatch={dispatch} userId={userId} />
      <Messages userId={userId} />
    </>
  );
};

export default GetMessages;
