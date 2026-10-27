# DevIA Tech — Contexto para IA

Documento de referencia para cualquier agente de IA (o persona) que vaya a editar la landing de DevIA. Léalo completo antes de cambiar contenido o estilos.

## 1. El negocio

- **Nombre:** DevIA (DevIA Tech). Escribir siempre "DevIA", con "IA" en mayúscula.
- **Qué es:** empresa de ingeniería de software e inteligencia artificial. Automatiza procesos, atiende usuarios con agentes conversacionales de voz y texto, convierte datos en decisiones y construye software a medida (web, móvil, nube, bases de datos).
- **Experiencia sectorial:** sector público y privado en Colombia, con empresas nacionales e internacionales. Gobierno (MinTIC, contratación con el Estado), energía, oil & gas, salud, educación, servicios financieros, transporte y logística, reciclaje. **Salud es un sector más, no el foco.**
- **Tipos de proyecto:** ERP, ERM, plataformas SaaS, migraciones completas a la nube, integración de sistemas, IA y nuevas tecnologías.
- **Diferenciadores:**
  1. Equipo certificado: **AWS Solutions Architect**, **Anthropic (Claude)**, **Microsoft Azure**, **Google Cloud (GCP)**.
  2. Desarrolladores de software altamente capacitados que trabajan con estándares de calidad profesionales (code review, pruebas automatizadas, CI/CD, seguridad, documentación).
  3. No es una plataforma cerrada: lo que no existe se desarrolla y lo que existe se integra.
  4. Pilotos medibles con indicadores definidos antes de empezar.
  5. Metodologías ágiles: **Scrum** (proyectos con alcance evolutivo) y **Kanban** (soporte y operación continua).
  6. **IA responsable y segura:** usamos agentes de IA especializados (código, pruebas, revisión, documentación) siempre supervisados por un ingeniero; los datos del cliente no entrenan modelos de terceros.

### Certificaciones (insignias oficiales de Credly en `assets/certs/`)

| Archivo | Certificación mostrada |
|---------|------------------------|
| `aws-solutions-architect-associate.png` | AWS Certified Solutions Architect – Associate |
| `claude-certified-architect.png` | Claude Certified Architect – Foundations (Anthropic) |
| `azure-fundamentals.png` | Microsoft Certified: Azure Fundamentals (provisional, confirmar nivel real) |
| `gcp-professional-cloud-architect.png` | Google Cloud Professional Cloud Architect |

Para cambiar una insignia: descargar desde `https://images.credly.com/size/340x340/images/<id>/...` (buscar el id en `credly.com/organizations/<org>/badges.json`), guardar en `assets/certs/` y actualizar el `src`, el `alt` y el `h3` en el hero (`.cert-row`) y en `#certificaciones` (`.cert-card`). Solo mostrar certificaciones que el equipo tenga de verdad.
- **Cliente ideal:** gerencias de operación, TI o innovación de organizaciones medianas y grandes con procesos de alto volumen y tareas repetitivas.
- **Conversión principal:** agendar una reunión de 30 minutos en Calendly → `https://calendly.com/mroserov1/30min`.
- **Correo de contacto:** `deviatechsas@gmail.com`.

## 2. Líneas de servicio (portafolio)

| # | Servicio | Resumen |
|---|----------|---------|
| 01 | Implementación de IA en su empresa | Casos de uso, copilotos internos, LLMs + RAG, integración a sistemas, gobierno de datos y capacitación. |
| 02 | Agentes de IA de voz y texto | Llamadas, WhatsApp, SMS, chat web; agendamiento, recordatorios, escalamiento humano. |
| 03 | Soluciones en AWS | Arquitectura, migración, serverless, contenedores, IA generativa (Bedrock). Arquitectos certificados. |
| 04 | Software a medida | Portales, back offices, APIs, modernización de sistemas heredados. |
| 05 | Desarrollo móvil | Apps iOS/Android nativas y multiplataforma (Flutter, React Native). |
| 06 | Bases de datos | Diseño, migración, rendimiento, alta disponibilidad. |
| 07 | Datos y analítica | Tableros, modelos predictivos, alertas, reportes automáticos. |
| 08 | Automatización de procesos | Órdenes médicas, flujos con aprobaciones, extracción de documentos. |
| 09 | Azure y Google Cloud | Despliegues e integración en Azure y GCP. |

