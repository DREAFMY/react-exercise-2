import React from 'react';
import PropTypes from 'prop-types';
import chatSvg from '../assets/chat.svg';

const Head = ({ countValue }) => (
  <div className="myHead bg-primary">
    <div className="headLeft">Store</div>
    <div className="headRight">
      <img src={chatSvg} alt="headImg" />
      <span className="badge badge-pill badge-danger small">{countValue}</span>
    </div>
  </div>
);

Head.propTypes = {
  countValue: PropTypes.number,
};

export default Head;
