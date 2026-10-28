# 🌱 GestiónVerde

> Proyecto de portafolio orientado a la digitalización y trazabilidad de operaciones municipales de reciclaje y recolección.

**Estado:** Prototipo / propuesta de piloto  
**Enfoque:** Gestión municipal, operación en terreno, trazabilidad y experiencia vecinal  
**Código fuente:** No incluido en esta presentación de portafolio

---

## 📌 Sobre el proyecto

**GestiónVerde** nace como una propuesta para transformar una operación de recolección que puede depender de registros manuales, coordinación dispersa y poca trazabilidad, en un flujo digital más ordenado, medible y fácil de supervisar.

El proyecto está pensado como un **piloto orientado al contexto municipal de Puerto Montt**, con foco en rutas, viviendas, jornadas de trabajo, seguimiento operacional, incidencias, reportes y comunicación con vecinos.

> Esta publicación corresponde a una presentación de portafolio y no representa una plataforma oficial de la Municipalidad de Puerto Montt.

---

## 🎯 Problema que busca resolver

En una operación de recolección pueden aparecer dificultades como:

- poca trazabilidad de lo realizado durante una jornada;
- información repartida entre distintos medios;
- dificultad para conocer viviendas atendidas o ausentes;
- incidencias que no quedan registradas de forma estructurada;
- poca visibilidad del avance de una ruta;
- dificultad para transformar la operación diaria en indicadores útiles.

---

## 💡 Solución propuesta

GestiónVerde centraliza la operación en una plataforma donde cada usuario accede según su rol.

La idea es que una jornada pueda seguir un flujo como:

**Solicitud / planificación → asignación de ruta → recorrido → registro en terreno → seguimiento → cierre → informe**

Esto permite convertir el trabajo diario en información útil para supervisión y toma de decisiones.

---

## 👥 Actores principales

### Administrador
Gestiona configuración general, usuarios, roles, permisos y auditoría.

### Jefatura
Planifica y administra la operación: jornadas, rutas, viviendas, usuarios, avisos y reportes.

### Supervisor
Monitorea el avance de las jornadas, estados de operación e incidencias.

### Chofer
Consulta la jornada y ruta asignada, utiliza navegación y comparte posición operacional cuando corresponde.

### Recolector
Registra el resultado de cada punto de recolección: retiro, ausencia, observación o incidencia.

### Vecino
Consulta información del programa, recibe avisos y puede realizar solicitudes o revisar su historial autorizado.

---

## 🧩 Funcionalidades principales

- Gestión de jornadas de recolección.
- Administración de rutas y sectores.
- Registro de viviendas y puntos de atención.
- Seguimiento del recorrido.
- GPS y visualización de avance.
- Registro de retiros, ausencias e incidencias.
- Portal vecinal.
- Avisos y comunicaciones.
- Reportes de operación.
- Indicadores por jornada, sector y periodo.
- Funcionamiento con conectividad intermitente y posterior sincronización.
- Control de acceso según roles.

---

## 🔐 Privacidad y seguridad

El proyecto considera separación de permisos según rol y el principio de **mínimo dato necesario**.

Algunos datos que requieren especial protección son:

- nombres y datos de contacto;
- direcciones de viviendas;
- coordenadas privadas;
- historial individual de atención;
- identificadores de usuario;
- información operacional no destinada al público.

La vista pública debería trabajar principalmente con información agregada, evitando exponer datos personales de vecinos o funcionarios.

---

## 📊 Indicadores que puede generar

- viviendas programadas;
- viviendas atendidas;
- ausencias;
- incidencias;
- porcentaje de avance;
- duración de la jornada;
- kilómetros recorridos;
- material o kilos retirados cuando corresponda;
- resultados por sector y periodo.

---

## 🏗️ Arquitectura conceptual

A nivel funcional, GestiónVerde se divide en cuatro grandes áreas:

1. **Portal Vecinal** — información, solicitudes, avisos e historial autorizado.
2. **Centro de Mando** — planificación, rutas, jornadas, usuarios e indicadores.
3. **Operación en Terreno** — navegación, GPS, viviendas, retiros e incidencias.
4. **Informes** — consolidación de resultados para seguimiento y toma de decisiones.

---

## 🧠 Trabajo realizado en el proyecto

Durante el desarrollo conceptual y técnico se trabajó en:

- análisis del problema;
- definición de actores y permisos;
- historias de usuario;
- requisitos funcionales;
- criterios de aceptación;
- identificación de datos sensibles;
- diseño de flujos operacionales;
- arquitectura de la solución;
- prototipado de experiencia municipal y vecinal;
- definición de indicadores e informes;
- consideraciones de seguridad y privacidad.

---

## 🚀 Objetivo de un piloto

El objetivo no es reemplazar inmediatamente la forma de trabajo existente, sino probar si una plataforma de este tipo puede mejorar:

- la trazabilidad;
- la coordinación;
- el seguimiento de las rutas;
- la calidad de la información;
- la generación de reportes;
- la comunicación con los vecinos.

Un piloto permitiría medir resultados antes de una implementación mayor.

---

## 🧑‍💻 Proyecto de portafolio

Este repositorio muestra el **análisis, diseño y visión del producto**. El código fuente de GestiónVerde no forma parte de esta publicación de portafolio.

**Autor:** Alex Osorio  
**Proyecto:** GestiónVerde  
**Año:** 2026
