import React from "react";


function IndexPage(props) {
    // aqui lo que estamos haceindo en crear un componente que podra tener (como idea para no repetir codigo) todo lo que este dentro de los <> de etse componente seran hijos y podremos atraparlos gracias al prop especial children
    return <div>{props.children}</div>
}
export default IndexPage;
