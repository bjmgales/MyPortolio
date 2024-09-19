import React, { useEffect, useState } from "react";
import createKeyframes from "./Keyframes";
const Menu = /*#__PURE__*/React.memo(function Menu(props) {
  const [hasMenuAnimEnd, setHasMenuAnimEnd] = useState(false);
  const [cleanAndDisplay, setCleanAndDisplay] = useState({
    clean: false,
    link: ''
  });
  const handleAnimState = e => {
    e.stopPropagation();
    setHasMenuAnimEnd(true);
  };
  const showTooltip = async e => {
    if (!hasMenuAnimEnd) return;
    const menu = e.target.lastChild;
    menu.style.visibility = 'visible';
    menu.style.animation = "tooltipShow 1s forwards";
  };
  const hideTooltip = async e => {
    const menu = e.target.lastChild;
    menu.style.animation = "tooltipHide 2s forwards";
  };
  useEffect(() => {
    if (!cleanAndDisplay.clean) return;
    const toHide = document.querySelectorAll('.clean');
    toHide.forEach(element => {
      element.style.transition = 'transform 0.5s';
      element.style.transform = 'scale(0.00001)';
    });
    const lmenu = document.querySelector('.leftMenu');
    const rmenu = document.querySelector('.rightMenu');
    lmenu.style.animation = 'none';
    lmenu.offsetHeight; //force reflow
    lmenu.style.animation = "fadeInLeft 0.5s forwards reverse ease";
    rmenu.style.animation = 'none';
    rmenu.offsetHeight; //force reflow
    rmenu.style.animation = "fadeInRight 0.5s forwards reverse ease";
    setTimeout(() => {
      props.setChangePage({
        change: true,
        name: cleanAndDisplay.link
      });
      props.setHideHome(true);
    }, 500);
  }, [cleanAndDisplay.clean]);
  const submenuHandler = (submenu, key) => {
    return /*#__PURE__*/React.createElement("ul", {
      className: "submenu"
    }, submenu.map((subitem, subIndex) => {
      const uKey = `${subitem.title}`;
      return /*#__PURE__*/React.createElement("div", {
        className: "nestedMenu",
        key: `div-${uKey}#${subIndex}`
      }, /*#__PURE__*/React.createElement("li", {
        key: uKey,
        subtext: subitem.subtext ? subitem.subtext : '',
        onMouseOver: subitem.subtext ? showTooltip : null,
        onMouseOut: subitem.subtext ? hideTooltip : null,
        onClick: subitem.link ? () => {
          setCleanAndDisplay({
            clean: true,
            link: subitem.link
          });
        } : null,
        style: subitem.subtext ? {
          fontSize: "0.5em"
        } : null,
        onAnimationEnd: handleAnimState
      }, subitem.title, subitem.submenu && submenuHandler(subitem.submenu, uKey), subitem.subtext && /*#__PURE__*/React.createElement("span", {
        key: `span-${uKey}`,
        className: "tooltip"
      }, subitem.subtext)));
    }));
  };
  const toggleSubmenu = _ref => {
    let {
      target
    } = _ref;
    let submenu = target.querySelector("ul");
    setHasMenuAnimEnd(false);
    if (!submenu) return;
    if (submenu.className == "submenu" || submenu.className == "submenu close") {
      document.querySelectorAll('.submenu.open').forEach(element => {
        if (!element.contains(submenu) && !submenu.contains(element)) {
          element.className = 'submenu close';
        }
      });
      submenu.className = 'submenu open';
    } else {
      submenu.querySelectorAll(".submenu.open").forEach(element => {
        element.className = 'submenu close';
      });
      submenu.className = 'submenu close';
    }
  };
  return /*#__PURE__*/React.createElement("ul", {
    id: props.id,
    className: "dropdown"
  }, props.items.map((item, index) => {
    const key = `${item.title}#${index}`;
    return /*#__PURE__*/React.createElement("li", {
      className: "outerMenu",
      key: key,
      onClick: toggleSubmenu
    }, item.title, item.submenu && submenuHandler(item.submenu, `${item.title}#${index}`), item.subtext && /*#__PURE__*/React.createElement("span", {
      className: "tooltip"
    }, "toto"));
  }));
});
export default Menu;