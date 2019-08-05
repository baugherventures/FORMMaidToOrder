import React from "react";
import { Dropdown } from "semantic-ui-react";

const Step1 = props => {
  console.log(props);

  const frequencyOptions = [
    { key: 1, text: "Weekly", value: 0 },
    { key: 2, text: "Bi-Weekly", value: 1 },
    { key: 3, text: "Monthly", value: 2 },
    { key: 4, text: "One Time", value: 2.1 }
  ];

  const bedroomOptions = [
    { key: 1, text: "1 Bedroom", value: 1 },
    { key: 2, text: "2 Bedrooms", value: 2 },
    { key: 3, text: "3 Bedrooms", value: 3 },
    { key: 4, text: "4 Bedrooms", value: 4 },
    { key: 5, text: "5 Bedrooms", value: 5 }
  ];

  const bathroomOptions = [
    { key: 1, text: "1 Bathroom", value: 1 },
    { key: 1.5, text: "1.5 Bathrooms", value: 1.5 },
    { key: 2, text: "2 Bathrooms", value: 2 },
    { key: 2.5, text: "2.5 Bathrooms", value: 2.5 },
    { key: 3, text: "3 Bathrooms", value: 3 },
    { key: 3.5, text: "3.5 Bathrooms", value: 3.5 },
    { key: 4, text: "4 Bathrooms", value: 4 },
    { key: 4.5, text: "4.5 Bathrooms", value: 4.5 },
    { key: 5, text: "5 Bathrooms", value: 5 },
    { key: 5.5, text: "5.5 Bathrooms", value: 5.5 }
  ];

  const petOptions = [
    { key: 1, text: `Yes I have pet's - $20`, value: 20 },
    { key: 2, text: `No I don't have pet's`, value: 0 }
  ];

  const additionalOptions = [
    { key: 1, text: "Oven(interior) - $25", value: 25 },
    { key: 2, text: "Refridgerator(interior) - $ 50", value: 50 },
    { key: 3, text: "Inside/Outside Cabinets - $125", value: 125 },
    { key: 4, text: "Front of Cabinets - $40", value: 40 },
    { key: 5, text: "Interior Windows(within reach) - $75", value: 75 },
    { key: 6, text: `Move In/Move Out - $100`, value: 100 }
  ];

  if (props.currentStep !== 1) {
    // Prop: The current step
    return null;
  }
  // The markup for the Step 1 UI
  return (
    <div className="step-window">
      <div className="form-group ui input cust-input-field">
        <Dropdown
          placeholder={
            props.frequency == null ? "Cleaning How often?" : props.frequency
          }
          fluid
          selection
          options={frequencyOptions}
          id="frequency"
          name="frequency"
          type="text"
          value={props.frequency} // Prop: The bedroom input data
          onChange={props.onChange} // Prop: Puts data into state
        />
      </div>

      <div className="form-group ui input cust-input-field">
        <Dropdown
          placeholder={
            props.bedrooms == null ? "How many Bedrooms" : props.bedrooms
          }
          fluid
          selection
          options={bedroomOptions}
          id="bedrooms"
          name="bedrooms"
          type="text"
          value={props.bedrooms} // Prop: The bedroom input data
          onChange={props.onChange} // Prop: Puts data into state
        />
      </div>

      <div className="form-group ui input cust-input-field">
        <Dropdown
          placeholder={
            props.bathrooms == null ? "How many Bathrooms" : props.bathrooms
          }
          fluid
          selection
          options={bathroomOptions}
          id="bathrooms"
          name="bathrooms"
          type="text"
          value={props.bathrooms} // Prop: The bathroom input data
          onChange={props.onChange} // Prop: Puts data into state
        />
      </div>

      <div className="form-group ui input cust-input-field">
        <label htmlFor="sqfeet">How Many Square Feet is Your Home?</label>
        <input
          className="form-control"
          id="sqfeet"
          name="sqfeet"
          type="text"
          placeholder={props.sqfeet == null ? "How many sqfeet" : props.sqfeet}
          value={props.sqfeet} // Prop: The sqfeet input data
          onChange={props.handleChange} // Prop: Puts data into state
        />
      </div>

      <div className="form-group ui input cust-input-field">
        <Dropdown
          placeholder={
            props.pets == null ? "Do you have any pets?" : props.pets
          }
          fluid
          selection
          options={petOptions}
          id="pets"
          name="pets"
          type="text"
          value={props.pets} // Prop: The bathroom input data
          onChange={props.onChange} // Prop: Puts data into state
        />
      </div>

      <div className="form-group ui input cust-input-field">
        <Dropdown
          placeholder={
            props.additional == null ? "Additional Services?" : props.additional
          }
          multiple
          selection
          options={additionalOptions}
          id="additionals"
          name="additional"
          type="array"
          defaultValue={props.additional} // Prop: The additional input data
          onChange={props.onChange} // Prop: Puts data into state
        />
      </div>
    </div>
  );
};

export default Step1;
