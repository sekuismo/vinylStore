documentación

componente app
El componente App es el componente principal de la aplicación y se encarga de gestionar el enrutamiento entre las distintas páginas de la aplicación.

Para ello, este componente hace uso de los componentes Routes, Route y BrowserRouter de la librería react-router-dom. Estos componentes permiten definir las rutas de la aplicación y mostrar el componente correspondiente cuando se accede a cada ruta.

Además, este componente incluye los componentes Header, Main, Filtrar y Listado, que son los componentes que se muestran en cada una de las páginas de la aplicación. También incluye el componente Footers que se encarga de mostrar el pie de página.

Este componente también hace uso de la librería bootstrap para dar formato a la interfaz de usuario.



Componente filtrar


El componente Filtrar es un componente de React que se encarga de mostrar una lista de discos, permitir agregar y eliminar discos del carrito de compras y agregar nuevos discos a la lista de discos.

Para ello, este componente hace uso de los siguientes métodos y hooks de React:

useState: permite gestionar el estado del componente, almacenando la lista de discos y la lista del carrito de compras en dos estados diferentes.
useEffect: permite realizar una petición HTTP GET a la ruta /discos para obtener la lista de discos y almacenarla en el estado del componente.
addToShoppingList: permite agregar un disco al carrito de compras y actualizar el estado y el localStorage. También decrementa el stock del disco mediante una petición HTTP PUT a la ruta /discos/:id.
removeFromShoppingList: permite eliminar un disco del carrito de compras y actualizar el estado y el localStorage. También incrementa el stock del disco mediante una petición HTTP PUT a la ruta /discos/:id.
getShoppingList: permite obtener la lista del carrito de compras desde el localStorage.
handleClick: permite obtener la lista del carrito de compras desde el localStorage y actualizar el estado del componente.
handleSubmit: permite agregar un nuevo disco a la lista de discos mediante una petición HTTP POST a la ruta /discos. También agrega el disco al carrito de compras y actualiza el estado y el localStorage.
Este componente también hace uso de los componentes de la librería react-bootstrap para dar formato a la interfaz de usuario.


Componente listado

  El componente Listado se encarga de mostrar la lista completa de discos disponibles en la tienda. Para ello, hace uso de la función useState de React para gestionar el estado de la aplicación y de la función useEffect para realizar una petición HTTP a la API de discos.

El componente incluye una barra de búsqueda que permite filtrar la lista de discos por nombre. También muestra una tabla con la información de cada disco, incluyendo el nombre, intérprete, precio, año, estilo y stock disponible.

Cuando se carga la página, el componente realiza una petición HTTP a la API para obtener la lista completa de discos y almacena estos datos en el estado de la aplicación. Luego, utiliza la función de búsqueda para filtrar los discos que se muestran en la tabla y renderiza cada uno de ellos en una fila de la tabla.


