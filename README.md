# Trabajo Práctico Integrador III - Gestión de Tareas

Este proyecto es el frontend de una aplicación de gestión de tareas (To-Do list) desarrollada con **React** y **Vite**. La aplicación consume una API REST (proporcionada por la cátedra) para gestionar la autenticación de usuarios y un CRUD completo de tareas.

Este proyecto fue realizado como el Trabajo Práctico Integrador III para el **Instituto Politécnico Formosa**.

## 🛠️ Tecnologías Utilizadas

* **React 18+:** Para la construcción de la interfaz de usuario.
* **Vite:** Como empaquetador y servidor de desarrollo.
* **React Router DOM:** Para el manejo de rutas públicas y privadas.
* **Tailwind CSS:** Para todo el diseño y estilizado de la aplicación.
* **Custom Hooks:** Implementación de `useForm` para la gestión de estados en formularios.

## 📦 Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local.

### 1. Requisitos Previos

* Node.js (v18 o superior).
* Tener el servidor **Backend** (la API REST proporcionada por la cátedra) ejecutándose localmente, ya que este proyecto es solo el frontend.

### 2. Clonar el Repositorio

```bash
# Reemplaza la URL por la de tu repositorio de GitHub
git clone [https://github.com/tu-usuario/trabajo-practico-integrador-2.git](https://github.com/tu-usuario/trabajo-practico-integrador-2.git)
cd trabajo-practico-integrador-2

3. Instalar Dependencias
Ejecuta el siguiente comando para instalar todos los paquetes necesarios (como React, React Router, Tailwind, etc.).

Bash

npm install
4. Configuración del archivo .env
Este proyecto no requiere un archivo .env en este momento, ya que las URL de la API (ej: http://localhost:3000/api/...) están escritas directamente en el código fuente de las funciones fetch.

(Nota: Si se quisiera refactorizar a futuro, se podría crear un archivo .env con una variable VITE_API_URL=http://localhost:3000/api y modificar las funciones fetch para usar import.meta.env.VITE_API_URL).

5. Ejecutar el Proyecto
Una vez que el backend esté corriendo y las dependencias estén instaladas, inicia el servidor de desarrollo de Vite:

Bash

npm run dev
La aplicación estará disponible en http://localhost:5173 (o el puerto que indique la terminal de Vite).

📁 Estructura del Proyecto
La estructura de carpetas sigue las convenciones modernas de React y los requisitos de la consigna :

src/
├── components/
│   ├── Footer.jsx
│   ├── Loading.jsx
│   └── Navbar.jsx
│
├── hooks/
│   ├── useForm.js
│   └── useCounter.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── ProfilePage.jsx
│   ├── RegisterPage.jsx
│   └── TasksPage.jsx
│
├── router/
│   ├── AppRouter.jsx
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── App.jsx
├── index.css
└── main.jsx