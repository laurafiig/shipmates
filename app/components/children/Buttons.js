// Include React
var React = require("react");

//for making API calls, even though we have no APIs....
//var helpers = require("../../utils/helpers");

// Creating the Buttons component
var Buttons = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div>

        <div className="row">

          <div className="col-sm-12">
            <a href="#/Profile" className="btn btn-primary btn-lg">Profile</a>
            <a>          </a>
            <a href="#/Ship" className="btn btn-primary btn-lg">Ships</a>
            <a>          </a>
            <a href="#/Sailor" className="btn btn-primary btn-lg">Sailors</a>
            <a>          </a>
            <a href="#/Login" className="btn btn-primary btn-lg">Log out</a>
          </div>
          
          </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Buttons;
