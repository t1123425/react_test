import React, {memo,useState,useRef}from 'react';
import { BtnStyles } from '../../assets/styles/theme.css';
import { mBottom } from '../../assets/styles/main.css';
import useDateStoreTool from '../../customHook/useDateStoreTool';
interface btnProps{
    text:string,
}
const Button:React.FC<btnProps> = ({text}) => {
     const [btnMsg,setMsg] = useState('')
     const btnToggle = useRef(true);
     useDateStoreTool(btnMsg,'UPDATE_MESSAGE')
    const sendMsg = () => {
        let msg = '';
        btnToggle.current = !btnToggle.current;
        if(btnToggle.current){
            msg = text +' clicked'
        }else{
            msg = text +' clicked '
        }
        setMsg(msg)
    }
    return <button className={BtnStyles+' '+ mBottom['medium']} onClick={sendMsg}>{text}</button>
}

export default memo(Button);