import React from 'react';
// import '../css/creditcard.css';
import '../css/Checkout.css';
import {Link} from 'react-router-dom';

const Checkout = props => {


    console.log(props.cartItems)
    var cartItems = props.cartItems.map( (item, index) => (
      <li key={index}>{item.name} <span>{item.price}</span> <span onClick={ () => props.removeFromCart(item) }>Remove from cart</span></li>
    ))
    var total = props.cartItems.reduce( (acc, curVal) => {
                return acc + curVal.price
              }, 0)
    return (
      <div>
        <div>
        <h1>Checkout</h1>
        <h2 className='checkout-summary'>Your Order</h2>
        <ul className='checkout-summary'>
          {cartItems}
        </ul>
        <br />
        <p className='checkout-summary'>Total: {total.toFixed(2)} Pangean Ugh Clubs</p>
      </div>
      <div class="creditCardForm">
        <div class="heading">
          <h1>Billing Details</h1>
        </div>
        <div class="payment">
          <form>
            <div class="form-group owner">
              <label className='cc-labels' for="owner">Owner</label>
              <input type="text" class="form-control" id="owner"/>
            </div>
            <div class="form-group CVV">
              <label className='cc-labels' for="cvv">CVV</label>
              <input type="text" class="form-control" id="cvv"/>
            </div>
            <div class="form-group" id="card-number-field">
              <label className='cc-labels' for="cardNumber">Card Number</label>
              <input type="text" class="form-control" id="cardNumber"/>
            </div>
              <div class="form-group" id="expiration-date">
                <label className='cc-labels'>Expiration Date</label>
                <select>
                  <option value="01">January</option>
                  <option value="02">February </option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select>
                  <option value="16"> 2016</option>
                  <option value="17"> 2017</option>
                  <option value="18"> 2018</option>
                  <option value="19"> 2019</option>
                  <option value="20"> 2020</option>
                  <option value="21"> 2021</option>
                </select>
              </div>
              <div class="form-group" id="credit_cards">
                <img src="/images/visa.jpg" id="visa"/>
                <img src="/images/mastercard.jpg" id="mastercard"/>
                <img src="/images/amex.jpg" id="amex"/>
            </div>
                <div class="form-group" id="pay-now">
                  <Link to='/tracking' onClick={() => props.addCompletedOrder()}><button  class="btn btn-default" id="confirm-purchase">Confirm</button></Link>
                </div>
          </form>
        </div>
      </div>

      </div>
    )
}

export default Checkout
