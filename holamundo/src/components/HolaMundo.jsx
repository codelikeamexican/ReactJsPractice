import React from 'react'

const HolaMundo = ()=>{
    const hello ='holiwi';
    const isTrue = false;
    return (
        <div className="HolaMundo">
            
            <h1>{hello}</h1>
            <h2>Curso Especial de React</h2>
            {isTrue ? <h1>Esto es verdadero</h1> : <h5>Soy Falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;