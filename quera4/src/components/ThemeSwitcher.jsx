import React from "react";
import { THEME_TYPE } from "../constants";
import { connect } from "react-redux";
import { setTheme } from "../store/actions";

const ThemeSwitcher = (props) => {
  // No need to change *return* part
  // You have to set themeMode based on redux state
  const themeMode = props.theme;
  
  const handleThemeChange = (e) => {
    
   if(props.theme===THEME_TYPE.DARK){
    props.setTheme(THEME_TYPE.LIGHT)
  
   }else{
    props.setTheme(THEME_TYPE.DARK)
   }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};
const mapStateToProps = (state)=>{
  return {theme : state.theme}
}
//map storeToprops is null cause we don't need any props
export default connect(mapStateToProps,{setTheme})(ThemeSwitcher)
