import React from 'react';
import './../css/alert.css';

const Alert = ({ message, kind }) => {
  let alertKind;
  if (kind === 'good') alertKind = 'success';

  if (kind === 'bad') alertKind = 'faild';

  return <h1 className={alertKind}>{message} </h1>;
};

export default Alert;
