import * as React from 'react';

interface DescriptionBoxProps {
    contentHeading: string;
    inputPlaceholder: string;
    component: string;
}

function DescriptionBox({contentHeading, inputPlaceholder,component}: DescriptionBoxProps){
    const boxRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(()=>{
        const element = boxRef.current;
    
        if (!element) return;

        element.addEventListener('change', () => {
            const nameHeading = document.getElementById(component)
            const content = element.value;
            nameHeading.textContent = content;
        })

        return () => {
            element.removeEventListener('change', () =>{
                console.log("listener removed")
            })
        }

    }, [])

    return(
        <>
        <p className="white-font">{contentHeading}</p>
        <textarea ref={boxRef} className="inputBox" id="inputBox" placeholder= {inputPlaceholder}/>
        </>
    ) 
}

export default DescriptionBox;