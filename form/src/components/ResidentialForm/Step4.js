import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./Step4-stripe";

class Step4 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 4 UI
    return (
      <>
        <StripeProvider apiKey="pk_test_pz58gC76CeZKOZVyEphIwAB7">
        <div className="example stripe-form">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </>
    );
  }
}

export default Step4;
