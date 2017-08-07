// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
// Here we include all of the sub-components
var Home = require("../components/children/Home");
var Ship = require("../components/children/Ship");
var Sailor = require("../components/children/Sailor");
var Profile = require("../components/children/Profile");
var Login = require("../components/children/Login");
var Buttons = require("../components/children/Buttons");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/*  xxxxx this one (Login) may go away xxxxx */}
      {/* If user selects then show the appropriate component*/}
      <Route path="Home" component={Home} />


      {/* If user selects then show the appropriate component*/}
      <Route path="Ship" component={Ship} />

      {/* If user selects then show the appropriate component*/}
      <Route path="Sailor" component={Sailor} />

      {/* If user selects then show the appropriate component*/}
      <Route path="Profile" component={Profile} />

      {/*  xxxxx this may change to search xxxxx */}
      {/*  <IndexRoute component={Choice} /> */}
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Login} />

    </Route>
  </Router>
);