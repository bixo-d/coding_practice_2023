# Curso de [React.js](https://youtu.be/rLoWMU4L_qE)

## Requerimientos

- Node.js con npx

## Crear una aplicación con `create-react-app`

Escribir en la consola:

```bash
$ npx create-react-app my-app
```

Si no están instalados, este comando instala: `create-react-app`, `react`, `react-dom`, `react-scripts` y `cra-template`

> **Nota:** si aparece el error:
>
> ```bash
> npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
> ```
>
> La solución es:
>
> ```bash
> $ npm i tar
> ```

El mensaje al finalizar la instalación:

```bash
Success! Created react-course at D:\...\reactjs\react-course
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-course
  npm start

Happy hacking!
```

Si se ejecuta:

```bash
$ cd react-course
$ npm start
```

Se recibe el siguiente mensaje y se abre una página web en el navegador:

```bash
Lifecycle scripts included in react-course@0.1.0:
Compiled successfully!

You can now view react-course in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.203:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Instalar la extensión de `vscode` llamada `Material Icons Theme` de `Philipp Kief`

## Estructura del proyecto

El comando `create-react-app` genera una carpeta, sub-carpetas y archivos con un proyecto básico de `react.js`.

En la carpeta `src` están los archivos con los que se trabajarán para el desarrollo de la aplicación.

```bash
.
├── .gitignore
├── dist
├── node_modules
├── public
├── package.json
├── package-lock.json
├── public
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

El resto del código se genera de manera automatizada. En `public` esta el sitio web que se abrió al ejecutar `npm start` y la carpeta `dist` se genera al ejecutar `npm run build`.

La carpeta `dist` es la distribución de producción.

## ¡Hola Mundo!

Para empezar desde cero, se borra la carpeta `src` y se vuelve a crear. Se crea un archivo llamado `index.js` y se le añade el siguiente contenido:

```javascript
// Bibliotecas que se usarán
// React porque ajá
import React from "react";
// React para la web -> react-dom/client
import ReactDOM from "react-dom/client";

// Se va a trabajar en el div root
// La función createRoot generará el contenido en un contenedor 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
// Al contenedor se le envía el contenido HTML con  el método render
root.render(<h1>¡Hola Mundo!</h1>);
```

## Componentes de React.js

Todo es un Componente en `React.js`, el _navbar_, el _sidebar_, el contenido _main_, cada _post_ (si aplica).

El componente inicial es el contenedor `root`. Sólo puede haber un componente `root`.

> **Nota:** **Excalidraw** para el diseño de la pagina web

## Primer Componente

Un Componente es una Función, por ejemplo:

```jsx
function Greeting() {
  return (
    <div>
      <h1>Este es un componente</h1>
      <p>Lorem 123</p>
    </div>
  );
}
```

Este componente devuelve el HTML que será renderizado en la página. Para usar el componente se llama dentro de un render de las siguientes maneras:

```jsx
root.render(
  <div>
    /* Siempre debe haber un elemento que contenga al resto */
    {Greeting()}
    <Greeting></Greeting>
    <Greeting /> /* Self closing tag */
  </div>
);
```

## JSX

Esto no es `JavaScript` es `JSX`, una especie de mezcla entre `JavaScript` y `HTML` que después será _transpilado_ en `JavaScript`

Para interpretar código JavaScript, se debe colocar entre llaves:

```jsx
function Greeting() {
  const name = 10;

  return <h1>{name + 10}</h1>;
}
```

> **Nota:** Extensión `Prettier - code formatter by Prettier` para formatear JSX mejor que el de `vscode` estándar.

Existe el tag `fragment`, que se puede usar como contenedor, para no añadir tags innecesarios. Se declara así:

```jsx
<>
  <h1>Hola Mundo</h1>
</>
```

## ECMAScript - JavaScript Modules

La mejor forma de organizar el proyecto es crear módulos usando la sintaxis de JavaScript de `import` y `export`. Por ejemplo, se crea un archivo llamado `Greeting.js` y se coloca la función allí:

```jsx
export function Greeting() {
  /* se coloca 'export' delante de 'function' */
  return <h1>Componte de React.js</h1>;
}
```

En `index.js` se importa la función con una sentencia como esta:

