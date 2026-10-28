# Privacidad y seguridad

GestiónVerde considera información operacional y potencialmente personal, por lo que el diseño aplica **mínimo privilegio** y **mínimo dato necesario**.

## Clasificación de datos

| Tipo de dato | Ejemplo | Tratamiento esperado |
|---|---|---|
| **Público** | avisos generales, información educativa, indicadores agregados | Puede mostrarse sin identificar personas |
| **Operacional** | estado de jornada, ruta, incidencias | Acceso según rol |
| **Personal** | nombre, teléfono, correo | Acceso restringido y solo cuando sea necesario |
| **Ubicación privada** | dirección y coordenadas de vivienda | No debe exponerse públicamente |
| **Historial individual** | retiros o solicitudes de una vivienda | Solo usuario autorizado y personal con permisos |
| **Identificadores internos** | ID de usuario o registros técnicos | No destinados a exposición pública |

## Matriz simplificada de acceso

| Información | Admin | Jefatura | Supervisor | Chofer | Recolector | Vecino |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Configuración y permisos | ✅ | Limitado | ❌ | ❌ | ❌ | ❌ |
| Planificación de jornadas | ✅ | ✅ | Consulta | Propia | Propia | ❌ |
| Avance operacional | ✅ | ✅ | ✅ | Propio | Propio | ❌ |
| Registro en terreno | Consulta | Consulta | Consulta | Según función | ✅ | ❌ |
| Datos de otros vecinos | Restringido | Restringido | Según necesidad | ❌ | Según jornada | ❌ |
| Historial propio del vecino | ❌ | Según necesidad | ❌ | ❌ | ❌ | ✅ |

## Principios aplicados

1. **Autenticación:** cada usuario debe identificarse antes de acceder a funciones privadas.
2. **Autorización por rol:** estar autenticado no implica acceso total.
3. **Mínimo privilegio:** cada rol recibe únicamente permisos necesarios para su trabajo.
4. **Mínimo dato necesario:** evitar mostrar datos personales cuando un dato agregado es suficiente.
5. **Trazabilidad:** cambios relevantes deberían quedar asociados a usuario, fecha y acción.
6. **Separación público/privado:** información de vecinos y operación interna no debe aparecer en vistas públicas.
7. **Sin secretos en repositorios públicos:** credenciales, claves y configuraciones privadas no forman parte de esta publicación.

## Riesgos considerados

- exposición accidental de direcciones o coordenadas;
- acceso excesivo por una mala asignación de roles;
- publicación de información operacional privada;
- pérdida de registros por conectividad inestable;
- cambios sin trazabilidad;
- mezcla entre información agregada e información individual.

## Enfoque de portafolio

Este repositorio muestra decisiones de análisis y diseño. No contiene datos personales reales, credenciales ni configuraciones internas de una institución.