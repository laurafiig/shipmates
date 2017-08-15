// Include React
var React = require("react");

//for making API calls, even though we have no APIs....
//var helpers = require("../../utils/helpers");

//include button component
var Buttons = require("./Buttons");

// Creating the Sailor component
var Sailor = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        
        <div className="row">
          <div className="col-lg-12">
            <Buttons />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <p>sailor search here</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <p>sailor public info here</p>
          </div>
        </div>
      
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Sailor;