```jsx
import { Greeting, UserCard } from "./Greeting";
```

En este caso en particular, también se importa el componente `UserCard` que está en `Greeting.js`. **_El nombre de los componentes, debe empezar por mayúscula_**.

Existe otra forma de importar y es colocar en la **última** línea la sentencia de exportación con la palabra `default`:

```jsx
export default Product;
```

Para importar un módulo de este archivo, el usuario debe colocar el nombre:

```jsx
import Product, { Navbar } from "./Product";
```

En este caso el módulo `Product` está definido en la sentencia `default`, mientras que el módulo `Navbar` está definido con la palabra `export` en el mismo módulo.

## Extensión .jsx

Los archivos de módulos con _jsx_ pueden usar la extensión `.jsx`. Para `create-react-app` es opcional. Para `vite.js` es obligatorio.

## React `props`

`props` es la forma de pasarle parámetros a los componentes. Por ejemplo, a continuación se muestra el componente `Greeting` con la palabra `props` y un uso de demostración:

```jsx
export function Greeting(props) {
  console.log(props);
  return <h1>¡Hola {props.title}</h1>;
}
```

La información se devuelve en las _propiedades_ de los tags, por ejemplo:

```jsx
/* Diferentes formas de pasar parámetros (strings, int, bool y array) */
root.render(
  <div>
    <Greeting title="Mundo!" />
    <Greeting x="bye" />
    <Greeting y={30} />
    <Greeting z={true} />
    <Greeting a={[1, 2, 3]} />
  </div>
);
```

Para usar las propiedades en los componentes se declara como `{props.title}`. En el ejemplo la instrucción generará un `h1` con el texto de la propiedad `title`. Y se generará un string con `¡Hola Mundo!`.

Los `props` también pueden de-estructurarse como en ES6 y tener valores por defecto. Pro ejemplo:

```jsx
export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      ¡Hola {title}, dice {name}
    </h1>
  );
}
```

Como se puede observar, se elimina `props`, y `name` tiene un valor por defecto.

También se puede pasar entre los parámetros una función.

## `PropTypes` y `default props`

`PropTypes` es una biblioteca para manejar y validar tipos de datos en las `propiedades` de los `props`.

Para instalar:

```bash
$ npm i prop-types
```

Se puede definir si para una propiedad dada, se genera un `warning`. Por ejemplo:

```jsx
import PropTypes from "prop-types";

/* Para un objeto Button: */
export function Button({ text }) {
  return <button>{text}</button>;
}

/* Se define el tipo como: */
Button.propTypes = {
  text: PropTypes.string /* Para un "warning" */,
};
```

o un `error`

```jsx
Button.propTypes = {
  text: PropTypes.string.isRequired /* Para un "error" */,
};
```

Hay dos formas de definir valores por defecto para las propiedades, en caso de que no se envíe una:

```jsx
/* En un objeto Button: "User" es el nombre por defecto */
export function Button({ text, name = "User" }) {
  return <button>{text}</button>;
}
```

o bien:

```jsx
/* para el objeto Button */
export function Button({ text, name = "User" }) {
  return <button>{text}</button>;
}

/* Se define la propiedad .defaultProps */
Button.defaultProps = {
  name: "Some User",
};
```

## Estilos

Para definir los estilos se usan las propiedades CSS, pero se definen como objetos JavaScript, por ejemplo:

```jsx
export function TaskCard() {
  return (
    <div style={{ background: "#202020", color: "#fff", padding: "20px" }}>
      <h1 style={{ fontWeight: "lighter" }}>Mi primer tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
```

pero ya que son objetos, también se pueden definir como variables:

```jsx
export function TaskCard() {
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyles = { fontWeight: "lighter" };

  return (
    <div style={cardStyles}>
      <h1 style={titleStyles}>Mi primer tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
```

También se pueden definir en un archivo aparte, por ejemplo, se crea el archivo `Task.css` y se definen los estilos:

```css
.card {
  background-color: #202020;
  color: aliceblue;
}
```

Para utilizar el estilo, se debe importar el archivo `.css` y definir la propiedad den el objeto HTML utilizando la propiedad `className` (se puede usar `class`, pero genera un `warning`):

