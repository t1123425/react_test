import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import moment from "moment"
const useDateRender = (msgList:string[]) => {
    const dateList = useMemo(()=>{
        return msgList.map((e)=> {
            const date = moment().format("mm/dd/yy hh:mm:ss");
            return date +' '+e;
        })
    },[msgList])

    return dateList;
}

export default useDateRender;