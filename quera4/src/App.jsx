import React from "react";
import { Helmet } from "react-helmet";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";
import { connect } from "react-redux";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on redux state

const StyleTag = (props) => {
  
  const themeMode = props.theme;
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

function App(props) {
  
  return (
    <>
      <StyleTag theme={props.theme}  />
      <NameBox />
      <ThemeSwitcher />
    </>
  );
}
const mapStateToProps = (state)=>{
  return {theme : state.theme}
}
export default connect(mapStateToProps)(App)
