import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

interface Props {

}

class App extends React.Component<Props> {

  public render() {
    return (
            <div>ok so !</div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => ({

});
export default connect(
    null,
    mapDispatchToProps,
)(App);
