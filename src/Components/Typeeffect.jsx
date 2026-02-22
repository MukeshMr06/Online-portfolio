import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Typeeffect = () => {

    const current = useRef(null);

    useEffect(()=>{
         const typed = new Typed(current.current, {
      strings: ["Mukesh","Fullstack Developer"],
      typeSpeed: 100,
      backSpeed: 200,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  
}, []);

  return (
   <span className='text' ref={current}></span>
  )
}

export default Typeeffect