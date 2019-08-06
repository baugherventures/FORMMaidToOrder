import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

// const stripeBtn = () => {
//   const publishableKey = "pk_test_ZU3mlTy0q00DATc9EyF9A8jX";
   
//   const onToken = token => {
//     const body = {
//       amount: 999,
//       token: token
//   };  axios
//       .post("http://localhost:8000/payment", body)
//       .then(response => {
//         console.log(response);
//         alert("Payment Success");
//       })
//       .catch(error => {
//         console.log("Payment Error: ", error);
//         alert("Payment Error");
//       });
//   };  return (
//     <StripeCheckout
//       label="Go Premium" //Component button text
//       name="Business LLC" //Modal Header
//       description="Upgrade to a premium account today."
//       panelLabel="Go Premium" //Submit button in modal
//       amount={999} //Amount in cents $9.99
//       token={onToken}
//       stripeKey={publishableKey}
//       image="https://www.vidhub.co" //Pop-in header image
//       billingAddress={false}
//     />
//   );
// };export default stripeBtn;


const CheckoutForm = props => {

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