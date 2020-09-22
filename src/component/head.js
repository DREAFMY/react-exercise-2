import React from 'react';
import chatSvg from '../assets/chat.svg';

const Head = () => (
  <div className="myHead bg-primary">
    <div className="headLeft">Store</div>
    <div className="headRight">
      <img src={chatSvg} />
      <span className="badge badge-pill badge-danger small">1</span>
    </div>
  </div>
);

export default Head;
