import React from 'react';

class Step3 extends React.Component {
    render() {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 3 UI
      return(
          <>
        <div className="form-group">
          <label htmlFor="access">How will we access the residence? ie. Keys, Garage Code, Access Code, Someone will be home...</label>
          <input
            className="form-control"
            id="access"
            name="access"
            type="text"
            placeholder="Enter access"
            value={this.props.access} // Prop: The access input data
            onChange={this.props.handleChange} // Prop: Puts data into access
          />
        </div>

        <div className="form-group">
          <label htmlFor="arrival">Arrival Windows are as follows: Morning 8-10am, Mid-Day 11am-1pm, Afternoon 2-4pm</label>
          <input
            className="form-control"
            id="arrival"
            name="arrival"
            type="text"
            placeholder="Enter arrival"
            value={this.props.arrival} // Prop: The arrival input data
            onChange={this.props.handleChange} // Prop: Puts data into arrival
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            className="form-control"
            id="date"
            name="date"
            type="text"
            placeholder="Enter date"
            value={this.props.date} // Prop: The date input data
            onChange={this.props.handleChange} // Prop: Puts data into date
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Cleaning Frequency</label>
          <input
            className="form-control"
            id="frequency"
            name="frequency"
            type="text"
            placeholder="Enter frequency"
            value={this.props.frequency} // Prop: The frequency input data
            onChange={this.props.handleChange} // Prop: Puts data into frequency
          />
        </div>

        <div className="form-group">
          <label htmlFor="additional">Additional Instructions</label>
          <input
            className="form-control"
            id="additional"
            name="additional"
            type="text"
            placeholder="Enter additional"
            value={this.props.additional} // Prop: The additional input data
            onChange={this.props.handleChange} // Prop: Puts data into additional
          />
        </div>
        </>
      )
    }
  }

export default Step3;