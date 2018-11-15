import { connect } from "react-redux";
import { push } from "react-router-redux";
import Navigation from "./navigation";

const pages = [{ path: "/", title: "Search" }];

function mapStateToProps() {
  return { pages };
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: path => dispatch(push())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
