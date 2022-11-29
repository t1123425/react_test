import React,{memo,useState,useRef}from 'react';
import { leftAreaStyles } from '../../assets/styles/theme.css';
import { halfWidth } from '../../assets/styles/main.css';
import { BtnStyles } from '../../assets/styles/theme.css';

import useDateStoreTool from '../../customHook/useDateStoreTool';
import { mBottom, container , textAreaStyle} from '../../assets/styles/main.css';


const LeftArea:React.FC = () => {
    const actionType = useRef('');
    const [msg,setMsg] = useState('');
    const [text,setText] = useState('');
    const [rootState] = useDateStoreTool(msg,actionType.current)

    const switchTheme = rootState.isDark?'Light':'Dark';
    const toggleTheme = () => {
        actionType.current = 'TOGGLE_THEME'
        setMsg('Theme was set to '+ (rootState.isDark?' Dark':' Light'));
    }
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        //update action type
        actionType.current = 'UPDATE_MESSAGE';
        //update message
        setMsg(text);
        //reset textarea;
        setText('');
    }
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    } 
    return (
        <section className={leftAreaStyles +' '+ halfWidth + ' ' +container}>
            <button type="button" className={BtnStyles +' '+ mBottom['medium']} onClick={()=> {toggleTheme()}}>
                Switch to {switchTheme} Model
            </button>
            <form onSubmit={handleSubmit} className={container}>
                <textarea value={text} className={textAreaStyle} id="msgaarea" onChange={handleChange} cols={30} rows={10}></textarea><br/>
                <button type="submit" className={BtnStyles}>
                    Submit Message
                </button>
            </form>
        </section>
    )
}

export default memo(LeftArea);
