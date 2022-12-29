# OpelSports
## Proyecto final del Curso de ReactJS de CH

Proyecto creado utilizando React. Se trata de una App de un E-Commerce de una tienda de hardware. 

## Paquetes/librerías utilizados 

- Se incorporó Bootstrap para estilar los componentes de la App
- Se utilizó React-Toastify para la mejor experiencia de usuario con las notificaciones

## Navegación por la App

- Al ingresar a la App se despliega el Home ("/") que muestra los productos disponibles en la base de datos (Firestore) en forma general.
- A través del Navbar se puede acceder al Home antedicho, a las categorías de productos y al Carrito de compras.
- "/category/equipos", "/category/componentesInternos" y "/category/perifericos" son las 3 rutas que muestran los productos filtrados por categoría.
- "/cart" muestra el carrito de compras con un mínimo de detalle de cada producto y la capacidad de borrarlos individual o totalmente. A su vez se puede acceder al checkout ("/checkout") a través del botón "Finalizar compra"
- En el main de Home y las vistas por categoría se puede en cada producto visualizar su imagen, nombre, precio y la posibilidad de acceder al detalle de cada uno en particular con la ruta "/item/:itemId".
- En la vista del detalle del item se puede observar además de lo anterior una descripción exhaustiva de cada producto, botones para la cantidad a incorporar al carrito y para agregarlo al mismo. De apretarse este último botón se puede acceder a al checkout.
- En el checkout ("/checkout") se expone nuevamente la lista de los productos en el carrito y un formulario para completar los datos del comprador. Retorna notificaciones positivas o de error en el caso que se genere o no la orden de compra.

## Corriendo la App de forma local
En la GIT Bash insertar los siguientes comandos:
```
$ git clone https://github.com/diegoOpel/TrabajoFinalReactOpel.git
$ cd TrabajoFinalReactOpel
$ npm install
$ npm start
```

## Variables de Entorno
Se provee al usuario de este repositorio de un archivo de ejemplo con las variables a utilizar para correr la base de datos. Vea [.env.example] <https://github.com/diegoOpel/TrabajoFinalReactOpel/blob/main/.env.example>

## Autor del proyecto
Diego Opel