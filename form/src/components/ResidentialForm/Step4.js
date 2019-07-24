import React from 'react';

class Step4 extends React.Component {
    render() {
      if (this.props.currentStep !== 4) { // Prop: The current step
        return null
      }
      // The markup for the Step 4 UI
      return(
          <>
        <div className="form-group ui input">
          <label htmlFor="Payment">Payment</label>
          <input
            className="form-control"
            id="Payment"
            name="Payment"
            type="text"
            placeholder="Enter Payment"
            value={this.props.Payment} // Prop: The Payment input data
            onChange={this.props.handleChange} // Prop: Puts data into Payment
          />
        </div>
        </>
      )
    }
  }

export default Step4;