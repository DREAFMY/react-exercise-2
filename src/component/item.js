import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgUrl from '../assets/product_image_placeholder.png';

export default class Item extends Component {
  render() {
    return (
      <div className="card cardOne">
        <div className="cardTitle">{this.props.title}</div>
        <img src={imgUrl} alt="svgImg" className="card-img-top" />
        <div className="card-body myBottom">
          <span className="money">{this.props.money}</span>
          <button
            className="btn btn-primary addBtn"
            onClick={this.props.cartAdd}
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  money: PropTypes.string,
  cartAdd: PropTypes.func,
};
