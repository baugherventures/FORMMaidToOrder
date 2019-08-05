import React from "react";

const Calculated = props => {
  console.log("calc stuff", props);
  return (
    <>
      <div className="estimation">
        <h2>Cleaning overview</h2>
        <div className="clean-overview-prop">
          <h4>Bedrooms: {props.calc.bedrooms}</h4>
        </div>
        <div className="clean-overview-prop">
          <h4>Bathrooms: {props.calc.bathrooms}</h4>
        </div>
        <div className="clean-overview-prop">
          <h4>SquarFeet: {props.calc.sqfeet}</h4>
        </div>
        <h3>PRICE ESTIMATE</h3>
        <div className="clean-overview-prop">
          
          <div className="ui right labeled input">
            <h4 className="ui basic label">${props.calc.estimate}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculated;
