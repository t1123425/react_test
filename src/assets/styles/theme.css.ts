import {style, createTheme} from "@vanilla-extract/css";

export const [mainTheme,vars] = createTheme({
    btn:{
      bg:'#cc0000',
      text:'#fff',
    },
    leftArea:{
        bg:'#cecece',
        text:'#2f4f4f'
    },
    rightArea:{
        bg:'#fff',
        text:'#000'
    }
})

export const darkMode = createTheme(vars,{
    btn:{
        bg:'#f0f8ff',
        text:'#800080'
    },
    leftArea:{
        bg:'#fff',
        text:'#696969'
    },
    rightArea:{
        bg:'#008080',
        text:'#fff'
    }
})

export const rightAreaStyles = style({
    backgroundColor:vars.rightArea.bg,
    color:vars.rightArea.text
})

export const leftAreaStyles = style({
    backgroundColor:vars.leftArea.bg,
    color:vars.leftArea.text
})

export const BtnStyles = style({
    backgroundColor:vars.btn.bg,
    color:vars.btn.text,
    opacity:1,
    transition:'opacity 0.1s',
    border:0,
    outline:0,
    // add box shadow prevent dark mode can't saw button cause bg 
    boxShadow:'3px 4.5px 4px grey',
    borderRadius:'5px',
    ':hover':{
        opacity:0.5
    },
    padding:'5px',
    cursor:'pointer'
})