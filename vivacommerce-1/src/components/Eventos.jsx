import React from 'react'
import { useEffect } from 'react';


const Eventos = () => {
    const noVocals = (e) => {
        if (
            e.key === 'a' ||
            e.key === 'e' ||
            e.key === 'i' ||
            e.key === 'o' ||
            e.key === 'u'
        ) {
            e.preventDefault();
        }
    };
    //para que el evento no se trasmita a otro componente padres donde genere alguna dificultal
    useEffect(() => {
        const handleClick =(e)=>{
            //console.log("Click");
            //console.log(e.screenX, e.screenY);
            console.log(e.target.innerWidth);
            };
            //window.addEventListener("click", handleClick);
            window.addEventListener("resize", handleClick);
        return () => {
            //window.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleClick);
        };
    }, []);
    

    
    
    return (
        <>
        <div>Eventos</div>
        <input type="text" onKeyDown={noVocals} />
        </>
    )
}

export default Eventos


