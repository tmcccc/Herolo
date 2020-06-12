import React, { useState } from 'react';
import Alert from './Alert';
import './../css/addMessage.css';

import create from './../api/create';
const AddMessage = () => {
  const [sender, setSender] = useState('');
  const [reciver, setReciver] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({ status: false, kind: '', message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    const returnedAlert = await create(
      JSON.stringify({ sender, reciver, subject, message })
    );

    setMessage('');
    setReciver('');
    setSubject('');
    setSender('');

    setAlert({
      ...alert,
      status: true,
      kind: returnedAlert.kind,
      message: returnedAlert.message,
    });
  };

  return (
    <>
      {alert.status && <Alert {...alert} />}
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="sender"
            name="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
            maxLength={40}
          />
          <small className="form-text">please enter your Id</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="reciver"
            name="reciver"
            value={reciver}
            onChange={(e) => setReciver(e.target.value)}
            required
            maxLength={40}
          />
          <small className="form-text">please enter reciver Id</small>
        </div>

        <div className="form-group">
          <textarea
            name="text"
            cols="10"
            rows="3"
            placeholder="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            maxLength={40}
          />
          <small className="form-text">
            please enter the subject of the message
          </small>
        </div>

        <div className="form-group">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={150}
          />
          <small className="form-text">please enter the message</small>
        </div>
        <button
          onClick={() => setAlert({ ...alert, kind: '', message: '' })}
          className="btn btn-dark my-1"
        >
          {' '}
          submit{' '}
        </button>
      </form>
    </>
  );
};

export default AddMessage;
