import {useState, useEffect} from "react";
import Profile from "./Profile";
import MyDocuments from "./Doc";
import MyProjects from "./Project";
import backArrow from './assets/back_arrow.svg'
import Svg from "./Svg";

export default function MainComp(){
    const [hideHome, setHideHome] = useState(false);
    const [hidePage, setHidePage] = useState(true);
    const [changePage, setChangePage] = useState({
        change: false,
        name: ""
    });

    useEffect(()=>{hideHome ? setHidePage(false) : setHidePage(true); console.log(changePage.change)}, [hideHome])


    return(

        <div className="mainDiv"
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"}}>

            {
                !hideHome &&
                 <Profile setChangePage={setChangePage} changePage={changePage} setHideHome={setHideHome}/>
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
                    <MyDocuments changePage={changePage} hidePage={hidePage} setHideHome={setHideHome} setChangePage={setChangePage}/> :
                    <div className={'projDiv'}>
                        <MyProjects changePage={changePage} hidePage={hidePage} setHideHome={setHideHome} setChangePage={setChangePage}/>
                    </div>
            }
            </>
        }

        </div>
    )
}


