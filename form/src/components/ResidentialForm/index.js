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
      complete: false,
      currentStep: 1,
      name: null,
      bedrooms: 1,
      bathrooms: 1,
      sqfeet: 1000,
      pets: 0,
      additional: 0,
      estimate: 0,
      frequency: 1
    };
  }

  onChange = (e, data) => {
    const { name } = data;
    const { selected } = { selected: data.value };
    this.setState({ [name]: selected });
    this.estimateCost();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.estimateCost();
  };

  handleSubmit = event => {
    event.preventDefault();
    // const name = this.state.name == null?"...":this.state.name;
    // const confirm1 = this.state.estimate <= 50 ?"Oh No!" : "Thank you";
    // const confirm2 = this.state.estimate <= 50 ?"There Seems to be a problem with the information you selected":"Your Appointment has been scheduled.";
    // alert(`${confirm1} ${name} ${confirm2}`);

    // this.state.name == null?this._prev():this._next();
    this._next();
  };


  estimateCost = e => {
    setTimeout(
      function() {
        const bedrooms = this.state.bedrooms;
        const bathrooms = this.state.bathrooms;
        const sqfeet = this.state.sqfeet;
        const pets = this.state.pets;
        const additional = this.state.additional;
        const frequency = this.state.frequency;
        const CleanFrequency = frequency * 25;
        const BedCost = bedrooms * 15;
        const BathCost = bathrooms * 25;
        const sqftCost = sqfeet * 0.01;
        const AdditionalCost = Array.from(additional).reduce(myFunc, 0);
        function myFunc(total, num) {
          return total + num;
        }
        const sum =
          CleanFrequency +
          BedCost +
          BathCost +
          sqftCost +
          pets +
          Number(AdditionalCost);
        this.setState({ estimate: sum });
      }.bind(this),
      1000
    );
  };

  async payment() {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("api/stripe/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    if (response.ok) this.setState({complete: true});
}

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
    if (currentStep < 3) {
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
    if (currentStep === 3) {
      return (
        <button
          className="btn btn-primary ui green button"
          type="button"
          onClick={this.handleSubmit}
        >
          Proceed To Checkout
        </button>
      );
    }
    return null;
  }

  paymentButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <button
          className="btn btn-primary ui blue button"
          type="button"
          onClick={this.payment}
        >
          Pay:&nbsp;${this.state.estimate}
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Book Your Clean</h1>
        <Calculated className="calculated-window" calc={this.state} />
        <h3>Step {this.state.currentStep} </h3>

        <form onSubmit={this.handleSubmit}>
          <Step1
            className="step-window"
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            onChange={this.onChange}
            input={this.state}
          />
          <Step2
            className="step-window"
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            input={this.state}
          />
          <Step3
            className="step-window"
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            input={this.state}
          />
          <Step4
            className="step-window"
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            estimate={this.state}
          />
          {this.previousButton()}
          {this.nextButton()}
          {this.submitButton()}
          {this.paymentButton()}
        </form>
      </React.Fragment>
    );
  }
}

export default MasterForm;
