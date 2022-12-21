Componente filtrar

La función addToShoppingList se utiliza para agregar un disco a la lista de compras. 
Esta función se llama cuando se hace clic en el botón "Agregar" junto a cada disco en 
la lista de discos disponibles. La función toma un disco como argumento y agrega este 
disco a la lista de compras existente utilizando la spread operator (...). Luego, la
 función almacena la lista actualizada de compras en el almacenamiento local del navegador
  utilizando el método setItem de localStorage.

La función getShoppingList se utiliza para obtener la lista de compras almacenada en el 
almacenamiento local del navegador. Esta función se llama cuando se hace clic en el botón
 "Ver lista de compras". La función obtiene el valor almacenado en el almacenamiento local
  utilizando el método getItem de localStorage, lo parsea a un objeto JavaScript y lo devuelve.

La función removeFromShoppingList se utiliza para eliminar un disco de la lista de compras. 
Esta función se llama cuando se hace clic en el botón "Eliminar" junto a cada disco en la 
lista de compras. La función toma un disco como argumento y filtra la lista de compras para 
eliminar el disco seleccionado. Luego, la función almacena la lista actualizada de compras en 
el almacenamiento local del navegador utilizando el método setItem de localStorage.

La función handleClick se utiliza para mostrar la lista de compras almacenada en el almacenamiento 
local del navegador. Esta función se llama cuando se hace clic en el botón "Ver lista de compras".
 La función llama a getShoppingList para obtener la lista de compras almacenada y luego actualiza
  el estado de la aplicación con la lista obtenida.

La función handleSubmit se utiliza para manejar el evento de envío de un formulario. Esta función
 se llama cuando se hace clic en el botón "Enviar" del formulario de "Solicitar disco". La función
  hace lo siguiente:

Previene el comportamiento predeterminado del evento de envío de formulario, que suele ser enviar
 los datos del formulario a una URL especificada.
Crea una nueva instancia de FormData a partir del formulario que ha sido enviado.
Obtiene los valores de los campos "nombreDisco", "interprete" y "estilo" del formulario utilizando 
el método get de FormData.






