import React from 'react';
import './../../css/userId.css';

const UserId = ({ dispatch, UserId }) => {
  return (
    <>
      <input
        type="text"
        placeholder="user id"
        name="user_id"
        value={UserId}
        onChange={(e) => dispatch({ type: 'change_id', id: e.target.value })}
        required
        maxLength={40}
      />
    </>
  );
};

export default UserId;
