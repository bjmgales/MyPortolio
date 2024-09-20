import { useEffect } from "react"
import { pushHistory } from "./nav";

export default function MyDocuments(props){

    useEffect(()=>{
        if (!props.changePage.change){
            return;
        }
        document.querySelector('.doc').classList.add('visible');
        document.querySelector('.docContainer').classList.add('visible');
        pushHistory(props.changePage.name)
    },[props.changePage.change])

    useEffect(()=>{
        if (props.changePage.change) return;
        document.querySelector('.doc').classList.remove('visible');
        document.querySelector('.docContainer').classList.remove('visible');
        const t = setTimeout(()=>{
            props.setHideHome(false);
            props.setChangePage( prev=>({...prev, change: false}));
        }, 1000)
        return (()=>{clearTimeout(t)});
    },[props.changePage.change])
    return(
        <div className="docContainer">
            <object className="doc" data={props.changePage.name + '#toolbar=0&view=FitH'}
            type={!props.mobileFormat ? "application/pdf" : 'wrongtype'}>
            <span className="pdfErrMsg">Unfortunately, you can't display pdf in your navigator. But you can still
             download it <a href={props.changePage.name}>here!</a></span></object>
        </div>
    )
}