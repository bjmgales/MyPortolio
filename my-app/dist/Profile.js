"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Profile;
var _react = require("react");
var _Svg = _interopRequireDefault(require("./Svg"));
var _bjm = _interopRequireDefault(require("./assets/bjm.jpg"));
var _Github = _interopRequireDefault(require("./assets/Github.svg"));
var _linkedin = _interopRequireDefault(require("./assets/linkedin.svg"));
var _Logo = _interopRequireDefault(require("./assets/42_Logo.svg"));
var _aie = _interopRequireDefault(require("./assets/sounds/aie0.mp3"));
var _aie2 = _interopRequireDefault(require("./assets/sounds/aie1.mp3"));
var _aie3 = _interopRequireDefault(require("./assets/sounds/aie2.mp3"));
var _aie4 = _interopRequireDefault(require("./assets/sounds/aie3.mp3"));
var _stockage = require("./stockage");
var _Menu = _interopRequireDefault(require("./Menu"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Profile(props) {
  const rightMenuRef = (0, _react.useRef)(null);
  const [gitFadeOut, setGitFadeOut] = (0, _react.useState)(false);
  const [linkedinFadeOut, setLinkedinFadeOut] = (0, _react.useState)(false);
  const [mobileFormat, setMobileFormat] = (0, _react.useState)(window.innerWidth <= 1600);
  const handleResize = () => {
    setMobileFormat(window.innerWidth <= 1600);
  };
  const handleMeClick = () => {
    const ouchStack = [new Audio(_aie.default), new Audio(_aie2.default), new Audio(_aie3.default), new Audio(_aie4.default)];
    ouchStack[Math.floor(Math.random() * 4)].play();
  };
  (0, _react.useEffect)(() => {
    const timer = setTimeout(() => {
      document.querySelector('#MyPic').style.transform = "scale(2)";
      document.querySelector('#MyPic').style.transition = "transform 1.5s";
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  (0, _react.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  (0, _react.useEffect)(() => {
    const leftMenu = document.querySelector('.leftMenu');
    const rightMenu = document.querySelector('.rightMenu');
    const parent = document.querySelector('.menuContainer');
    if (mobileFormat) {
      leftMenu.style.position = 'static';
      rightMenu.style.position = 'static';
      parent.classList.add('menuRef');
    } else {
      leftMenu.style.position = 'absolute';
      rightMenu.style.position = 'absolute';
      parent.classList.remove('menuRef');
    }
  }, [mobileFormat]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fortytwo"
  }, /*#__PURE__*/React.createElement(_Svg.default, {
    src: _Logo.default,
    alt: "42 school",
    noAnim: true,
    link: _stockage.links.fortytwo
  }), /*#__PURE__*/React.createElement(_Svg.default, {
    src: _Logo.default,
    alt: "42 shadow",
    noAnim: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "picContainer clean"
  }, /*#__PURE__*/React.createElement("img", {
    id: "MyPic",
    src: _bjm.default,
    alt: "My Picture",
    onClick: handleMeClick
  }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Svg.default, {
    src: _Github.default,
    className: "git",
    alt: "My github profile",
    link: _stockage.links.git,
    pos_x: -84,
    pos_y: -20,
    hide_x: -84,
    hide_y: '-50vh',
    isOtherHovered: gitFadeOut,
    imHovered: () => setLinkedinFadeOut(true),
    imOut: () => setLinkedinFadeOut(false)
  }), /*#__PURE__*/React.createElement(_Svg.default, {
    src: _linkedin.default,
    className: "linkedin",
    alt: "My linkedin profile",
    link: _stockage.links.linkedin,
    pos_x: 150,
    pos_y: -20,
    hide_x: 150,
    hide_y: '-50vh',
    isOtherHovered: linkedinFadeOut,
    imHovered: () => setGitFadeOut(true),
    imOut: () => setGitFadeOut(false)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "menuContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "leftMenu"
  }, /*#__PURE__*/React.createElement(_Menu.default, {
    items: _stockage.myProj,
    setChangePage: props.setChangePage,
    changePage: props.changePage,
    setHideHome: props.setHideHome
  })), /*#__PURE__*/React.createElement("div", {
    className: "rightMenu"
  }, /*#__PURE__*/React.createElement(_Menu.default, {
    items: _stockage.myDoc,
    setChangePage: props.setChangePage,
    changePage: props.changePage,
    setHideHome: props.setHideHome
  }))));
}