import React from 'react';
import '../../css/renderMessages.css';
import deleteMessage from './../../api/delete';
import { deleteCMessage } from '../../actions/message';
import moment from 'moment';

const RenderMessages = ({ message, choosen, dispatch, setdeleted }) => {
  const deleteCurrent = async (id) => {
    if (await deleteMessage(id)) {
      dispatch(deleteCMessage(id));
      setdeleted(true);
    }
  };

  return (
    <div className="tabcontent">
      <button className="btn" onClick={() => deleteCurrent(message._id)}>
        delete
      </button>
      <h4>{`subject: ${message.subject}`}</h4>
      <p className="body">{message.message}</p>
      <p className="sig">
        {choosen === 'sent'
          ? `to: ${message.reciver}`
          : `from: ${message.sender}`}
      </p>
      <p>{moment(message.date).format('DD-MM-YYYY')}</p>
    </div>
  );
};

export default RenderMessages;
