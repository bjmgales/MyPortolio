"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MyProjects;
var _react = require("react");
var _stockage = require("./stockage");
var _copy = _interopRequireDefault(require("./assets/copy.svg"));
var _mac = _interopRequireDefault(require("./assets/mac.svg"));
var _windows = _interopRequireDefault(require("./assets/windows.svg"));
var _linux = _interopRequireDefault(require("./assets/linux.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Title = _ref => {
  let {
    macLinuxOnly,
    projectTitle
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("h1", null, projectTitle.toUpperCase()), /*#__PURE__*/React.createElement("img", {
    className: "osIcons",
    src: _linux.default
  }), /*#__PURE__*/React.createElement("img", {
    className: "osIcons",
    src: _mac.default
  }), !macLinuxOnly && /*#__PURE__*/React.createElement("img", {
    className: "osIcons",
    src: _windows.default
  }));
};
const Steps = _ref2 => {
  let {
    project,
    openDescIndex,
    descToggler,
    isVideoVisible,
    vidIndex,
    mobileFormat,
    videoRef
  } = _ref2;
  (0, _react.useEffect)(() => {
    if (videoRef.current) videoRef.current.closest('div').style.maxHeight = 'fit-content';
  });
  return project.steps.map((elem, elemIndex) => {
    const key = elem.title + `#${elemIndex}`;
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      key: 'step' + key,
      className: "step",
      onClick: event => {
        descToggler(event, elemIndex, elem.src);
      },
      style: {
        overflowY: openDescIndex === elemIndex ? 'scroll' : 'hidden'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        paddingLeft: 30
      },
      key: 'title_' + key
    }, elem.title), /*#__PURE__*/React.createElement("h3", {
      className: `stepDesc ${openDescIndex === elemIndex ? 'open' : ''}`,
      style: {
        paddingLeft: 40,
        width: "90%"
      },
      key: 'descTitle_' + key
    }, elem.subTitle), /*#__PURE__*/React.createElement("p", {
      className: `stepDesc ${openDescIndex === elemIndex ? 'open' : ''}`,
      style: {
        paddingLeft: 40,
        paddingRight: 70
      },
      key: 'desc_' + key
    }, elem.description)), mobileFormat && elemIndex === openDescIndex && /*#__PURE__*/React.createElement(Video, {
      src: project.steps[openDescIndex]?.video,
      isVisible: isVideoVisible,
      videoRef: videoRef,
      mobileFormat: mobileFormat
    }));
  });
};
const Video = _ref3 => {
  let {
    src,
    isVisible,
    videoRef,
    mobileFormat = false,
    offMobile = false
  } = _ref3;
  const [className, setClassName] = (0, _react.useState)("");
  const [isMounted, setIsMounted] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    isMounted ? isVisible ? setClassName('video show') : setClassName('video') : setIsMounted(true);
    !document.querySelector('video').classList.contains(['show', 'video']) && isVisible ? setClassName('video show') : null;
  }, [isVisible]);
  console.log('here', className);
  return /*#__PURE__*/React.createElement("div", {
    className: mobileFormat ? 'videoContainer mobile' : 'videoContainer'
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: !mobileFormat ? offMobile ? 'video hide' : className : className,
    src: "./src/assets/video/" + src + ".mp4",
    type: "mp4",
    autoPlay: true,
    loop: true
  }));
};
const GithubLink = _ref4 => {
  let {
    github,
    mobileFormat = false
  } = _ref4;
  const [checkmarkToggler, setCheckmarkToggler] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const t = setTimeout(() => {
      setCheckmarkToggler(false);
    }, 2000);
    return () => clearTimeout(t);
  }, [checkmarkToggler]);
  return /*#__PURE__*/React.createElement("div", {
    className: mobileFormat ? 'gitCloneContainer mobile' : 'gitCloneContainer'
  }, /*#__PURE__*/React.createElement("div", {
    className: "gitClone"
  }, "Of course, you need to clone the repo :", /*#__PURE__*/React.createElement("div", {
    className: "copyBox"
  }, /*#__PURE__*/React.createElement("input", {
    name: "github repo link",
    className: "gitLink",
    value: github,
    readOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      navigator.clipboard.writeText(github);
      setCheckmarkToggler(true);
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "copySvg",
    src: _copy.default,
    alt: "Copy to clipboard",
    title: "Copy to clipboard"
  })))), /*#__PURE__*/React.createElement("span", {
    className: checkmarkToggler ? "okCpy" : "okCpy hide"
  }, "\u2705"));
};
function MyProjects(props) {
  const videoRef = (0, _react.useRef)(null);
  const [mobileFormat, setMobileFormat] = (0, _react.useState)(window.innerWidth <= 1600 ? true : false);
  const [openDescIndex, setOpenDescIndex] = (0, _react.useState)(-1);
  const [vidIndex, setVidIndex] = (0, _react.useState)(-1);
  const [isVideoVisible, setIsVideoVisible] = (0, _react.useState)(false);
  const [offMobile, setOffMobile] = (0, _react.useState)(false);
  const stepsContainerRef = (0, _react.useRef)(null);
  const stepRef = (0, _react.useRef)(null);
  const timeoutRef = (0, _react.useRef)(null);
  const createProjectMap = (0, _react.useMemo)(() => {
    const map = new Map();
    _stockage.myProj[0]?.submenu?.forEach(elem => {
      if (elem.submenu) {
        elem.submenu.forEach(subItem => {
          map.set(subItem.title, subItem);
        });
      }
    });
    return map;
  }, [_stockage.myProj]);
  const project = createProjectMap.get(props.changePage.name);
  const descToggler = async (e, index) => {
    stepRef.current = e.target.closest("div");
    setOpenDescIndex(prevIndex => {
      const newIndex = prevIndex === index ? -1 : index;
      if (mobileFormat) {
        setOffMobile(newIndex < 0);
      } else setOffMobile(false);
      console.log(newIndex);
      return newIndex;
    });
  };
  const handleAnimationEnd = toggler => {
    if (openDescIndex < 0) return;
    setVidIndex(openDescIndex);
    if (toggler === "in") setIsVideoVisible(true);
  };
  (0, _react.useEffect)(e => {
    const video = videoRef.current;
    let animIn;
    if (openDescIndex < 0) {
      if (stepRef.current) {
        stepRef.current.scrollTop = 0;
        setIsVideoVisible(false);
      }
    } else {
      timeoutRef.current = setTimeout(() => {
        video.pause();
        video.currentTime = 0;
        if (video.classList.contains('show')) {
          setIsVideoVisible(false);
          animIn = () => handleAnimationEnd("in");
          video.addEventListener('animationend', animIn, {
            once: true
          });
        } else {
          video.addEventListener('animationend', handleAnimationEnd, {
            once: true
          });
          setIsVideoVisible(true);
          setVidIndex(openDescIndex);
        }
        timeoutRef.current = setTimeout(() => {
          video.play();
        }, 500);
      }, 10);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (video) {
          video.removeEventListener('animationend', handleAnimationEnd);
          if (animIn) video.removeEventListener('animationend', animIn);
        }
      };
    }
  }, [openDescIndex]);
  (0, _react.useEffect)(() => {
    const handleResize = () => {
      window.innerWidth <= 1600 ? setMobileFormat(true) : setMobileFormat(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (props.changePage.change) {
      return;
    }
    document.querySelector('.stepsContainer').classList.add('fadeOut');
    document.querySelector('.gitCloneContainer').classList.add('fadeOut');
    if (!mobileFormat) document.querySelector('.videoContainer').classList.add('fadeOut');
    const t = setTimeout(() => {
      props.setHideHome(false);
      props.setChangePage(prev => ({
        ...prev,
        change: false
      }));
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, [props.changePage.change]);

  //JSX
  const stepProps = {
    project,
    openDescIndex,
    descToggler,
    isVideoVisible,
    mobileFormat,
    vidIndex,
    videoRef
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "stepsContainer",
    ref: stepsContainerRef
  }, /*#__PURE__*/React.createElement(Title, {
    macLinuxOnly: project.macLinuxOnly,
    projectTitle: project.title
  }), /*#__PURE__*/React.createElement(Steps, stepProps)), !mobileFormat && /*#__PURE__*/React.createElement(Video, {
    src: project.steps[vidIndex]?.video,
    isVisible: isVideoVisible,
    videoRef: videoRef,
    offMobile: offMobile
  }), /*#__PURE__*/React.createElement(GithubLink, {
    github: project.github,
    mobileFormat: mobileFormat
  }));
}