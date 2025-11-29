# Rick & Morty Directory – Angular + Firebase

Aplicación web desarrollada en **Angular** que consume la **API pública de Rick and Morty** para mostrar un directorio de personajes, su detalle individual y una sección de favoritos.  
El proyecto está desplegado en **Firebase Hosting**.

 **URL pública:**  
https://rick-morty-directory.web.app  

---

##  Reto elegido y alcance (supuestos incluidos)

Se desarrolló un **Directorio de Personajes** con navegación por rutas, vista de detalle y sistema de favoritos.

### Funcionalidades incluidas:
- Listado de personajes.
- Navegación por rutas dinámicas.
- Vista de detalle de personaje.
- Sección de favoritos.
- Estados de carga.
- Despliegue en Firebase Hosting.

### Supuestos:
- La API es pública y no requiere autenticación.
- Los datos no se persisten en base de datos (favoritos en memoria).
- El sistema funciona como Single Page Application (SPA).

---

##  Arquitectura y dependencias

### Arquitectura:
- Arquitectura **Standalone de Angular** (sin NgModules).
- Organización por capas:
  - `pages/` → vistas principales
  - `services/` → consumo de API y lógica de negocio
  - `app.routes.ts` → definición de rutas
  - `app.config.ts` → configuración principal

### Rutas principales:
- `/` → Listado de personajes  
- `/character/:id` → Detalle de personaje  
- `/favorites` → Personajes favoritos  

### Dependencias principales:
- Angular (Standalone)
- TypeScript
- Firebase Hosting
- Rick & Morty API

---

##  Modelo de datos

Se utiliza directamente el modelo de la API:

```ts
Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}
```

---

##  Estado y navegación

- El estado se maneja a nivel de componentes mediante propiedades internas.
- La navegación se implementa con **Angular Router**.
- Se utilizan **rutas dinámicas** para mostrar el detalle del personaje.
- Estados visuales contemplados:
  - Cargando
  - Vista vacía
  - Vista con datos

---

##  Decisiones técnicas (justificadas)

- Uso de **Angular Standalone** para reducir complejidad.
- Consumo directo de la **API pública** sin backend intermedio.
- Uso de **Firebase Hosting** por su facilidad de despliegue.
- Separación de componentes por páginas.
- Estilos por componente con encapsulación de Angular.

---

##  Escalabilidad y mantenimiento

El proyecto puede crecer agregando:

- Persistencia en **Firestore**.
- Autenticación con **Firebase Auth**.
- Lazy loading de rutas.
- Manejo global de estado con **NgRx o Signals**.

Buenas prácticas:

- Código desacoplado por servicios.
- Migrable a backend propio si el sistema crece.

---

##  Seguridad y validaciones

- No se almacenan llaves ni secretos en el repositorio.
- Solo se consumen datos públicos.
- Firebase configurado exclusivamente como **Hosting**.
- Preparado para integración futura de **Guards de seguridad**.
- Validaciones básicas en la navegación.

---

##  Rendimiento

- Consumo eficiente de la API REST.
- Carga bajo demanda por vista.
- Paginación basada en la API.
- Llamadas HTTP controladas por servicio.
- Mejora futura con **virtual scroll**.

---

##  Accesibilidad

- Botones accesibles con texto visible.
- Contraste adecuado.
- Navegación por teclado funcional.
- Estructura semántica básica en HTML5.

---

##  Uso de IA

Se utilizó IA para:

- Definir la arquitectura inicial.
- Generar el esqueleto de componentes.
- Proponer rutas y consumo de API.

Se reescribió manualmente:

- Lógica de favoritos.
- Lógica de detalle.

Riesgos detectados:

- Posible sobreuso de dependencias.
- Lógica incompleta generada automáticamente.

Mitigación:

- Validación manual.
- Pruebas de ejecución constantes.

Enfoque de prompts:

- “Generar estructura Angular standalone”
- “Consumir API REST con HttpClient”

Lecciones:

- La IA acelera el desarrollo, pero no reemplaza la validación humana.

Siguientes mejoras con IA:

- Generación de pruebas unitarias.
- Optimización de rendimiento.

---

##  Limitaciones y siguientes pasos

### Limitaciones

- Los favoritos no se persisten en base de datos.
- No hay autenticación.
- No existe buscador por nombre.

### Siguientes pasos

- Integrar **Firestore**.
- Implementar **Firebase Auth**.
- Buscador por personajes.
- Pruebas unitarias.
- Optimización de paginación.

---
## Instalación y ejecución

```bash
git clone https://github.com/RobertoPadilla-dev/rick-morty-directory.git
cd rick-morty-directory
npm install
ng serve -o
```


## Build de produccion
```bash
ng build
```


## Despliegue a Firebase
```bash
firebase deploy
```


## Buenas prácticas aplicadas

- Sin credenciales en el repositorio.
- Estados claros (cargando / vacío).
- Arquitectura standalone.
- SPA correctamente configurada en Firebase.
- Tipado estricto con TypeScript.


## Criterios de evaluación cubiertos

- Solución & UX
- Código & Arquitectura
- Uso de IA documentado
- Entrega & Despliegue
- Buenas prácticas


## Autor

- Desarrollado por Roberto Padilla