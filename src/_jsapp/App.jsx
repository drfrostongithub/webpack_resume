import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Portfolio from "./Portfolio";
import Loader from './Loader'
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
console.log(pageView)
  return (
    <React.Fragment>
      <Navbar />
      {pageView ? (pageView) : (<Loader />)}
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
