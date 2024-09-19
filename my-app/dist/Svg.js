"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Svg;
var _react = require("react");
var _Keyframes = require("./Keyframes");
function Svg(_ref) {
  let {
    imHovered = () => {},
    imOut = () => {},
    onClick = () => {},
    noAnim = false,
    ...props
  } = _ref;
  const elem = (0, _react.useRef)(null);
  const [hasFadeInEnd, setFadeInEnd] = (0, _react.useState)(false);
  const [hasFadeOutEnd, setFadeOutEnd] = (0, _react.useState)(false);
  const [style, setStyle] = (0, _react.useState)({
    position: "absolute",
    left: 0,
    animation: ""
  });
  const handleHover = e => {
    imHovered();
    e.target.style.transition = "transform 0.3s";
    e.target.style.transform = `scale(1.5)`;
  };
  const handleOut = e => {
    imOut();
    e.target.style.transition = "transform 0.3s";
    e.target.style.transform = `scale(1)`;
  };
  function fadeOut() {
    if (noAnim) return;
    let animation = `${props.className}FadeOut`;
    (0, _Keyframes.createKeyframesOut)(props.pos_x, props.pos_y, props.hide_x, props.hide_y, animation, [1, 0], [1, 0]);
    setStyle(prev => ({
      ...prev,
      animation: `${animation} 1s linear forwards`
    }));
  }
  function fadeIn() {
    if (noAnim) return;
    let animation = `${props.className}FadeIn`;
    (0, _Keyframes.createKeyframesIn)(props.hide_x, props.hide_y, props.pos_x, props.pos_y, animation, [0, 1], [10, 1]);
    setStyle(prev => ({
      ...prev,
      animation: `${animation} 1s linear forwards`
    }));
  }
  (0, _react.useEffect)(() => {
    const currentElem = elem.current;
    const handleAnimationEnd = event => {
      if (event.animationName === `${props.className}FadeIn`) {
        setFadeOutEnd(false);
        setFadeInEnd(true);
      } else if (event.animationName === `${props.className}FadeOut`) {
        setFadeOutEnd(true);
        setFadeInEnd(false);
      }
    };
    currentElem.addEventListener("animationend", handleAnimationEnd);
    fadeIn();
    return () => {
      currentElem.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (props.isOtherHovered && hasFadeInEnd) {
      fadeOut();
    } else if (!props.isOtherHovered && hasFadeOutEnd) {
      fadeIn();
    }
  }, [props.isOtherHovered, hasFadeInEnd, hasFadeOutEnd]);
  return /*#__PURE__*/React.createElement("a", {
    href: props.link,
    ref: elem,
    target: "_blank",
    style: style,
    onMouseOver: !noAnim ? handleHover : null,
    onMouseOut: !noAnim ? handleOut : null,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("img", {
    src: props.src,
    className: props.className,
    alt: props.alt
  }));
}