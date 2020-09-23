import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const data = {
  iPhone: [
    { title: 'iPhone11', money: '5999' },
    { title: 'iPhoneXS', money: '5399' },
    { title: 'iPhoneSE', money: '3599' },
  ],
  huawei: [
    { title: 'HUAWEI P40 Pro+', money: '7999' },
    { title: 'HUAWEI Mate 30', money: '5000' },
    { title: 'HUAWEI nova 7', money: '4000' },
  ],
};

export default class Content extends Component {
  render() {
    return (
      <div className="myContent">
        <div className="myTitle">iPhone</div>
        <div className="arow">
          {data.iPhone.map((res) => (
            <Item
              title={res.title}
              money={res.money}
              key={res.money}
              cartAdd={this.props.cartAdd}
            />
          ))}
        </div>
        <div className="myTitle">HUAWEI</div>
        <div className="arow">
          {data.huawei.map((res) => (
            <Item
              title={res.title}
              money={res.money}
              key={res.money}
              cartAdd={this.props.cartAdd}
            />
          ))}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  cartAdd: PropTypes.func,
};