```jsx
import "./Task.css";

export function TaskCard() {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
```

En `JSX` también se puede utilizar código para definir una propiedad `HTML`. En el siguiente ejemplo, la variable booleana `ready` se usa para definir si un `className` es `bg-green` o `bg-red`, asi como para definir el mensaje a mostrar.

```jsx
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
```

## Tipos de componentes

Hasta ahora, los componentes se han creado utilizando funciones. Existe otra forma de crear componentes usando clases. Por ejemplo:

```jsx
import { Component } from "react";

export class Saludar extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

Utilizar clases es uno de los primeros métodos de desarrollo de componentes de `React.js`.

## Event Handlers

En `React.js` hay manejadores de eventos dependiendo del componente `HTML`.

Se declaran como propiedades de elementos `HTML`. En este caso, el objeto `Button` tiene el _event handler_ `onClick` dentro del tag `button`.

```jsx
export function Button({ text }) {
  //  console.log(text);
  return (
    <button
      onClick={function () {
        console.log("Click on Button");
      }}
    >
      {text}
    </button>
  );
}
```

Si en la función que se le pasa al _event handler_, le pasamos un parámetro, en este se recibe toda la información con respecto al evento. En el caso mostrado, se manda a la consola, el valor del componente `input`.

```jsx
root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Dale click!" />
    <input
      onChange={function (e) {
        console.log(e.target.value);
      }}
    ></input>
  </>
);
```

La misma función y _handler_ en formato ES6 y declarada aparte:

```jsx
const HandlerChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Dale click!" />
    <input onChange={HandlerChange}></input>
  </>
);
```

## `fetch()` API

Datos para probar la conectividad en -> [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

A continuación se presenta un ejemplo de como utilizar la función `fetch()`. `fetch()` va a una `URL` a buscar los datos y devuelve una `Promise<Response>`. El método `then()` recibe la promesa (que contiene la respuesta del servidor) y el método `json()` hace la interpretación de los datos JSON, devolviendo un arreglo de objetos en una `Promise<any>`. El segundo then() recibe el arreglo y se muestra en la consola.

Si hay un error de `fetch()` lo captura el método `catch()` y lo envia a la consola de error.

```jsx
export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      Traer datos
    </button>
  );
};
```

En la actualidad las promesas se manejan con `Async` y `Await`.

## Módulos de terceros y `react-icons`

En la actualidad hay varios módulos de terceros que se pueden utilizar para no tener que desarrollarlos. Es importante investigar primero para ver que módulos se ofrecen en las comunidades y en el mercado (por ejemplo Facebook) antes de empezar a desarrollarlos.

Para este ejemplo, se utilizará el paquete [`react-icons`](https://react-icons.github.io/react-icons/).

El paquete tiene la documentación para la instalación y uso.

Otro paquete con objetos es [Material UI](https://mui.com/)

## Arrays en React.js

[Robohash](https://robohash.org/) es un generador de iconos de usuarios aleatorios.

El manejo de `Arrays` (arreglos) es con las mismas funciones y métodos que en `JavaScript`, por ejemplo `map()`, `reduce()`, `filter()`, `find()`, `sort()`, etc.

Para funcionamiento interno de `React.js`, el sistema requiere el uso de un índice único, una clave (_key_), por ejemplo, en el código siguiente, ese índice único es el mismo índice usado en la iteración del map (`i`).

```jsx
root.render(
  <>
    {users.map((user, i) => {
      return <h1 key={i}>{user.name}</h1>;
    })}
  </>
);
```

El _key_ lo debe tener el primer objeto de la iteración. En el siguiente ejemplo, el _key_ lo tiene el `div`:

```jsx
root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
```

## Hooks de `React.js`

Funciones para hacer operaciones y extender funciones sin utilizar código `JavaScript`.

Documentación y artículos sobre Hooks:

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

[Learn React Hooks – A Beginner's Guide](https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/)

[React Hooks Cheat Sheet: The 7 Hooks You Need To Know](https://www.freecodecamp.org/news/react-hooks-cheatsheet/)

[Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## `useState`

Si se desea cambiar un valor en una página web, con `React.js` no basta con crear una variable `JavaScript`. Es necesario crear un hook. En el siguiente caso se usa `useState()`.

En la declaración de las variables, se obtiene la variable `counter`, que contiene el valor a manipular y la función `setCounter()` que permitirá manipular a `counter`.

```jsx
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
    </div>
  );
};
```

Otro ejemplo, pero usando un `input` y texto:

```jsx
const Counter = () => {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <input onChange={(e) => setMsg(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: '${msg}'`);
        }}
      >
        Save
      </button>
    </div>
  );
};
```

## `useEffect()`

`useEffect` es un Hook que permite sincronizar un componente con un sistema externo. Se dispara después de cada render, pero puede ser configurado para que se ejecute cuando cambien ciertos parámetros.

En el siguiente ejemplo se declaran 2 `useState()` y un `useEffect()`. El `useEffect()` está configurado para dispararse cuando se actualice `counter` (además de cuando cargue la página).

```jsx
const Counter = () => {
  const [msg, setMsg] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]); /* arreglo de configuración del useEffect() */

  return (
    <div>
      <input onChange={(e) => setMsg(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: '${msg}'`);
        }}
      >
        Save
      </button>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};
