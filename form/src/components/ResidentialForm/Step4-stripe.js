import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

const CheckoutForm = props => {

//       async submit = (ev) => {
//         let {token} = await this.props.stripe.createToken({name: "Name"});
//         let response = await fetch("api/stripe/charge", {
//           method: "POST",
//           headers: {"Content-Type": "text/plain"},
//           body: token.id
//         });
//         if (response.ok) this.setState({complete: true});
// }

  
    return (
      <div>
        <p>Would you like to complete the purchase?</p>
        <div className="stripe-card">
          <CardElement />
        </div>
      </div>
    );
  
}

export default injectStripe(CheckoutForm);