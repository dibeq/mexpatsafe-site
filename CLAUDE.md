# CLAUDE.md — Convenciones técnicas del sitio MexPatSafe

Este archivo jubila la sección técnica de código del SoT en Notion (decisión jul 2026, ver
Pendientes Consolidados #7). El SoT sigue siendo la fuente de verdad para producto, estrategia,
CRM y pendientes de negocio — **este archivo es solo para lo técnico/código.**

## 1. Rutas de assets — decisión PENDIENTE DE RATIFICAR

El SoT **no tenía** una convención única decidida para el sitio principal (solo para propuestas,
donde el jul-6-2026 se usó excepcionalmente URL absoluta de dominio). Antes de este ensamblado el
sitio en producción mezclaba tres formas distintas en las mismas páginas:

- `assets/styles.css` (relativa, sin slash inicial) — mayoría de los archivos
- `/assets/js/analytics.js` (root-absoluta) — ya así en `plans.html` y `privacy.html`
- `https://mexpatsafe.com/assets/mexpatsafe-logo-cross.svg` (dominio-absoluta) — en `redbridge-disclosure.html`

**Decisión aplicada en este repo (Claude, jul 2026 — necesita tu ratificación):** estandaricé
todas las rutas internas de recursos (CSS, JS, SVG, imágenes de página) a **root-absoluta**
(`/assets/...`, `/images/...`) en las 6 páginas. Razonamiento: es más portable que hardcodear el
dominio (funciona igual en `www` y no-`www`, y en cualquier subdominio de staging futuro) y más
robusto que la relativa cuando un archivo se mueve de nivel de carpeta — que es exactamente el
tipo de bug que causó la desviación registrada en la primera propuesta Redbridge del sistema
(ver SoT, sección Sistema de Propuestas — sin detalle de cliente aquí a propósito, este repo es
público).

**Trade-off que debes conocer:** root-absoluta se rompe si abres un HTML directamente desde el
disco (`file://`) sin servidor local — necesitas un `python -m http.server` o similar para
previsualizar. Si prefieres poder abrir doble-clic y ya, la alternativa es relativa consistente.
Dímelo y lo cambio en una pasada.

**Nota importante:** esto aplica solo a rutas de *recursos internos* (lo que carga la página).
Las URLs en `og:image`, `og:url`, `canonical`, `sitemap.xml` y el `logo`/`image` del Schema.org
se dejaron **dominio-absolutas a propósito** (`https://www.mexpatsafe.com/...`) porque Open Graph
y Schema.org lo exigen por spec — no es inconsistencia, es un requisito distinto.

## 2. Deploy + purga de Cloudflare

- Subida: **cPanel File Manager únicamente** (decisión abr 2026 — NO FileZilla/FTP).
- Host: Neubox, `public_html/`.
- Cloudflare al frente del dominio: **SIEMPRE "Purge Everything" después de cada subida.** Sin
  esto los visitantes siguen viendo la versión cacheada.
- Correos activos `info@` y `quotes@` en `mexpatsafe.com` — **nunca tocar registros MX** al
  modificar DNS.
- Sin CI/CD: lo que está en `main` es lo que se sube a mano.

## 3. Estado de `llms.txt`

**No existe todavía.** Está especificado en el SoT (sección SEO) pero no implementado —
es la Acción 6 del Plan Jul 2026, agrupada con el resto de la auditoría técnica SEO pendiente
(memoria: "batched with broader SEO technical audit").

Spec cuando se cree (en raíz del dominio, `/llms.txt`, Markdown según convención llmstxt.org):
identidad MexPatSafe, productos (Global Choice, Select, Nacional Plus, Vital), diferenciadores
(Bupa exclusivo, red BCBS, English-first, licencia CNSF Y40634), ciudades expat objetivo, CTAs
(Calendly + WhatsApp). Es un pitch comprimido para agentes IA, no un índice de rastreo.

Contexto de por qué importa: el primer lead 100% digital del negocio (jul 2026) llegó vía canal
"AI Assistant" en GA4, sin pauta — es la evidencia real detrás de esta prioridad. Detalle del
lead en el CRM del SoT, no aquí.

## 4. Stream GA4 separado para propuestas — SIN DECIDIR

El SoT **no contiene ninguna decisión** sobre esto. Estado actual verificado en código: un único
stream GA4 (`G-F5ZNZMM6CY`) para las páginas del sitio principal. `analytics.js` se sirve también
para las páginas de propuesta vía ruta relativa `../../assets/js/analytics.js` y dispara el evento
`proposal_view` — pero no hay evidencia de que use un *stream* distinto, solo el mismo ID.

Esto queda como pregunta abierta para ti, no lo inventé: ¿separar el stream de propuestas del de
sitio público, o mantenerlos juntos? Con el volumen actual (pocas propuestas/mes) probablemente
no hay significancia estadística para justificar la separación todavía — mismo principio que ya
aplicamos a otras decisiones de analytics (ver "GA4 tiene límites reales a bajo volumen" en
memoria).

## GA4

ID: `G-F5ZNZMM6CY`. Eventos custom implementados en `assets/js/analytics.js` (Acciones 1-3 del
Plan Jul 2026): `whatsapp_click`, `calendly_click`, `email_click` (delegación global de clics por
`wa.me` / `calendly.com` / `mailto:`) y `proposal_view` (solo en páginas de propuesta, detecta el
bloque `#proposal-data`). Atributo `data-cta-position` en botones WA para segmentar por ubicación.

## Regla de oro: nunca copiar JS desde Notion

El parser de Notion auto-linkea strings con forma de dominio y corrompe template literals.
Cualquier snippet de código que necesites de una sesión anterior: **regenéralo desde la
descripción lógica**, no lo copies del SoT ni de ninguna página de Notion.

## Patrón de ensamblado de `plans.html`

`plans.html` es el archivo más grande y frágil del sitio (CSS inline extenso + 4 bloques de JS).
El SoT documentaba un workaround por la falta de repo: reconstruir por partes en archivos
temporales y concatenar con `open().write()` de Python en vez de heredocs de bash o
`str_replace` en serie, porque ambos truncaban el archivo de forma silenciosa.

**Con este repo ya armado, ese workaround pierde su razón de ser** — Claude Code puede leer y
escribir el archivo completo sin pasar por heredoc. Lo documento aquí solo por si se sigue
trabajando desde una sesión de chat sin acceso a filesystem persistente tipo Claude Code.

Estructura vigente de `plans.html` (para orientarte si necesitas tocarlo):
Hero navy → Bupa Trust Band → Profile Selector (4 tabs) → Plan Cards (inyectadas por JS) →
Comparison vs Cigna/GNP-AXA/out-of-pocket → FAQ (4 preguntas) → CTA navy final.
4 scripts al final del body: `toggleDrawer`, `initReveal`, principal (`renderCard`/`selectProfile`),
mobile (`isMobile`/`initSwipe`/`toggleMobileTab`).

## `plans-data.json` — verificado en esta sesión

**No está siendo consumido por ninguna página hoy.** Confirmé con `grep` que `plans.html` no
tiene ningún `fetch()` ni referencia a `plans-data.json` — el archivo vive en el servidor pero es
dato huérfano por ahora. Esto coincide con el roadmap del SoT (Sistema de Propuestas → punto 1:
"plans-data.json con condiciones generales por plan para validación automática" sigue sin
construirse). Lo incluí en la raíz del repo porque así vive hoy en `public_html/`, no porque haya
un consumidor real que dicte su ubicación — cuando se conecte, puede que tenga más sentido
moverlo bajo `/assets/` o `/data/`.

## Pendientes detectados en esta sesión (fuera del alcance de los 3 bugs — no los toqué)

1. **`assets/js/analytics.js` no se carga en `index.html`, `about.html` ni `contact.html`** —
   solo está en `plans.html` y `privacy.html`. Si la intención de las Acciones 1-3 del Plan Jul
   2026 era medir WhatsApp/Calendly/email en todo el sitio, faltan 3 de 6 páginas.
2. **Schema.org de `index.html` (línea ~38) referencia `assets/mexpatsafe-logo-blue.svg`** — ese
   archivo no existe en ningún export que he visto. Posible logo roto para crawlers que lean el
   `LocalBusiness.logo`.
3. **Imágenes faltantes del export limpio:** `assets/bupa-logo.svg`,
   `assets/blue-cross-blue-shield-vector-logo.svg`, las 3 imágenes de `images/hero/`, las 4 de
   `images/profiles/`, y `images/expat-woman-coffee-mexico-lifestyle.webp` — todas referenciadas
   en el HTML pero no incluidas en `mexpatsafe-site-source.zip`. Probablemente viven en cPanel
   pero no se incluyeron en la descarga limpia.
4. **OG por página** (Pendiente #8 del SoT): las 4 páginas ahora comparten `og-home.png` como
   parche funcional — falta crear `og-about.jpg`, `og-plans.jpg`, `og-contact.jpg` (1200×630) en
   Canva cuando haya tiempo.

Ninguno de estos 4 puntos es uno de los 3 bugs que pediste corregir en esta sesión — los dejo
documentados, no los arreglé en silencio.
