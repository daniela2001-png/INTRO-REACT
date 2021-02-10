import React from "react";
const { useEffect, useState } = React;

/*

El useEffect gancho permite que los componentes tengan acceso a los eventos del ciclo de vida de un componente.

Cuando llamas al gancho, le pasas una función. React ejecutará la función cuando el componente se renderice por primera vez y en cada nueva renderización / actualización posterior.

React primero actualiza el DOM, luego llama a cualquier función que se le haya pasado useEffect().

Todo sin bloquear la representación de la interfaz de usuario, incluso en el código de bloqueo.

Aquí hay un ejemplo:


>>> NOTA : Dado que la función useEffect () se ejecuta en cada nueva renderización / actualización
posterior del componente, podemos decirle a React que lo omita, por motivos de rendimiento.
Hacemos esto agregando un segundo parámetro que es una matriz que contiene una lista de variables
de estado para estar atento.


De manera similar, puede decirle a React que solo ejecute el efecto secundario una vez (en el momento del montaje), pasando una matriz vacía:

useEffect(() => {
    console.log(`Component mounted`)
}, [])


>>> useEffect () es excelente para agregar registros, acceder a API de terceros y mucho más.

*/

function CounterWithNameAndSideEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= 5) {
            let count2 = count * 2;
            console.log("ALGO CAMBIO", count2);
        }
        console.log(`You clicked ${count} times`);
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default CounterWithNameAndSideEffect;