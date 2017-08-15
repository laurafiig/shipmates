// Include React
var React = require("react");

//for making API calls, even though we have no APIs....
//var helpers = require("../../utils/helpers");

// Creating the Login component
var Login = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        
        <div className="row">
          <div className="col-sm-12">
            <a href="#/Home" className="btn btn-primary btn-lg">Login</a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <p>cool world map</p>
          </div>
        </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
