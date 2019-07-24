import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <>
        <div className="form-group ui input">
          <label htmlFor="bedroom">How Many Bedrooms?</label>
          <input
            className="form-control"
            id="bedroom"
            name="bedroom"
            type="text"
            placeholder="Enter bedroom"
            value={this.props.input.bedroom} // Prop: The bedroom input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="bathrooms">How Many Bathrooms?</label>
          <input
            className="form-control"
            id="bathrooms"
            name="bathrooms"
            type="text"
            placeholder="Enter bathrooms"
            value={this.props.bathrooms} // Prop: The bathrooms input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="sqfeet">How Many Square Feet is Your Home?</label>
          <input
            className="form-control"
            id="sqfeet"
            name="sqfeet"
            type="text"
            placeholder="Enter sqfeet"
            value={this.props.sqfeet} // Prop: The sqfeet input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>

        <div className="form-group ui input">
          <label htmlFor="additional">Pick Additional Services Below</label>
          <input
            className="form-control"
            id="additional"
            name="additional"
            type="text"
            placeholder="Enter additional"
            value={this.props.additional} // Prop: The additional input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>
      </>
    );
  }
}

export default Step1;
