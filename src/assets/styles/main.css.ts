import {style} from "@vanilla-extract/css";
import { styleVariants } from '@vanilla-extract/css';

const space = {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px"
}
export const flexWrap = style({
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
})

export const halfWidth = style({
    width:'calc(50% - 10px)',
    '@media':{
        'screen and (max-width: 768px)': {
            width:'100%'
        },
    }
})

export const textAreaStyle = style({
    resize:'none',
    borderRadius:'15px',
    width:'100%',
    color:'inherit',
    textIndent:'8px',
    paddingTop:'8px'
})
export const container = style({
    padding:'10px 5px'
})
export const maxHeightContainer = style({
     maxHeight:'380px',
     overflow:'auto'
})
export const mBottom = styleVariants({
    small:[{
        marginBottom:space.small
    }],
    medium:[{
        marginBottom:space.medium
    }]
})
export const mLeft = styleVariants({
    small:[{
        marginLeft:space.small
    }],
    medium:[{
        marginLeft:space.medium
    }]
})
