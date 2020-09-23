import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

export default class Content extends Component {
  state = {
    data: {
      iPhone: [],
      huawei: [],
    },
  };
  tranData = (reception) => {
    const mobileData = {
      iPhone: [],
      huawei: [],
    };
    reception.forEach((item) => {
      if (item.category === 'iPhone') {
        mobileData.iPhone.push(item);
      } else {
        mobileData.huawei.push(item);
      }
    });
    this.setState({
      data: mobileData,
    });
  };

  componentDidMount = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const reception = await response.json();
      this.tranData(reception);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="myContent">
        <div className="myTitle">iPhone</div>
        <div className="arow">
          {this.state.data.iPhone.map((res) => (
            <Item
              title={res.name}
              money={res.price}
              key={res.price}
              cartAdd={this.props.cartAdd}
            />
          ))}
        </div>
        <div className="myTitle">HUAWEI</div>
        <div className="arow">
          {this.state.data.huawei.map((res) => (
            <Item
              title={res.name}
              money={res.price}
              key={res.price}
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
