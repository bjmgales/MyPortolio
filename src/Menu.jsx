import React, { useEffect, useState } from "react";
import createKeyframes from "./Keyframes";

const Menu = React.memo(function Menu(props) {
    const [hasMenuAnimEnd, setHasMenuAnimEnd] = useState(false);
    const [cleanAndDisplay, setCleanAndDisplay] = useState({
        clean : false,
        link : ''
    })
    const handleAnimState = (e) =>{
        e.stopPropagation();
        setHasMenuAnimEnd(true);
    }

    const showTooltip = async(e) =>{
        if(!hasMenuAnimEnd || props.mobileFormat) return;
        const menu = e.target.lastChild;
        menu.style.visibility = 'visible';
        menu.style.animation = "tooltipShow 1s forwards";
    }
    const hideTooltip = async(e) =>{
        if (props.mobileFormat) return;
        const menu = e.target.lastChild;
        menu.style.animation = "tooltipHide 2s forwards";
    }

    useEffect(()=>{
        if (!cleanAndDisplay.clean) return;
        const toHide = document.querySelectorAll('.clean');
        toHide.forEach(element => {
            element.style.transition = 'transform 0.8s';
            element.style.transformOrigin = 'center';
            element.style.transform = 'translateY(-100vh)'
        });
        const lmenu = document.querySelector('.leftMenu')
        const rmenu = document.querySelector('.rightMenu')
        lmenu.style.animation = 'none';
        lmenu.offsetHeight; //force reflow
        lmenu.style.animation = "fadeInLeft 0.5s forwards reverse ease";
        rmenu.style.animation = 'none';
        rmenu.offsetHeight; //force reflow
        rmenu.style.animation = "fadeInRight 0.5s forwards reverse ease";
        setTimeout(()=>{
            props.setChangePage({change: true, name: cleanAndDisplay.link});
            props.setHideHome(true);
            props.setHidePage(false)
        }, 800)
    }, [cleanAndDisplay.clean])

    // useEffect(()=>{
    //     history.pushState(null, '', '/');
    //     console.log('testHome')
    // }, [])

    const submenuHandler = (submenu, key) =>{
        return(
            <ul className="submenu">
            {
                submenu.map(
                    (subitem, subIndex) =>
                        {
                            const uKey = `${subitem.title}`;
                            return (
                                <div className="nestedMenu" key={`div-${uKey}#${subIndex}`}>

                                <li key={uKey}
                                subtext={subitem.subtext ? subitem.subtext : ''}
                                onMouseOver={subitem.subtext ? showTooltip : null}
                                onMouseOut={subitem.subtext ? hideTooltip : null}
                                onClick={subitem.link ? () =>{setCleanAndDisplay({clean: true, link: subitem.link})} : null}
                                style={subitem.subtext ? {fontSize: "0.5em"} : null}
                                onAnimationEnd={handleAnimState}>
                                    {subitem.title}
                                    {
                                        subitem.submenu && submenuHandler(subitem.submenu, uKey)
                                    }
                                    {
                                        subitem.subtext && <span key={`span-${uKey}`} className="tooltip">{subitem.subtext}</span>
                                    }
                                </li>
                            </div>
                        );
                }
            )
        }
            </ul>
        )
    }

    const toggleSubmenu = ({target}) => {
        let submenu = target.querySelector("ul")
        setHasMenuAnimEnd(false);
        if (!submenu) return;
        if (submenu.className == "submenu" || submenu.className == "submenu close"){
            document.querySelectorAll('.submenu.open').forEach(element => {
                if (!element.contains(submenu) && !submenu.contains(element)){
                    element.className = 'submenu close';
                }
            });
            submenu.className = 'submenu open'
        }
        else{
            submenu.querySelectorAll(".submenu.open").forEach(element => {
                element.className = 'submenu close';
            });
            submenu.className = 'submenu close';

        }

    }

    return (
        <ul id={props.id} className="dropdown">
            {
                props.items.map(
                    (item, index) =>
                        {
                            const key = `${item.title}#${index}`;
                            return (
                                <li className="outerMenu"
                                key={key}
                                onClick={toggleSubmenu}
                                >
                                {item.title}
                                {
                                    item.submenu && submenuHandler(item.submenu, `${item.title}#${index}`)
                                }
                                {
                                    item.subtext && <span className="tooltip">toto</span>
                                }
                            </li>
                        );
                    }
                )
            }
            </ul>
    );
});

export default Menu;