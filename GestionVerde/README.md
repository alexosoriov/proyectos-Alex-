# 🌱 GestiónVerde

> Proyecto de portafolio orientado a la digitalización, trazabilidad y gestión de operaciones de reciclaje y recolección.

**Estado:** Prototipo / propuesta de piloto  
**Enfoque:** Gestión operativa, terreno, trazabilidad, seguridad y experiencia de usuario  
**Código fuente:** No incluido en esta presentación pública

---

## 🎯 Problema

Muchas operaciones de recolección dependen de registros manuales, coordinación dispersa y poca visibilidad sobre lo que ocurre durante la jornada.

Esto puede generar:

- poca trazabilidad de retiros y ausencias;
- dificultad para conocer el avance real de una ruta;
- incidencias sin registro estructurado;
- información repartida en distintos medios;
- reportes lentos o incompletos;
- poca visibilidad para supervisión y toma de decisiones.

## 💡 Solución propuesta

GestiónVerde centraliza la operación en una plataforma con acceso según rol.

**Flujo general:**

`Planificación → Ruta → Operación en terreno → Registro → Seguimiento → Cierre → Informe`

## 👥 Actores principales

| Actor | Responsabilidad principal |
|---|---|
| **Administrador** | Configuración, usuarios, permisos y auditoría |
| **Jefatura** | Jornadas, rutas, viviendas, avisos, usuarios e informes |
| **Supervisor** | Seguimiento de operación e incidencias |
| **Chofer** | Ruta, navegación y posición operacional |
| **Recolector** | Registro de retiros, ausencias e incidencias |
| **Vecino** | Solicitudes, avisos e historial autorizado |

## ✨ Funcionalidades

- Gestión de jornadas de recolección.
- Administración de rutas y sectores.
- Registro de viviendas y puntos de atención.
- Seguimiento del recorrido.
- GPS y visualización de avance.
- Registro de retiros, ausencias e incidencias.
- Portal vecinal.
- Avisos y comunicaciones.
- Reportes operacionales.
- Indicadores por jornada, sector y periodo.
- Soporte para conectividad intermitente y sincronización posterior.
- Control de acceso según roles.

## 🧩 Áreas de la solución

### 🏠 Portal Vecinal
Información, solicitudes, avisos e historial autorizado.

### 🗂️ Centro de Mando
Planificación, jornadas, rutas, usuarios, seguimiento e indicadores.

### 🚛 Operación en Terreno
Navegación, GPS, registro de viviendas, retiros e incidencias.

### 📊 Informes
Consolidación de resultados para seguimiento y toma de decisiones.

## 🔐 Privacidad y seguridad

El diseño considera **mínimo dato necesario** y separación de permisos según rol.

Datos que requieren protección:

- nombres y datos de contacto;
- direcciones de viviendas;
- coordenadas privadas;
- historial individual de atención;
- identificadores de usuario;
- información operacional no pública.

La vista pública debe trabajar principalmente con información agregada y evitar exponer datos personales.

## 📊 Indicadores posibles

- viviendas programadas y atendidas;
- ausencias e incidencias;
- porcentaje de avance;
- duración de jornada;
- kilómetros recorridos;
- kilos o material retirado;
- resultados por sector y periodo.

## 🧠 Trabajo realizado

Durante el desarrollo del proyecto trabajé en:

- análisis del problema;
- definición de actores y permisos;
- historias de usuario;
- requisitos funcionales;
- criterios de aceptación;
- identificación de datos sensibles;
- diseño de flujos operacionales;
- arquitectura de solución;
- prototipado de experiencia de usuario;
- indicadores e informes;
- consideraciones de seguridad y privacidad.

## 🚀 Objetivo del piloto

Validar si una plataforma de este tipo puede mejorar la trazabilidad, coordinación, seguimiento de rutas, calidad de la información, generación de reportes y comunicación con usuarios antes de una implementación mayor.

> **Nota:** Este proyecto corresponde a una propuesta y trabajo de portafolio. No representa una plataforma oficial de una institución pública.

---

**Autor:** Alex Osorio  
**Año:** 2026
