import React from "react";
import Navbar from "./navbar";
import Main from "./main";
import About from "./About";
import Portfolio from "./Portfolio";
import { connect } from "react-redux";

function App(props) {

  // const page = useSelector(page) 

  let pageView = null;
  switch (props.page) {
    case "main":
      pageView = <Main />;
      break;

    case "about":
      pageView = <About />;
      break;

    case "portfolio":
      pageView = <Portfolio />;
      break;

    default:
      pageView = <Main />;
      break;
  }

  return (
    <React.Fragment>
      <Navbar />
      {pageView}
    </React.Fragment>
  );
}

// Redux stuff
function mapStateToProps (state)  {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps, null)(App);
