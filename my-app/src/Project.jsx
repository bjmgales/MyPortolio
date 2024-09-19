import { useEffect, useState, useRef, useMemo } from "react";
import { myProj } from "./stockage"
import copy from './assets/copy.svg'
import macIcon from './assets/mac.svg'
import windowsIcon from './assets/windows.svg'
import linuxIcon from './assets/linux.svg'


const Title = ({macLinuxOnly, projectTitle}) =>{
    return(
        <div style={{display: "flex"}}>
            <h1>{projectTitle.toUpperCase()}</h1>
            <img className="osIcons" src={linuxIcon}></img>
            <img className="osIcons" src={macIcon}></img>
            {
                !macLinuxOnly &&
                <img className="osIcons" src={windowsIcon}></img>
            }

        </div>
    )
}

const Steps = ({project, openDescIndex, descToggler, isVideoVisible, vidIndex, mobileFormat, videoRef}) => {

    useEffect(()=>{
        if (videoRef.current)
            videoRef.current.closest('div').style.maxHeight = 'fit-content';
    })

    return (
        project.steps.map((elem, elemIndex)=>{
            const key = elem.title + `#${elemIndex}`
            return(
                <div key={key}>
                    <div
                    key={'step' + key}
                    className="step"
                    onClick={(event)=>{descToggler(event, elemIndex, elem.src)}}
                    style={{ overflowY: openDescIndex === elemIndex ? 'scroll' : 'hidden'}}>
                        <h1
                        style={{paddingLeft: 30}}
                        key={'title_' + key}>
                            {elem.title}
                        </h1>
                        <h3 className={`stepDesc ${openDescIndex === elemIndex ? 'open' : ''}`}
                        style={{paddingLeft: 40, width:"90%"}}
                        key={'descTitle_' + key}>
                            {elem.subTitle}
                        </h3>
                            <p className={`stepDesc ${openDescIndex === elemIndex ? 'open' : ''}`}
                            style={{paddingLeft: 40, paddingRight: 70}}
                            key={'desc_' + key}>
                            {elem.description}
                        </p>
                    </div>
                    {
                        mobileFormat && elemIndex === openDescIndex &&
                        <Video src={project.steps[openDescIndex]?.video} isVisible={isVideoVisible} videoRef={videoRef} mobileFormat={mobileFormat}/>

                    }
                </div>
            )
        })
    )
}

const Video = ({src, isVisible, videoRef, mobileFormat = false, offMobile=false}) =>{
    const [className, setClassName] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        isMounted ? ( isVisible ? setClassName('video show') : setClassName('video') ) : (setIsMounted(true));
        /* eslint-disable-next-line no-unused-expressions */
        !document.querySelector('video').classList.contains(['show', 'video']) && isVisible ? setClassName('video show') : null;
    }, [isVisible]);

    console.log('here', className)
    return (
        <div className={mobileFormat ? 'videoContainer mobile' : 'videoContainer'}>
                    <video
                    ref={videoRef}
                    className={!mobileFormat ? (offMobile ? 'video hide' : className) : className}
                    src={"./src/assets/video/" + src + ".mp4"}
                    type="mp4" autoPlay loop/>
        </div>
    )
}

