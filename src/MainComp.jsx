import {useState, useEffect} from "react";
import Profile from "./Profile";
import MyDocuments from "./Doc";
import MyProjects from "./Project";
import backArrow from './assets/back_arrow.svg'
import Svg from "./Svg";
import {navigation} from "./nav";
import {pushHistory} from "./nav";


export default function MainComp(){
    const [hideHome, setHideHome] = useState(false);
    const [hidePage, setHidePage] = useState(true);
    const [mobileFormat, setMobileFormat] = useState(window.innerWidth <= 1600);
    const [changePage, setChangePage] = useState({
        change: false,
        name: ""
    });

    const handleRedirect = ()=>{navigation(setHideHome, setHidePage, setChangePage);}
    const handleResize = () => {setMobileFormat(window.innerWidth <= 1600);}

    useEffect(() =>{
        window.addEventListener('resize', handleResize);
        window.addEventListener('popstate', handleRedirect);
        return (()=>{
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('popstate', handleRedirect);
        })
    }, [])

    useEffect(()=>{hideHome ? setHidePage(false) : setHidePage(true);   }, [hideHome])

    return(

        <div className="mainDiv"
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"}}>

            {
                !hideHome &&
                 <Profile setChangePage={setChangePage} changePage={changePage} setHideHome={setHideHome} mobileFormat={mobileFormat}/>
            }

        {
            !hidePage &&
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

