import React, { Component } from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import '../css/cart.css';

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  slideCart() {
    let cart = document.getElementById('cart')
    let cartButton = document.getElementById('cart-button')
    if (cart.classList.contains('slide-left')) {
      cart.classList.remove('slide-left')
      cartButton.classList.remove('slide-left')
    } else {
      cart.classList.add('slide-left')
      cartButton.classList.add('slide-left')
    }
  }

  render() {
    var allItems = this.props.items.map( (item, index) => {
      return <CartItem item={item} removeFromCart={ () => this.props.removeFromCart(item) } key={index} />
    })
    var total = this.props.items.reduce( (acc, curVal) => {
                return acc + curVal.price
              }, 0)

    if ( Object.keys(this.props.user).length > 0 ) {
      return (
        <div className='cart-wrap'>
          <button onClick={() => this.slideCart()} id='cart-button'><i class="fas fa-shopping-cart"></i></button>
          <div id='cart'>
            {allItems}
            <p>Total: {total.toFixed(2)} PUC</p>
            <Link to='/checkout'><button id='cart-checkout'>Checkout</button></Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='cart-wrap'>
          <button onClick={() => this.slideCart()} id='cart-button'><i class="fas fa-shopping-cart"></i></button>
          <div id='cart'>
            {allItems}
            <p>Total: {total.toFixed(2)} PUC</p>
            <Link to='/login'><button id='cart-checkout'>Checkout</button></Link>
          </div>
        </div>
      )
    }
  }
}

export default Cart;
