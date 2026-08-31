# Around The U.S. — React

## Descripción

Este proyecto es la migración a **React** de la aplicación "Around The U.S.", desarrollada como parte del bloque de React del programa de desarrollo web de TripleTen.

La aplicación previa (JavaScript + TypeScript con POO y consumo de API REST) se está transformando progresivamente al paradigma declarativo y basado en componentes de React. En esta primera etapa de la migración se transfirió el marcado HTML a JSX, se conectaron los estilos existentes, se construyó el árbol de componentes y se implementó el sistema de ventanas emergentes (popups) usando estado de React (`useState`) en lugar de manipulación directa del DOM.

## Tecnologías utilizadas

- React 19 + TypeScript
- Vite como bundler y servidor de desarrollo
- CSS3 con metodología BEM (estilos heredados del proyecto POO)
- ESLint (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- Git y GitHub

## Funcionalidades implementadas

- Renderizado del layout completo (`Header`, `Main`, `Footer`) a partir de componentes funcionales
- Renderizado dinámico de tarjetas (`Card`) a partir de un arreglo de datos ficticios tipado (`CardData[]`), mediante `.map()`
- Sistema de ventanas emergentes (`Popup`) controlado por estado (`useState`), sin uso de `document.querySelector` ni clases CSS manipuladas manualmente
- Ventana emergente de edición de perfil (`EditProfile`)
- Ventana emergente de cambio de avatar (`EditAvatar`)
- Ventana emergente de creación de tarjeta (`NewCard`)
- Ventana emergente de imagen ampliada (`ImagePopup`), sin título, mostrando la imagen y el nombre de la tarjeta seleccionada
- Cierre de ventanas emergentes mediante el botón de cierre (×)

> Los formularios (editar perfil, nuevo lugar, cambiar avatar) y las acciones de "me gusta"/eliminar tarjeta se muestran en pantalla pero **aún no están conectados a lógica de envío o al servidor** — esto se implementará en el siguiente sprint.

## Arquitectura del proyecto

El proyecto sigue el paradigma de **componentes funcionales de React**, cada uno con responsabilidad única:

- **`App`** — componente raíz; ensambla `Header`, `Main` y `Footer`.
- **`Header`** — muestra el logotipo de la aplicación.
- **`Footer`** — muestra el pie de página con el copyright.
- **`Main`** — componente central; contiene el perfil de usuario, la lista de tarjetas y gestiona el estado `popup` que controla qué ventana emergente se muestra.
- **`Card`** — recibe una tarjeta (`CardData`) y la función `handleCardClick` por props; renderiza una tarjeta individual y dispara la apertura de `ImagePopup` al hacer clic en la imagen.
- **`Popup`** — componente reutilizable base para todas las ventanas emergentes; recibe `title` (opcional), `children`, `isOpen` y `onClose` por props. Si no recibe `title`, aplica el estilo de imagen ampliada.
- **`ImagePopup`** — contenido de la ventana emergente de imagen (recibe `name` y `link`).
- **`EditProfile`**, **`EditAvatar`**, **`NewCard`** — formularios (sin lógica de envío todavía) que se renderizan como `children` dentro de `Popup`.

La comunicación entre componentes se realiza mediante **props**, incluyendo funciones callback (`handleCardClick`, `handleOpenPopup`, `handleClosePopup`, `onClose`), manteniendo cada componente desacoplado de la lógica de sus padres — el mismo principio de acoplamiento débil aplicado en el proyecto de POO, ahora expresado con el modelo de props/estado de React.

### Estructura de carpetas

web-around/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ ├── App.tsx
│ │ ├── Header/
│ │ │ └── Header.tsx
│ │ ├── Footer/
│ │ │ └── Footer.tsx
│ │ └── Main/
│ │ ├── Main.tsx
│ │ ├── Card/
│ │ │ └── Card.tsx
│ │ └── Popup/
│ │ ├── Popup.tsx
│ │ ├── EditProfile/
│ │ │ └── EditProfile.tsx
│ │ ├── EditAvatar/
│ │ │ └── EditAvatar.tsx
│ │ ├── NewCard/
│ │ │ └── NewCard.tsx
│ │ └── ImagePopup/
│ │ └── ImagePopup.tsx
│ ├── blocks/ # estilos BEM heredados del proyecto POO
│ ├── images/
│ ├── vendor/ # normalize.css y fonts.css
│ ├── types/
│ │ └── types.ts # CardData, PopupConfig, HandleCardClick
│ ├── index.css
│ └── main.tsx
├── index.html
├── vite.config.ts
└── package.json

## Lo aprendido

- Transformación de HTML a JSX y adaptación de sintaxis (`className`, atributos en camelCase, cierre de etiquetas)
- Componentización: dividir una interfaz monolítica en componentes funcionales reutilizables
- Manejo de estado con el hook `useState` para controlar la visibilidad de elementos, reemplazando la manipulación directa del DOM
- Renderizado condicional (`{popup && (...)}`, operador ternario) para mostrar u ocultar elementos según el estado
- Renderizado de listas con `.map()` y la importancia de la prop `key`
- Paso de datos y funciones entre componentes mediante props, incluyendo tipado explícito con `type` en TypeScript
- Reutilización de tipos entre proyectos (`CardData` heredado del proyecto POO)
- Diferencias de configuración entre un proyecto compilado manualmente con `tsc` y uno gestionado por Vite (HMR, `tsconfig.app.json`, alias de rutas)

## Estado del proyecto

- Migración de marcado y estilos a React completada
- Árbol de componentes construido según el brief
- Sistema de ventanas emergentes funcional mediante estado de React
- Tarjetas renderizadas con datos ficticios (`CardData[]`)
- Pendiente para el próximo sprint: conexión de formularios, validación, y funcionalidad de "me gusta"/eliminar tarjeta

## Autor

Dara Rangel
