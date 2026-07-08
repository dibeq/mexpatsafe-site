# MexPatSafe — Sitio Web

Sitio estático de [mexpatsafe.com](https://www.mexpatsafe.com), brokerage de seguros de salud
Bupa-exclusivo para expats de habla inglesa en México (licencia CNSF Y40634).

Para convenciones técnicas de código (rutas de assets, GA4, reglas de edición) ver **[CLAUDE.md](./CLAUDE.md)**.

## Stack

- HTML / CSS / JS vanilla — sin build step, sin framework, sin dependencias de paquetes.
- Hosting: Neubox (cPanel), archivos servidos desde `public_html/`.
- CDN/proxy: Cloudflare al frente del dominio.
- Analytics: Google Analytics 4 (`G-F5ZNZMM6CY`).

## Estructura

```
.
├── index.html                  Home (hero slideshow, Schema InsuranceAgency+LocalBusiness)
├── about.html                  Sobre Diego Beltrán (Schema Person)
├── plans.html                  4 perfiles de cliente → planes Bupa (arquitectura documentada en CLAUDE.md)
├── contact.html                WhatsApp + Calendly, sin formulario
├── privacy.html                Aviso de privacidad (Mexpat Safe Agent + Bupa México)
├── redbridge-disclosure.html   Página de disclosure reutilizable para propuestas Redbridge
├── plans-data.json             Condiciones generales por plan (dato de referencia — ver nota en CLAUDE.md)
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── styles.css
│   ├── mexpatsafe-logo-white.svg
│   ├── mexpatsafe-logo-cross.svg   (favicon)
│   └── js/
│       └── analytics.js        Tracking de eventos GA4 (WhatsApp/Calendly/email clicks)
└── images/
    ├── og-home.png              Imagen Open Graph (1200×630)
    └── mexpatsafe-diego-beltran-agent-bupa.webp
```

> **Nota:** este repo NO incluye el sistema de propuestas por cliente (`/propuestas/`) —
> contiene PII y está excluido a propósito. Ver `.gitignore`.

> **Nota:** algunas imágenes referenciadas en el HTML (hero slideshow, fotos de perfil en
> `plans.html`, logos Bupa/BCBS) no estaban en el export limpio usado para armar este repo y
> por tanto no están en `/assets` ni `/images` todavía. Detalle completo en CLAUDE.md → Pendientes.

## Deploy

El sitio se sube manualmente vía **cPanel File Manager** (decisión abr 2026 — no FileZilla/FTP).

1. Subir los archivos modificados a `public_html/` vía cPanel File Manager.
2. Verificar en el navegador (idealmente en una pestaña privada) que los cambios se ven bien.
3. **Purgar Cloudflare: Purge Everything.** Esto es obligatorio después de cada subida —
   Cloudflare cachea agresivamente y sin el purge los cambios no se reflejan para los visitantes.
4. Confirmar que los correos (`info@`, `quotes@`) y los registros MX del dominio no se tocaron
   si la sesión incluyó cambios de DNS (no debería, pero es una advertencia permanente del SoT).

No hay pipeline de CI/CD ni build step — lo que está en este repo, en su rama principal, es
literalmente lo que se sube a mano al cPanel.

## Licencia / uso

Contenido y marca propiedad de MexPatSafe. Repositorio público únicamente por conveniencia de
control de versiones — no implica licencia de reúso del contenido o la marca.
