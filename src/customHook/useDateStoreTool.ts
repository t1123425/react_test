import { useEffect, useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import moment from "moment"

const useDateStoreTool = (msg?:string,Type?:string) => {
    const dispatch = useDispatch();
    const selector = useSelector((state:any) => state.AppReducer);
    const mounted = useRef(false);
    useEffect(()=>{
        if(!mounted.current){
            mounted.current = true;
        }else{
            if(msg && Type){
                dispatch({
                    type:Type,
                    payload:moment().format("MM/DD/yy hh:mm:ss")+' '+msg
                })
            }
        }
    },[msg])

    return [selector];

}

export default useDateStoreTool;

