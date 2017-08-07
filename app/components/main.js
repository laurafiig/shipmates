// Include React
var React = require("react");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container bg-pattern">
        <div className="jumbotron bg-photo">
          <h1 className="text-center"><strong>ShipMates!</strong></h1>
          <p className="text-center">
            <strong>Find your fellow sailors.</strong>
          </p>
          <p className="text-center">
            (design header here)
          </p>
        </div>
        <div className="row">
          {/* This code will dump the correct Child Component */}
          {this.props.children}
        </div>
        <div className="row">
          <div className="col-sm-12">
            (design footer here)
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
