import React from 'react';

import './style.css'

const Message = ({ children }) => {
	return <div className="box-wrapper box-padding">{children}</div>;
};

export default Message;