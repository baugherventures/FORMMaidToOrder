import React from "react";
import { Dropdown } from "semantic-ui-react";

const Step3 = props => {
  console.log(props)
  
    const arrivalOptions = [
      { key: 1, text: "Morning 8-10am", value: 1 },
      { key: 2, text: "Mid-Day 11am-1pm", value: 2 },
      { key: 3, text: "Afternoon 2-4pm", value: 3 }
    ];
    if (props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 3 UI
    return (
      <div className="step-window">
        <div className="form-group ui input cust-input-field">
          <label htmlFor="access">
            How will we access the residence?
          </label>
          <input
            className="form-control"
            id="access"
            name="access"
            type="text"
            placeholder="ie. Keys, Garage Code,
            Access Code, Someone will be home..."
            value={props.access} // Prop: The access input data
            onChange={props.handleChange} // Prop: Puts data into access
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="arrival">
            Arrival Windows are as follows:
          </label>
          <Dropdown
            placeholder={
              props.arrival == null ? "Choose Arrival Window" : props.arrival
            }
            fluid
            selection
            options={arrivalOptions}
            id="arrivals"
            name="arrival"
            type="array"
            defaultValue={props.arrival} // Prop: The arrival input data
            onChange={props.onChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="date">Date:&nbsp;</label>
          <input
            className="form-control"
            id="date"
            name="date"
            type="text"
            placeholder="Enter date"
            value={props.date} // Prop: The date input data
            onChange={props.handleChange} // Prop: Puts data into date
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="additional">Additional Instructions:&nbsp;</label>
          <input
            className="form-control"
            id="additional"
            name="additional"
            type="text"
            placeholder="Enter additional"
            value={props.additional} // Prop: The additional input data
            onChange={props.handleChange} // Prop: Puts data into additional
          />
        </div>
      </div>
    );
  
}

export default Step3;
