import React from 'react';

class Step2 extends React.Component {
    render() {
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 2 UI
      return(
          <>
        <div className="form-group ui input">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={this.props.input.name} // Prop: The name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="phone">Phone</label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter phone"
            value={this.props.phone} // Prop: The phone input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="email">Email address</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={this.props.email} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="address">Service Address</label>
          <input
            className="form-control"
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            value={this.props.address} // Prop: The address input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            id="city"
            name="city"
            type="text"
            placeholder="Enter city"
            value={this.props.city} // Prop: The city input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="state">State</label>
          <input
            className="form-control"
            id="state"
            name="state"
            type="text"
            placeholder="Enter state"
            value={this.props.state} // Prop: The state input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="zip">Zip/Postal Code</label>
          <input
            className="form-control"
            id="zip"
            name="zip"
            type="text"
            placeholder="Enter zip"
            value={this.props.zip} // Prop: The zip input data
            onChange={this.props.handleChange} // Prop: Puts data into zip
          />
        </div>
        </>
      )
    }
  }

export default Step2;