# Arquitectura y flujo de GestiónVerde

## Objetivo

La arquitectura funcional separa el sistema en áreas según responsabilidad, evitando que todos los usuarios tengan acceso a toda la información.

## Componentes principales

```mermaid
flowchart TD
    U[Usuarios] --> AUTH[Autenticación y permisos]
    AUTH --> PV[Portal Vecinal]
    AUTH --> CM[Centro de Mando]
    AUTH --> OT[Operación en Terreno]
    AUTH --> ADM[Administración]

    PV --> DATA[(Datos)]
    CM --> DATA
    OT --> DATA
    ADM --> DATA

    DATA --> REP[Informes e indicadores]
```

## Flujo de una jornada

```mermaid
flowchart LR
    A[Crear jornada] --> B[Asignar ruta y equipo]
    B --> C[Iniciar recorrido]
    C --> D[Registrar viviendas]
    D --> E[Registrar incidencias]
    E --> F[Supervisar avance]
    F --> G[Cerrar jornada]
    G --> H[Generar informe]
```

## Separación por rol

- **Administrador:** configuración, permisos y auditoría.
- **Jefatura:** planificación y gestión operacional.
- **Supervisor:** seguimiento y revisión de incidencias.
- **Chofer:** ruta y navegación.
- **Recolector:** registro de resultados en terreno.
- **Vecino:** información, solicitudes e historial propio autorizado.

## Principios de diseño

1. Mínimo privilegio.
2. Mínimo dato necesario.
3. Separación entre información pública y privada.
4. Trazabilidad de eventos importantes.
5. Operación tolerante a conectividad intermitente.
6. Datos estructurados para generar indicadores e informes.

> Documento de arquitectura conceptual para portafolio. No describe infraestructura productiva de una institución real.