const GithubLink = ({github, mobileFormat = false}) =>{

    const [checkmarkToggler, setCheckmarkToggler] = useState(false)
    useEffect(()=>{
        const t = setTimeout(()=>{setCheckmarkToggler(false)}, 2000)
        return(()=>clearTimeout(t));
    }, [checkmarkToggler])

    return (
        <div className={mobileFormat ? 'gitCloneContainer mobile' : 'gitCloneContainer'}>
            <div className="gitClone">
                Of course, you need to clone the repo :
                <div className="copyBox">
                    <input name="github repo link" className="gitLink"value={github} readOnly/>
                    <span onClick={()=>{
                        navigator.clipboard.writeText(github);
                        setCheckmarkToggler(true)

                    }}>
                        <img className="copySvg"
                        src={copy}
                        alt="Copy to clipboard"
                        title="Copy to clipboard">
                        </img>
                    </span>
                </div>
            </div>
            <span className={checkmarkToggler ? "okCpy" : "okCpy hide"}>✅</span>
        </div>
    )
}
export default function MyProjects(props){

    const   videoRef = useRef(null)
    const   [mobileFormat, setMobileFormat] = useState(window.innerWidth <= 1600 ? true : false)
    const   [openDescIndex, setOpenDescIndex] = useState(-1);
    const   [vidIndex, setVidIndex] = useState(-1);
    const   [isVideoVisible, setIsVideoVisible] = useState(false);
    const   [offMobile, setOffMobile] = useState(false);
    const   stepsContainerRef = useRef(null);
    const   stepRef = useRef(null);
    const   timeoutRef = useRef(null);

    const createProjectMap = useMemo(() =>{
        const map = new Map();
        myProj[0]?.submenu?.forEach((elem) =>{
            if (elem.submenu){
                elem.submenu.forEach(subItem =>{
                    map.set(subItem.title, subItem)
                });
            }
        })
        return map;
    }, [myProj])

    const   project = createProjectMap.get(props.changePage.name);


    const descToggler = async(e, index) => {
        stepRef.current = e.target.closest("div");
        setOpenDescIndex(prevIndex => {
            const newIndex = prevIndex === index ? -1 : index;

            if (mobileFormat) {
                setOffMobile(newIndex < 0);
            }
            else
                setOffMobile(false);

            console.log(newIndex);
            return newIndex;
        })
    }

    const handleAnimationEnd = (toggler) => {
        if (openDescIndex < 0) return;
        setVidIndex(openDescIndex)
        if (toggler === "in") setIsVideoVisible(true);
    }


    useEffect((e)=>{
        const video = videoRef.current;
        let animIn;

        if (openDescIndex < 0){
            if (stepRef.current){
                stepRef.current.scrollTop = 0;
                setIsVideoVisible(false)
            }
        }
        else{
         timeoutRef.current = setTimeout(()=>{
             video.pause();
             video.currentTime = 0;
             if (video.classList.contains('show')) {
                setIsVideoVisible(false)
                animIn = () => handleAnimationEnd("in")
                video.addEventListener('animationend', animIn, { once: true });
            } else {
                video.addEventListener('animationend', handleAnimationEnd, { once: true });
                setIsVideoVisible(true)
                setVidIndex(openDescIndex);
            }
             timeoutRef.current = setTimeout(()=>{
                 video.play();
             }, 500);
         }, 10)
         return (()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (video){
                video.removeEventListener('animationend', handleAnimationEnd)
                if (animIn)
                    video.removeEventListener('animationend', animIn)
            }
        })
    }
    },  [openDescIndex])

    useEffect(()=>{
        const handleResize = () =>{
            window.innerWidth <= 1600 ? setMobileFormat(true) : setMobileFormat(false);
        }
        window.addEventListener('resize', handleResize);
        return (()=>{
            window.removeEventListener('resize', handleResize);
        })
    }, [])

    useEffect(()=>{
        if (props.changePage.change){
            return;
        }
        document.querySelector('.stepsContainer').classList.add('fadeOut');
        document.querySelector('.gitCloneContainer').classList.add('fadeOut');
        if (!mobileFormat)
            document.querySelector('.videoContainer').classList.add('fadeOut');
        const t = setTimeout(()=>{
            props.setHideHome(false);
            props.setChangePage( prev=>({...prev, change: false}));
        }, 1000)
        return (()=>{clearTimeout(t)});
    },[props.changePage.change])

    //JSX
    const stepProps = { project, openDescIndex, descToggler, isVideoVisible, mobileFormat, vidIndex, videoRef};
    return(
    <>
        <div className="stepsContainer" ref={stepsContainerRef}>
            <Title macLinuxOnly={project.macLinuxOnly} projectTitle={project.title}/>
            <Steps {...stepProps}/>
        </div>

        {!mobileFormat &&  <Video src={project.steps[vidIndex]?.video} isVisible={isVideoVisible} videoRef={videoRef} offMobile={offMobile}/>}
        <GithubLink github={project.github} mobileFormat={mobileFormat}/>
    </>

    )
}