El grid de servicios es de 3 columnas en escritorio (3×3). Si se agrega o quita un servicio, mantener múltiplos de 3 o revisar el layout.

## 3. Voz y tono

- Español neutro, trato de **usted**.
- Frases cortas. Un párrafo = una idea. Preferir listas escaneables.
- Concreto antes que grandilocuente. No inventar cifras, clientes ni testimonios. Si no hay dato real, no se pone número.
- Evitar: "revolucionario", "de vanguardia", "sinergia", "soluciones 360".
- CTA principal: "Agendar reunión" / "Agendar una llamada de 30 min".

## 4. Sistema visual

Inspirado en la plantilla Veltro (Astro), adaptado a la marca.

### Colores (kit oficial `DevIA_Tech_Logo/LEEME.md`; variables en `assets/css/styles.css`, `:root`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--green` | `#113C39` | Verde profundo principal: fondo de secciones oscuras, texto fuerte sobre claro |
| `--green-2` | `#18504B` | Tarjetas sobre fondo oscuro |
| `--green-3` | `#0B2B29` | Sombra/variante más oscura |
| `--lime` | `#C8F8A9` | Verde claro de acento: botones, resaltados. **No usar como texto pequeño sobre blanco** |
| `--paper` | `#F4F6F3` | Fondo de secciones claras |
| `--ink` | `#1E1E1E` | Texto sobre claro |
| `--muted-d` | `#C7D6D2` | Texto secundario sobre verde profundo |
| `--muted-l` | `#4A4F63` | Gris TECH: texto secundario sobre claro |

Colores planos, sin degradados de marca. Las secciones alternan oscuro/claro.

### Activos de marca (`assets/brand/`, copiados del kit)

- `devia-principal-oscuro.svg` — logo en menú (68px de alto, 54px en móvil; barra de 104px) y footer (72px / 56px).
- `devia-isotipo-lima.svg` — isotipo decorativo en el hero (opacidad 8%).
- `favicon.ico`, `favicon-32/180/512.png`, `site.webmanifest` — favicons generados desde `07_Aplicaciones/devia-avatar-circular-lima.png`.
- `og-image.png` — 1200×630 para redes, generado desde `08_Fondos_Aplicados/devia-tagline-fondo-oscuro.png`.
- Sobre fondo claro usar las variantes `-claro` o `-monocromo-verde` del kit. No deformar ni añadir sombras al símbolo.
- Tagline: **Software · Datos · Inteligencia real** (pill del hero).

### Tipografía (Google Fonts)

- **Funnel Display** — títulos (`h1`, `h2`, `h3`).
- **Space Grotesk** — etiquetas, pills, números, botones.
- **Inter** — cuerpo de texto (16–18px, peso 400).

### Componentes

- `.pill` — etiqueta de sección (borde redondeado).
- `.btn .btn-primary` (lima) / `.btn-ghost`.
- `.feature-circle` — 4 círculos de 280px con trama de puntos (fila `about-features-row`): Eficiencia con IA, Ingeniería primero, Escalable y seguro, Precios transparentes. Hover: el círculo sube, el borde pasa a azul marino y la trama gira.
- `.stat` con `<span class="count" data-to="N">` — contadores que animan de 0 a N al entrar en pantalla.
- `.svc-card` — tarjeta de servicio (todas blancas, mismo estilo) con triángulo de esquina que se expande al hover + parallax suave.
- `.process` — pasos sticky que se apilan al hacer scroll, con contador `n/4` y barra de progreso.
- `.cert` — insignia de certificación.
- `.marquee` / `.marquee-reverse` — fila de logos que se desplaza sola; la lista se repite en un segundo `<ul aria-hidden>` para el bucle. Pausa al pasar el cursor; se detiene con `prefers-reduced-motion`. Logos en `assets/tech/` (Devicon 2.16.0, MIT; Claude de Simple Icons 13.21.0). Para agregar una tecnología, añadir el `<li>` en **ambas** listas de la fila. Filas: 1) nube, web y móvil · 2) backend y datos (reversa) · 3) IA, automatización y DevOps. Logos de Gemini, ChatGPT, LangChain, n8n, Zapier y Make vienen de Simple Icons con el color de marca aplicado en `fill`.
- **Portafolio:** los tags de `.work-card` llevan logo (`assets/tech/*.svg`) y solo pueden usar tecnologías que aparezcan en la sección `#tecnologia`. Si se agrega una herramienta a un proyecto, agregarla también a la marquesina.
- `.work-card` — tarjeta de portafolio con etiquetas.

