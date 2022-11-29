import React from 'react';
import { rightAreaStyles } from '../../assets/styles/theme.css';
import { halfWidth } from '../../assets/styles/main.css';
import useDateStoreTool from '../../customHook/useDateStoreTool';
import { mBottom, maxHeightContainer} from '../../assets/styles/main.css';

const RightArea:React.FC = () => {
    const [rootState] =  useDateStoreTool();
    return (
        <section className={rightAreaStyles+' '+halfWidth+ ' '+ maxHeightContainer}>
            <ul className='messageList'>
                {
                    rootState.msgList.map((e:string,i:number)=>{
                        return (
                            <li key={i} className={mBottom['small']}>{
                                e
                            }</li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default RightArea;
