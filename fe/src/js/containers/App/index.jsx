import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dashboard from "./../../components/Dashboard";
import { dashboardActions } from "../../actions";

class App extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className={`h-100`}>
        <Dashboard {...props} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state, props) => ({
      ...state,
      ...props,
    }),
    (dispatch) => ({
      dashboardActions: bindActionCreators(dashboardActions, dispatch),
    })
  )(App)
);
