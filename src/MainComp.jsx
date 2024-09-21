import {useState, useEffect} from "react";
import Profile from "./Profile";
import MyDocuments from "./Doc";
import MyProjects from "./Project";
import backArrow from './assets/back_arrow.svg'
import Svg from "./Svg";
import {navigation} from "./nav";
import {pushHistory} from "./nav";


export default function MainComp(){
    const [hideHome, setHideHome] = useState(true);
    const [hidePage, setHidePage] = useState(true);
    const [isMounted, setIsMounted] = useState(false)
    const [mobileFormat, setMobileFormat] = useState(window.innerWidth <= 1600);
    const [changePage, setChangePage] = useState({
        change: false,
        name: ""
    });

    const handleRedirect = () =>{navigation(setHideHome, setHidePage, setChangePage);}
    const handleLoad = ()=>{
        console.log(window.location.pathname)
            if (navigation(setHideHome, setHidePage, setChangePage) === 404){
                    console.log('in If after 404 from navigation')
                    window.location.href = '/redir404.html';
            }
            else{
                pushHistory(window.location.pathname)
            }
    }
    const handleResize = () => {setMobileFormat(window.innerWidth <= 1600);}

    useEffect(() =>{
        handleLoad()
        window.addEventListener('resize', handleResize);
        window.addEventListener('popstate', handleRedirect);
        return (()=>{
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('popstate', handleRedirect);
        })
    }, [])

    // useEffect(()=>{isMounted ? (hideHome ? setHidePage(false) : setHidePage(true)) : setIsMounted(true); console.log('isMounted=', isMounted)   }, [hideHome])

    return(

        <div className="mainDiv"
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"}}>

            {
                !hideHome &&
                 <Profile setChangePage={setChangePage} changePage={changePage} setHideHome={setHideHome} setHidePage={setHidePage} mobileFormat={mobileFormat}/>
            }

        {
            hidePage == false &&
            <>
            <div className="backArrow">

                    <Svg
                        src={backArrow}
                        noAnim={true}
                        onClick={()=>{
                            setChangePage(prev=>({...prev, change : false}))}}/>
            </div>
            {
                changePage.name.includes("mydoc") ?
                    <MyDocuments changePage={changePage} hidePage={hidePage} setHideHome={setHideHome} setChangePage={setChangePage} mobileFormat={mobileFormat}/> :
                    <div className={'projDiv'}>
                        <MyProjects changePage={changePage} hidePage={hidePage} setHideHome={setHideHome} setChangePage={setChangePage} mobileFormat={mobileFormat}/>
                    </div>
            }
            </>
        }

        </div>
    )
}