```

Hay 3 formas de configurar el `useEffect()`:

1. Que no esté el arreglo de configuración, lo que hace que el `useEffect()` se dispare cada vez que se ejecuta el `render`. Esto se usa poco, porque cualquier acción en la página dispararía el `useEffect()`.
2. Con un arreglo vacío, lo que hace el `useEffect()` se ejecute solo una vez al cargarse la página.
3. Con el arreglo con variables o estados, que hace que el `useEffect()` se dispare cuando estas cambian.

En el caso del ejemplo, está configurado para que se dispare cuando cambia el estado `counter`.

Nueva documentación de [`useEffect`](https://beta.reactjs.org/reference/react/useEffect).

## Primer Aplicación en `React` con `Vite.js`

Para crear una aplicación con `Vite.js` se ejecuta el siguiente comando en la consola:

```bash
$ npm create vite
```

Si las dependencias no están instaladas, las instalará y luego abrirá una interfaz de línea de comandos interactiva.

A continuación hará las siguientes consultas:

1. Cuál es el nombre del proyecto. Ofrece un nombre por defecto.
2. Qué framework se desea utilizar (`Vanilla`, `Vue`, `React`, `Preact`, `Lit`, `Svelte`, `Others`).
3. Que variante se desea usar(`JavaScript`, `TypeScript`, `JavaScript + SWC`, `TypeScript + SWC`).

Luego creará la carpeta y colocará los _scripts_ básicos dentro de ella. **NO** baja ninguna dependencia, por lo que es necesario entrar a la carpeta y ejecutar:

```bash
$ nmp install
```

Ya instaladas las dependencias, se puede ejecutar el servidor de desarrollo con el siguiente comando:

```bash
$ npm run dev
```

Para generar la distribución del proyecto, se ejecuta:

```bash
$ npm run build
```

Con `Vite.js` es obligatorio utilizar archivos `.jsx`

> Extensiones que recomienda el autor del tutorial:
>
> Garantizar que `emmett` esté configurado para trabajar con archivos `.js` y `.jsx`
>
> [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Snippets de JavaScript y React
>
> [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu) - Un tema con más contraste

## Mostrar lista de tareas

Para el ejemplo, se creó el archivo `tasks.js` con un arreglo de objetos de ejemplo.

Se requiere un `useState()` para el manejo de los datos. Se requiere un `useEffect()` para cargar en la variable de estado, los datos desde el archivo.

Si se presenta un conflicto con variables y variables importadas, se puede utilizar un _alias_ de la siguiente manera:

```jsx
/* tasks se importa como (as) data */
import { tasks as data } from "./task";
```

## Añadir tareas desde un formulario

Para añadir tareas, se crea un formulario que tiene los campos con las entradas para los datos. En este componente (`TaskForm`) el usuario entra la información de la nueva tarea y la crea al apretar el botón `Guardar`.

El problema, es que el acceso a los datos está en `TaskList` y `TaskForm` no puede acceder a ellos, por lo que se hace necesario cambiar el acceso a los datos a `App` y de allí suministrarlos a los componente que están por debajo de `App` en el árbol de objetos.

Una vez movido el acceso a los datos en `App`, es necesario bajar la información a los componentes. Esto se hace con los `props`. A `TaskList` se le pasa el arreglo `tasks` y a `TaskForm` se le pasa la función `createTask`.

En `TaskForm`, con el uso de un `useState()` toma los datos del formulario, hasta este punto solo el `title`, y se los pasa a la función `createTask`.

## Separar componentes

`TaskList`, que es un componente de `App`, y despliega el arreglo de tareas, puede tener otro componente, `TaskCard`, que tiene tareas individualizadas.

A `TaskForm` se le añade otro campo para recibir la descripción de la tarea. Se debe modificar `createTask` para almacenar y manipular esa información.

`TaskList` debe darle a `TaskCard` el `key` requerido por `React` para el control de las iteraciones.

Se crea la carpeta `components` donde se colocan los archivos `jsk` de Tasks para organizar la aplicación. También se crea la carpeta `data` para colocar `tasks.js`.

## Eliminar Tarea

Para eliminar una tarea, se añade un `button` eliminar en `TaskCard`. A este `button` se le adjuntara una función a la propiedad `onClick`, que procederá a eliminar la tarea.

`React` requiere que se genere un nuevo arreglo, sin la tarea eliminada. Esto se logra usando el método `filter` en `tasks`, pidiendo solo las iteraciones distintas a la tarea que se está eliminando. para esta operación se usa el `id`. Esto devuelve un arreglo sin la tarea a eliminar. Y se llama a `setTasks()` con este nuevo arreglo para eliminar efectivamente la tarea. Se presenta la función `deleteTask` en `App`.

```jsx
const deleteTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId));
};
```

Esta función (`deleteTask`) se le debe pasa a `TaskList` y de allí a `Task`. `TaskCard` le pasa el `task.id` a `deleteTask` cuando se llama a `onClick`. `deleteTask` se debe colocar dentro de una función anónima para que solo se ejecute cuando se presiona el `button` "Eliminar Tarea".

```jsx
function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
```

Este proceso elimina las tareas del arreglo de tareas en memoria.

## Crear Contexto

En el ejemplo se observa que es necesario que para que todos los objetos tengan acceso a los datos en `tasks.js`, es necesario que desde el componente principal (`App`), se pasen estructuras y funciones hasta el último componente (`TaskCard`). Esto se denomina _props drilling_ y es necesario que el desarrollador haga manejo correcto de estas dependencias.

Una forma de evitar esto, es mover toda la lógica de los datos a un objeto que puedan acceder los objetos que lo requieran. Esto se hace con ayuda de la `Context API`

> [_Context Documentation_](https://reactjs.org/docs/context.html)
>
> [_Props Drilling vs Context API: Which One Is the Best_](https://medium.com/geekculture/props-drilling-v-s-context-api-which-one-is-the-best-75c503d21a65)

## `useContext()`

Para hacer uso de un _contexto_, se mueven las funciones para el manejo de los datos a un nuevo archivo: `TaskContext.jsx`, que quedaría así:

```jsx
/* Se añade la dependencia createContext para hacer uso de la Context API */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

