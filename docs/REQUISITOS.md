# Requisitos e historias de usuario

Este documento resume requisitos funcionales representativos de GestiónVerde.

| ID | Actor | Requisito | Historia de usuario | Criterios de aceptación clave | Sensible |
|---|---|---|---|---|---|
| **RF-01** | Jefatura | Gestionar jornadas | Como jefatura, quiero crear una jornada asignando ruta y equipo para organizar la operación. | Fecha, ruta y equipo obligatorios; validación antes de guardar. | Sí |
| **RF-02** | Jefatura | Aprobar registros | Como jefatura, quiero revisar solicitudes de acceso para autorizar usuarios válidos. | Ver pendientes; aprobar/rechazar; registrar decisión. | Sí |
| **RF-03** | Supervisor | Supervisar recorrido | Como supervisor, quiero ver el avance de una jornada para detectar atrasos o incidencias. | Ver estado, progreso e incidencias sin modificar permisos. | Sí |
| **RF-04** | Chofer | Consultar ruta | Como chofer, quiero consultar mi ruta asignada para realizar el recorrido correctamente. | Solo jornada asignada; puntos ordenados; navegación disponible. | Sí |
| **RF-05** | Recolector | Registrar retiro | Como recolector, quiero registrar el resultado de una vivienda para mantener la jornada actualizada. | Realizada, sin retiro o incidencia; fecha y hora; asociación a jornada. | Sí |
| **RF-06** | Vecino | Realizar solicitud | Como vecino, quiero enviar una solicitud para comunicar una necesidad relacionada con el servicio. | Crear solicitud; obtener estado; no acceder a datos de terceros. | Sí |
| **RF-07** | Vecino | Consultar historial | Como vecino, quiero ver mi historial autorizado para conocer atenciones anteriores. | Solo información propia; fecha y estado visibles. | Sí |
| **RF-08** | Administrador | Gestionar permisos | Como administrador, quiero administrar roles y permisos para controlar el acceso al sistema. | Solo usuarios autorizados; cambios auditables. | Sí |

## Ejemplo detallado

### RF-05 — Registrar resultado de vivienda

**Actor:** Recolector

**Historia de usuario**  
Como recolector, quiero registrar si una vivienda realizó entrega, estuvo ausente o presentó una incidencia, para que la jornada quede correctamente registrada.

**Criterios de aceptación**

1. El recolector debe estar autenticado.
2. Solo puede registrar puntos pertenecientes a su jornada asignada.
3. Puede seleccionar `Realizada`, `Sin retiro` o `Incidencia`.
4. El sistema registra fecha y hora.
5. El registro queda asociado a la vivienda y jornada correspondiente.
6. Si no hay conexión, el evento puede quedar pendiente para sincronización posterior.

**Datos involucrados**

- dirección;
- coordenadas;
- observaciones operacionales;
- fecha y hora;
- identificador de la jornada.

## Criterio de calidad

Los requisitos deben ser verificables. Un criterio de aceptación debe permitir responder claramente si la funcionalidad cumple o no cumple lo esperado.