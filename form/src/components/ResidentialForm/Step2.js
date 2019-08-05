import React from 'react';

const Step2 = props => {
   
      if (props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 2 UI
      return(
          <div className="step-window">
        <div className="form-group ui input cust-input-field">
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={props.input.name} // Prop: The name input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="phone">Phone:&nbsp;</label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter phone"
            value={props.input.phone} // Prop: The phone input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="email">Email address:&nbsp;</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.input.email} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="address">Service Address:&nbsp;</label>
          <input
            className="form-control"
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            value={props.input.address} // Prop: The address input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="city">City:&nbsp;</label>
          <input
            className="form-control"
            id="city"
            name="city"
            type="text"
            placeholder="Enter city"
            value={props.input.city} // Prop: The city input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="state">State:&nbsp;</label>
          <input
            className="form-control"
            id="state"
            name="state"
            type="text"
            placeholder="Enter state"
            value={props.input.state} // Prop: The state input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="zip">Zip/Postal Code:&nbsp;</label>
          <input
            className="form-control"
            id="zip"
            name="zip"
            type="text"
            placeholder="Enter zip"
            value={props.input.zip} // Prop: The zip input data
            onChange={props.handleChange} // Prop: Puts data into zip
          />
        </div>
        </div>
      )
  }

export default Step2;