/* Se crea una variable de contexto 'TaskContext' */
export const TaskContext = createContext();

/* Y es requerido definir un 'ContextProvider', en este caso 'TaskContextProvider', 
   que contendrá los objetos y funciones que se requerirán en la aplicación>.
   Estas son: la variable de estado 'tasks' y su función 'setTasks()' 
   y las funciones 'createTask()' y 'deleteTask()' */
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  /* En la propiedad value, se pasa un objeto con los elementos requeridos
   por los componentes, i.e., 'tasks', 'deleteTask' y 'createTask'.

   El contenido del tag '<TaskContext.Provider>' es '{props.children}' donde
   se despegarán los objetos de la aplicación*/
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
```

Los componentes que hagan uso del contexto deben importar la función 'useContext()'. También deben importar el contexto, en este caso 'TaskContext'

```jsx
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
```

En cada componente se trae el objeto o función que se requerirá desestructurando el retorno de la función 'useContext()'

En 'TaskForm.jsx'

```jsx
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)
  ...
```

En 'TaskList.jsx'

```jsx
function TaskList() {
  const { tasks } = useContext(TaskContext);
  ...
```

En 'TaskCard.jsx'

```jsx
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  ...
```

Además de borrar de 'App.jsx' todo lo que se movió a 'TaskContext.jsx', el resto de la aplicación queda igual.

## TailwindCSS

Tailwind es un Framework CSS que ayuda a desarrollar websites modernos. Hay una [guía](https://tailwindcss.com/docs/guides/vite) específica para Vite, que se debe revisar para garantizar que se están siguiendo los pasos más actualizados. Son 6 pasos:

1. **Crea tu proyecto**

   El proyecto ya está instalado.

2. **Instala Tailwind CSS**

   Se ejecutan los siguientes comandos:

   ```bash
   $ npm install -D tailwindcss postcss autoprefixer
   $ npx tailwindcss init -p
   ```

3. **Configura tus plantillas de rutas**

   En el archivo `tailwind.config.cjs`, que se genera con la instalación de Tailwind, se debe añadir lo siguiente en `content`:

   ```cjs
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
   ```

4. **Añade las directivas de Tailwind a tu CSS**

   Se deben añadir al archivo `./src/index.css` las siguientes líneas:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Inicia el proceso de construcción (build)**

   Se ejecuta el siguiente comando:

   ```bash
   $ npm run dev
   ```

6. **Empieza a utilizar Tailwind en tu proyecto**

   Algunos ejemplos de clases de Tailwind usadas en este proyecto:

   En `App.jsx`

   ```jsx
   <main className="bg-zinc-900 h-screen">
     <div className="container mx-auto p-10">
       <TaskForm />
       <TaskList />
     </div>
   </main>
   ```

   En `TaskCard.jsx`

   ```jsx
   <div className="bg-gray-800 text-white p-4 rounded-md">
     <h1 className="text-xl font-bold capitalize">{task.title}</h1>
     <p className="text-gray-500 text-sm">{task.description}</p>
     <button
       className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
       onClick={() => deleteTask(task.id)}
     >
       Eliminar tarea
     </button>
   </div>
   ```

## Despliegue _Github Pages_

Una vez desarrollada y probada la aplicación, se puede publicar la versión de producción. En este caso, es contenido estático, por lo que se puede publicar en cualquier servicio de despliegue de contenido estático. Aquí se usará _GitHub Pages_.

Se crea el repositorio en GitHub. Al crear el repositorio, GitHub te da las instrucciones de como crear el repositorio desde la línea de comandos y subir el repositorio a GitHub. En el siguiente listado `bixo-d` es el usuario y `react-tasks-application` el nombre del repositorio.

```bash
$ echo "# react-tasks-application" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/bixo-d/react-tasks-application.git
$ git push -u origin main
```

Para facilitar el despliegue, existe un paquete de `npm` que se llama [`gh-pages`](https://www.npmjs.com/package/gh-pages). Para instalarlo, ejecutar:

```bash
$ npm install gh-pages --save-dev
```

A continuación se añade el comando `deploy` a la sección de `Scripts` de `package.json`:

```json
"scripts": {
  ...
  "deploy": "gh-pages -d dist"
}
```

También Vite debe ser configurado para trabajar con _GitHub Pages_. Vite tiene [instrucciones particulares](https://vitejs.dev/guide/static-deploy.html#github-pages) para _GitHub Pages_ y se siguen a continuación.

Se modifica `vite.config.js` para que `base` sea:

```js
base: "/react-tasks-application/";
```

En la carpeta raíz del proyecto, se crea el archivo `deploy.sh` y se le coloca el siguiente contenido:

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bixo-d/react-tasks-application.git main:gh-pages
#### LA LÍNEA ANTERIOR SE DESCOMENTÓ Y SE LE COLOCÓ <USERNAME>/<REPO>

cd -
```

Hechas estas configuraciones, se pueden ejecutar los siguientes comandos para el despliegue del sitio:

```bash
$ npm run build
$ npm run deploy
```

Con esto la aplicación se desplegará en el sitio de GitHub en algunos segundos. En la página de `Settings->Pages` del repositorio se encuentra el enlace a la dirección del sitio web.
