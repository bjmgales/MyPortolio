import { useState, useEffect, useRef } from "react";
import Svg from "./Svg"


import me from './assets/bjm.jpg';
import github from './assets/Github.svg';
import linkedin from './assets/linkedin.svg';
import fortytwo from './assets/42_Logo.svg';
import ouch from './assets/sounds/aie0.mp3'
import ouchh from './assets/sounds/aie1.mp3'
import ouchhh from './assets/sounds/aie2.mp3'
import ouchhhh from './assets/sounds/aie3.mp3'
import { links } from "./stockage";
import { myDoc, myProj } from "./stockage"
import Menu from "./Menu";
import { pushHistory } from "./nav";

export default function Profile(props) {

    const rightMenuRef = useRef(null);
    const [gitFadeOut, setGitFadeOut] = useState(false);
    const [linkedinFadeOut, setLinkedinFadeOut] = useState(false);

    const handleMeClick = () => {
        const ouchStack = [
            new Audio(ouch),
            new Audio(ouchh),
            new Audio(ouchhh),
            new Audio(ouchhhh)
          ];
        ouchStack[Math.floor(Math.random() * 4)].play()
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('#MyPic').style.transform = "scale(2)";
          document.querySelector('#MyPic').style.transition = "transform 1.5s";
        }, 50);
        pushHistory('/')
        return () => clearTimeout(timer);
      }, []);

    useEffect(()=>{
        const leftMenu = document.querySelector('.leftMenu')
        const rightMenu = document.querySelector('.rightMenu')
        const parent = document.querySelector('.menuContainer')
        if (props.mobileFormat){
            leftMenu.style.position = 'static';
            rightMenu.style.position = 'static';
            parent.classList.add('menuRef');
        }
        else{
            leftMenu.style.position = 'absolute';
            rightMenu.style.position = 'absolute';
            parent.classList.remove('menuRef');
        }
    }, [props.mobileFormat])


    return (
        <>
        <div className="fortytwo">
            <Svg
                src={fortytwo}
                alt="42 school"
                noAnim={true}
                link={links.fortytwo}
            />
            <Svg
                src={fortytwo}
                alt="42 shadow"
                noAnim={true}
            />
        </div>
            <div className="picContainer clean">
                <img
                    id="MyPic"
                    src={me}
                    alt="My Picture"
                    onClick={handleMeClick}
                />
                {(
                    <>
                            <Svg
                                src={github}
                                className="git"
                                alt="My github profile"
                                link={links.git}
                                pos_x={-84}
                                pos_y={-20}
                                hide_x={-84}
                                hide_y={'-50vh'}
                                isOtherHovered={gitFadeOut}
                                imHovered={()=>setLinkedinFadeOut(true)}
                                imOut={()=> setLinkedinFadeOut(false)}
                                />
                            <Svg
                                src={linkedin}
                                className="linkedin"
                                alt="My linkedin profile"
                                link={links.linkedin}
                                pos_x={150}
                                pos_y={-20}
                                hide_x={150}
                                hide_y={'-50vh'}
                                isOtherHovered={linkedinFadeOut}
                                imHovered={() => setGitFadeOut(true)}
                                imOut={()=> setGitFadeOut(false)}
                                />
                    </>
                )}
            </div>
            <div className="menuContainer">
                <div className="leftMenu">
                    <Menu items={myProj}
                    setChangePage={props.setChangePage}
                    changePage={props.changePage}
                    setHideHome={props.setHideHome}
                    setHidePage={props.setHidePage}
                    mobileFormat={props.mobileFormat}/>
                </div>
                <div className="rightMenu">
                    <Menu items={myDoc}
                    setChangePage={props.setChangePage}
                    changePage={props.changePage}
                    setHideHome={props.setHideHome}
                    setHidePage={props.setHidePage}
                    mobileFormat={props.mobileFormat}/>
                </div>
            </div>
        </>
    );
}
