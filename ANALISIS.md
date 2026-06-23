elemento de React			¿Dónde utilizamos el problema?			¿Por qué es el correcto? 

Componente  		...		                                        ...


JSX				...                                         ...                          

Props				lo ocupamos para comunicar ListaLibros a LibroCard	permite que muestre información dependiendo del libro es distinta
				EJ: Autores, editorial,estado.


Estado 				en la app.jsx	guarda el filtro					maneja datos que cambian al ser manipulados por el usuario



Renderizado de listas 		en ListaLibros.jsx						pq necesitamos la key como id, para recorrer el array identificar correctamente el elemento


Renderizado condicional    sirve para mostrar el mensaje nuevo o no hay libros que coinciden			solo cuando se cumple bajo ciertas condiciones en algunas partes de la interfaz