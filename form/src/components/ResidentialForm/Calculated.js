import React from "react";

class Calculated extends React.Component {
  render() {
    
    return (
      <>
        <div className="estimation">
            <h1>PRICE ESTIMATE</h1>
          <h2>Total:</h2><h2>{this.props.estimate.total}</h2>
        </div>
      </>
    );
  }
}

export default Calculated;