## 5. Mapa de la página (`index.html`)

| Orden | `id` | Fondo | Contenido |
|-------|------|-------|-----------|
| 1 | `inicio` | oscuro | Hero + CTA Calendly + insignias de certificación |
| 2 | `nosotros` | claro | Quiénes somos, estadísticas, fila de 4 círculos de valor |
| 3 | `servicios` | oscuro | Grid de 9 servicios |
| 4 | `certificaciones` | claro | Detalle de certificaciones y equipo |
| 5 | `portafolio` | oscuro | Implementaciones destacadas |
| 6 | `proceso` | claro | 4 pasos sticky con contador + bloque `.method` (Scrum, Kanban, IA responsable) |
| 7 | `sectores` | oscuro | Experiencia: 8 sectores, tipos de proyecto + seguridad |
| 8 | `tecnologia` | claro | Marquee de logos (3 filas, sentidos alternos) + stack por categoría + modelos de trabajo |
| 9 | `contacto` | oscuro | Calendly inline |

## 6. Arquitectura técnica

- HTML estático sin build: `index.html`, `assets/css/styles.css`, `assets/js/main.js`.
- Sin frameworks CSS. Grid y flex nativos.
- **Calendly se carga bajo demanda** (`loadCalendly()` en `main.js`; pesa ~10 MB). Los botones `.js-calendly` lo cargan al hacer clic y abren el popup (si falla o tarda más de 4 s, abren calendly.com). El calendario de `#calendly-embed` se **precarga después del evento `load`, cuando el navegador queda libre** (`requestIdleCallback`, máx. 3 s); si el usuario llega antes a `#contacto` (600px de margen), se carga en ese momento. Con ahorro de datos o red 2G/3G solo se carga al acercarse. **No volver a poner `widget.js` ni `widget.css` en el `<head>`.**
- **Fuentes locales** en `assets/fonts/` (woff2, subconjunto latino): Funnel Display 600, Inter variable (400–600), Space Grotesk variable (500–600). Declaradas con `@font-face` al inicio de `styles.css`; las dos primeras se precargan. Si se necesita otro peso, descargarlo de Google Fonts y agregarlo ahí; no volver a enlazar `fonts.googleapis.com`.
- **Imágenes:** insignias en WebP de 240px (`assets/certs/*.webp`); SVG de `assets/tech/` y `assets/brand/` optimizados con SVGO. El logo del menú y el isotipo del hero llevan `fetchpriority="high"`; el resto, `loading="lazy"` para no competir con la primera pantalla, y tras la carga inicial `main.js` las pasa a `eager` para tenerlas en caché antes del scroll.
- Publicado en **Vercel**. `vercel.json` define la caché: fuentes 1 año `immutable`; imágenes (`brand`, `certs`, `tech`) 30 días; CSS/JS 1 hora (con `stale-while-revalidate`). Si se reemplaza una fuente, **cambiar el nombre del archivo**; si se reemplaza una imagen con el mismo nombre, puede tardar hasta 30 días en verse en navegadores que ya la tenían.
- Para probar en local usar un servidor (`npx serve .` o `python3 -m http.server`); abrir `index.html` con doble clic (`file://`) produce errores de CORS en fuentes y manifest que no existen en producción.
- Animaciones: `IntersectionObserver` (clase `.rv` → `.in`), parallax en `[data-parallax-speed]`, proceso sticky en `.process`. Todas respetan `prefers-reduced-motion`.
- Migrar a Astro solo si se agrega blog, múltiples páginas o i18n.

## 7. Reglas de edición

1. Mantener los `id` de sección (los usa la navegación).
2. Para agregar un servicio, copiar un `<article class="svc-card">` existente; el grid se reacomoda solo.
3. Para agregar un paso de proceso, copiar un `.process-item` y actualizar el total en `#process-total`.
4. No poner `overflow` hidden/auto en `body` ni en ancestros de `.process`: rompe `position: sticky`. Para evitar scroll horizontal usar `overflow-x:clip` en `html`.
5. Colores y fuentes solo vía variables de `:root`; no hardcodear hex nuevos.
6. Verificar contraste AA y vista móvil (360px) después de cada cambio.
7. No publicar cifras, logos de clientes ni testimonios sin confirmación del equipo.
