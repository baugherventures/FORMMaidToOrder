import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Calculated from "./Calculated";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      input: {
        bedrooms: "",
        bathrooms: "",
        sqfeet: "",
        additional: {}
      },
      estimate: {
        total: "$300"
      }
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    alert(`Thank you ${this.state.input.name} Your Appointment has been scheduled.`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary ui secondary button"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="btn btn-primary ui primary button"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <button
          className="btn btn-primary ui green button"
          type="button"
          onClick={this.handleSubmit}
        >
          submit
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Book Your Clean</h1>
        <Calculated estimate={this.state.estimate} />
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            input={this.state.input}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            input={this.state.input}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            input={this.state.input}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            estimate={this.state.estimate}
          />
          {this.previousButton()}
          {this.nextButton()}
          {this.submitButton()}
        </form>
      </React.Fragment>
    );
  }
}

export default MasterForm;
