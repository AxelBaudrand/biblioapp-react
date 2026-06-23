# Analisis de BiblioApp

| Elemento de React | Donde lo uso en esta app | Por que es adecuado |
| --- | --- | --- |
| Componente | `LibroCard`, `ListaLibros` y `FiltroEstado` separan la tarjeta, el listado y el filtro. | Permite dividir la interfaz en piezas reutilizables y faciles de mantener. |
| JSX | En `App.jsx` y los componentes dentro de `src/components`. | Permite describir la interfaz de la biblioteca de forma declarativa junto con la logica necesaria. |
| Props | `ListaLibros` recibe `libros`; `LibroCard` recibe `titulo`, `autores`, `estado`, `esNovedad` y otros datos. | Permiten enviar datos desde componentes padres hacia componentes hijos sin duplicar informacion. |
| Estado useState | `App.jsx` usa `filtroEstado` y `busqueda`. | Es adecuado porque esos valores cambian por interaccion del usuario y deben actualizar la vista. |
| Renderizado de listas .map + key | `ListaLibros.jsx` recorre `libros.map()` y usa `key={libro.id}`. | React identifica cada tarjeta de forma estable y evita usar el indice del array. |
| Renderizado condicional | `App.jsx` muestra `ListaLibros` o el mensaje `No hay libros que coincidan`; `LibroCard` muestra `NUEVO` si `esNovedad` es verdadero. | Permite mostrar contenido distinto segun resultados o atributos del libro. |

## Ventaja de dividir el catalogo en componentes

Dividir el catalogo en componentes hace que cada archivo tenga una responsabilidad clara. `LibroCard` se ocupa de presentar un libro, `ListaLibros` se ocupa de recorrer el arreglo y `FiltroEstado` se ocupa de cambiar el estado seleccionado. Esto reduce repeticion, facilita encontrar errores y permite cambiar una parte sin mezclar toda la logica en `App.jsx`.

## Diferencia entre props y estado

Las props son datos que un componente recibe desde otro componente. En esta app, `ListaLibros` recibe la prop `libros` desde `App.jsx`, y cada `LibroCard` recibe props como `titulo`, `editorial`, `autores`, `estado` y `esNovedad`.

El estado representa datos internos que pueden cambiar por interaccion del usuario. En esta app, `App.jsx` usa `useState` para guardar `filtroEstado` y `busqueda`; cuando el usuario selecciona un estado o escribe en el buscador, esos valores cambian y React vuelve a calcular los libros filtrados.
