import { useState, useEffect } from "react";
import Profile from "./Profile";
import MyDocuments from "./Doc";
import MyProjects from "./Project";
import backArrow from './assets/back_arrow.svg';
import Svg from "./Svg";
export default function MainComp() {
  const [hideHome, setHideHome] = useState(false);
  const [hidePage, setHidePage] = useState(true);
  const [changePage, setChangePage] = useState({
    change: false,
    name: ""
  });
  useEffect(() => {
    hideHome ? setHidePage(false) : setHidePage(true);
    console.log(changePage.change);
  }, [hideHome]);
  return /*#__PURE__*/React.createElement("div", {
    className: "mainDiv",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, !hideHome && /*#__PURE__*/React.createElement(Profile, {
    setChangePage: setChangePage,
    changePage: changePage,
    setHideHome: setHideHome
  }), !hidePage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "backArrow"
  }, /*#__PURE__*/React.createElement(Svg, {
    src: backArrow,
    noAnim: true,
    onClick: () => {
      setChangePage(prev => ({
        ...prev,
        change: false
      }));
    }
  })), changePage.name.includes("mydoc") ? /*#__PURE__*/React.createElement(MyDocuments, {
    changePage: changePage,
    hidePage: hidePage,
    setHideHome: setHideHome,
    setChangePage: setChangePage
  }) : /*#__PURE__*/React.createElement("div", {
    className: 'projDiv'
  }, /*#__PURE__*/React.createElement(MyProjects, {
    changePage: changePage,
    hidePage: hidePage,
    setHideHome: setHideHome,
    setChangePage: setChangePage
  }))));
}