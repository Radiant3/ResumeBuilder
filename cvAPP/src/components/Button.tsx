import React from "react";
interface ButtonProps{
    content: string;
    clickHandler: (event:React.MouseEvent) => void;
}
const Button = ({content, clickHandler,} : ButtonProps) => {
    return (<button onClick={clickHandler} >{content}</button>);
}

export default Button;