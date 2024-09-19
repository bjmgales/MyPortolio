"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainComp;
var _react = require("react");
var _Profile = _interopRequireDefault(require("./Profile"));
var _Doc = _interopRequireDefault(require("./Doc"));
var _Project = _interopRequireDefault(require("./Project"));
var _back_arrow = _interopRequireDefault(require("./assets/back_arrow.svg"));
var _Svg = _interopRequireDefault(require("./Svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function MainComp() {
  const [hideHome, setHideHome] = (0, _react.useState)(false);
  const [hidePage, setHidePage] = (0, _react.useState)(true);
  const [changePage, setChangePage] = (0, _react.useState)({
    change: false,
    name: ""
  });
  (0, _react.useEffect)(() => {
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
  }, !hideHome && /*#__PURE__*/React.createElement(_Profile.default, {
    setChangePage: setChangePage,
    changePage: changePage,
    setHideHome: setHideHome
  }), !hidePage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "backArrow"
  }, /*#__PURE__*/React.createElement(_Svg.default, {
    src: _back_arrow.default,
    noAnim: true,
    onClick: () => {
      setChangePage(prev => ({
        ...prev,
        change: false
      }));
    }
  })), changePage.name.includes("mydoc") ? /*#__PURE__*/React.createElement(_Doc.default, {
    changePage: changePage,
    hidePage: hidePage,
    setHideHome: setHideHome,
    setChangePage: setChangePage
  }) : /*#__PURE__*/React.createElement("div", {
    className: 'projDiv'
  }, /*#__PURE__*/React.createElement(_Project.default, {
    changePage: changePage,
    hidePage: hidePage,
    setHideHome: setHideHome,
    setChangePage: setChangePage
  }))));
}