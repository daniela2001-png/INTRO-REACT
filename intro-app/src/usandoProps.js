import React from "react";

// aqui le pasaremos a nuestro componente hijo los props que definimos dentro del componente padre :) (App.js)
const Propertys = (props) => {
    /* 
        NUNCA JAMAS SE PUEDEN REASIGNAR PROPS POR DOS RAZONES LÓGICAS: (props.name = "Dani!")
        1 ) Es un objeto en JS ({}) por lo tanto no podemos mutarlo totalmete
        2 ) Los props solo los podemos "leer" por eso no podemos gestionar datos con ellos directamente :3

        y como es un objeto podemos ver que es lo que tiene como en el siguiente loop :
    */;
    for (const [key, value] of Object.entries(props)) {
        console.log(`${key}: ${value}`);
    }
    return <h1>{props.name}</h1>
}

export default Propertys;
