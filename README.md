# Gestor de Tareas

  
Aplicación web para CRUD de tareas, desarrollada como parte de una prueba técnica. Utiliza una arquitectura basada en frontend (React), backend (Node.js + Express) y base de datos NoSQL (Firebase Firestore).
  

---

  

## Arquitectura

  

```

React (Frontend) → API REST (Node + Express) → Firebase Firestore (DB)

```

  

-  **Frontend**: React con componentes reutilizables (`SaveTask`, `TaskCard`) y consumo de API por medio de `axios`.

-  **Backend**: API REST con Node + Express, operaciones CRUD expuestas para tareas.

-  **Base de Datos**: Firestore de Firebase, utilizada para persistencia de tareas.

  

---

  

## Instalación y Ejecución

  

###  Requisitos

- Node.js >= 20

- npm

- Cuenta de Firebase + proyecto configurado

  

### Instalación de dependencias

#### Backend

```bash

cd  backend

npm  install

```

  

#### Frontend

```bash

cd  frontend

npm  install

```

  

### Configurar variables de entorno

  

#### Backend

```env

FIREBASE_PROJECT_ID=your-project-id

FIREBASE_CLIENT_EMAIL=your-service-account-email

FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----\n"

```

  

#### Frontend

```env

VITE_TASK_API_URL=url_del_servicio_del_backend

```

  
  

### Ejecutar aplicación

  

#### Backend

```bash

npm  run  dev

```

  

#### Frontend

```bash

npm  run  dev

```

  

---

  

## Decisiones Técnicas

  

- Se eligió **React** para el frontend por su flexibilidad y experiencia previa.

- El backend usa **NodeJS con Express** por su simplicidad para exponer APIs RESTful rápidamente.

- Como base de datos se usó por recomendación **Firebase Firestore** al ser NoSQL, gratuito y fácil de integrar con Node.

- Las tareas se modelaron con campos `title`, `description`, `status`, que fueron los campos necesarios indicados y `createdAt` para ordenar las tareas según la fecha de creación

- Se organizaron los componentes y las rutas del backend para mantener la solución modular y escalable.

  

---

  

## Enfoque Scrum (Desarrollo Ágil)

  

Si este proyecto se desarrollara en un equipo bajo metodología **Scrum**, lo abordaría de la siguiente forma:

  

-  Realizaría Sprint Planning diviviendo las historias de usuario en tareas técnicas claras similar a como se hizo en el backlog.

-  Luego con el backlog priorizado en GitHub Projects o Jira o cualquier otra herramientas se estimaría en horas o puntos.

-  Realizaría reuniones diarias breves para sincronizar progreso y resolver bloqueos.

-  Realizaría sprint review al finalizar el dicho sprint en este caso pueden ser semanales.

-  Plantearía retrospectivas para mejorar el proceso y detectar oportunidades de automatización (tests, CI/CD).

-  Priorizaríamos una entrega funcional temprana (MVP) y luego mejoras visuales o no funcionales.
 
  

---

  

## Tiempo dedicado

  

Aproximadamente **15 horas** distribuidas en diseño, desarrollo, pruebas y documentación.

  
---

## Demo

  

Se puede ver la aplicación funcionando en el siguiente enlace: https://todo-app-elias.netlify.app/