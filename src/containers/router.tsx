import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Action, Dispatch } from "redux";
import "normalize.css";
import AppActions from "../redux/app";
import App from "./app";

interface Props {
  startup: () => void;
}

class Router extends React.Component<Props> {
  public componentDidMount() {
    this.props.startup();
  }

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={routeProps => <App {...routeProps}>hello</App>}
          />
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => ({
  startup: () => dispatch(AppActions.startup()),
});
export default connect(
  null,
  mapDispatchToProps,
)(Router);
