// Include React
var React = require("react");

//for making API calls, even though we have no APIs....
var helpers = require("../../utils/helpers");

// Creating the Ship component
var Ship = React.createClass({
  
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
            ship search here
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            ship public info here
          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Ship;
