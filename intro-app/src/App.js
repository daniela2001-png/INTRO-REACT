import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CounterWithNameAndSideEffect from "./useEffect_ejemplo";
import Propertys from "./usandoProps";
import IndexPage from "./PropsComponent";

/*

Cada componente de React puede tener su propio estado

¿Qué entendemos por estado ? El estado es el conjunto de datos que gestiona el componente .

NOTA : Pasar props a componentes es una excelente manera de transmitir valores en su aplicación.

Un componente contiene datos (tiene estado) o recibe datos a través de sus props.(los propsp solo se pueden leer)


¿Qué son los props en React?

Otro concepto importante de componentes es cómo se comunican.
React tiene un objeto especial llamado prop (significa propiedad)
que usamos para transportar datos de un componente a otro.

Pero tenga cuidado: los props solo transportan datos en un flujo unidireccional
(solo de componentes principales a secundarios).
No es posible con los props pasar datos de un (componente hijo) a uno (padre), ni a componentes del mismo nivel!


>>> NOTA : JSX no es entendido por el navegador
Debe compilarse en JavaScript simple, que el navegador pueda comprender
El compilador más utilizado para JSX se llama Babel.

*/


// creamos otro hijo que saludara al usuario
// los corchetes en el parametro del child significa que estamos desetructurando y dentro del JSX significa que sacamso el valor de ese prop(solo lectura) que le pasamos
const Saludo = ({ input }) => {
  return (
    <h1>Bienvenido {input}</h1>
  )
}

// creamos nuestro hijo que tendra el prop especial children como parametro
const Child = ({ children }) => {
  return <p>{children}</p>
}


// creamos nuestro primer mini componente (este por el momento es un hijo de App)
const Welcome = () => {
  return <p>WELCOME USER</p>
}

function App() {
  /*
  
  Al llamar useState(), obtendrá una nueva variable de estado y una función que podemos llamar para modificar su valor.
  useState() acepta el valor inicial del elemento de estado y devuelve una matriz que contiene la variable de estado
  y la función que llama para alterar el estado.
  
  */
  const [input, setInput] = useState()
  console.log(input)
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const mensaje = "Hola"
  return (
    <div className="App">
      <input onChange={handleInput}></input>

      <Saludo input={input === "" ? "USER" : input}></Saludo>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Decimos que Welcome es un componente hijo de la aplicación y App es su componente padre.*/}
          <Welcome></Welcome>
          <h1>{mensaje === "Hola" ? "Hola daniela" : mensaje}</h1>
        </a>
        {/*Bueno ahora intentare usar un prop especial llamado children de react
          NOTA: Se llama un accesorio especial children.
          Eso contiene el valor de todo lo que se pasa entre las etiquetas de apertura y cierre del componente,
          por ejemplo: */}
        <Child>soy un children bonito :3</Child>
        {/* componente que usa useEffect()  y useState() explicacion de cada gancho */}
        <CounterWithNameAndSideEffect />
        {/* llamamos a un componete que hara que nuestra app sea mas funcional con ayuda de children */}
        <IndexPage>
          {/* Entonces aqui es donde creamos las propiedades del objeto props que tendra nuestro hijo Propertys */}
          <Propertys name="Daniela Bella1 :3" />
          <Propertys name="Daniela Bella2 :3" />
        </IndexPage>
      </header>
    </div>
  );
}

export default App;
