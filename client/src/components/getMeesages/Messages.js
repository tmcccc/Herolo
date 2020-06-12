import React, { useEffect, useState, useReducer } from 'react';
import get from './../../api/get';
import '../../css/messages.css';
import RenderMessages from './RenderMessages';
import messagesReducer from './../../reducer/messages';
import { initMessages, getSend, getRecive } from './../../actions/message';
import Modal from 'react-modal';
import customStyles from '../../css/modal';

const Messages = ({ userId }) => {
  const [choosenTab, setChosen] = useState('sent');
  const [deleted, setdeleted] = useState(false);
  const [messages, dispatch] = useReducer(messagesReducer, []);

  useEffect(() => {
    const fetcData = async () => {
      if (/\S/.test(userId)) {
        const data = await get(userId);

        if (choosenTab === 'sent') dispatch(getSend(data, userId));
        else dispatch(getRecive(data, userId));
      } else dispatch(initMessages());
    };

    fetcData();
  }, [userId, dispatch, choosenTab]);

  return (
    <>
      <div className="tab">
        <button
          onClick={() => setChosen('sent')}
          className={choosenTab === 'sent' ? 'act tablinks ' : 'tablinks'}
        >
          send
        </button>
        <button
          onClick={() => setChosen('recive')}
          className={choosenTab === 'recive' ? 'act tablinks ' : 'tablinks'}
        >
          recive
        </button>
      </div>
      {messages.map((message) => (
        <RenderMessages
          key={message._id}
          message={message}
          choosen={choosenTab}
          dispatch={dispatch}
          setdeleted={setdeleted}
        />
      ))}

      <Modal style={customStyles} isOpen={deleted} ariaHideApp={false}>
        <p>a message was delete successfully</p>
        <button onClick={() => setdeleted(false)}> close </button>
      </Modal>
    </>
  );
};

export default Messages;
