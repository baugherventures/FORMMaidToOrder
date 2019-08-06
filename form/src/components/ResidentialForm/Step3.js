import React from "react";
import { Dropdown } from "semantic-ui-react";
import Calendar from './calendar';

const Step3 = props => {
  
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
            value={props.accessInformation} // Prop: The access input data
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
            defaultValue={props.arrivalWindow} // Prop: The arrival input data
            onChange={props.onChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="date">Select the Date:&nbsp;</label>
          <Calendar/>
        </div>

        <div className="form-group ui input cust-input-field">
          <label htmlFor="additional">Additional Instructions:&nbsp;</label>
          <input
            className="form-control"
            id="Additional Instructions"
            name="additional"
            type="text"
            placeholder="Enter additional"
            value={props.additionalInstructions} // Prop: The additional input data
            onChange={props.handleChange} // Prop: Puts data into additional
          />
        </div>
      </div>
    );
  
}

export default Step3;
