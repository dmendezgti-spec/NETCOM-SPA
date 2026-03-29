# NETCOM Servicios Integrales SpA

Sitio web corporativo construido con Astro, TypeScript y Tailwind CSS, preparado para Cloudflare Pages y pensado para crecer en contenido, líneas de negocio y captación comercial.

## Stack recomendado

- Astro + TypeScript: prioriza rendimiento, SEO técnico y mantenibilidad para una web corporativa con fuerte componente de contenido.
- Tailwind CSS: permite un sistema visual consistente, rápido de iterar y fácil de escalar.
- Cloudflare Pages con adapter de Astro: entrega despliegue simple, CDN global y soporte para rutas serverless como el formulario de contacto.

La elección de Astro sobre Next.js o Vite responde a que este proyecto es principalmente corporativo, con foco en páginas informativas, performance, SEO y futura expansión a landing pages y catálogo sin cargar innecesariamente JavaScript al cliente.

## Estructura del proyecto

```text
.
├── .github/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   └── api/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Sitemap propuesto

- /
- /nosotros
- /servicios
- /soluciones
- /proyectos
- /contacto

## Identidad visual

- Base oscura: posiciona a NETCOM como marca técnica, premium y robusta; además permite equilibrar software, redes, seguridad e infraestructura con una misma narrativa visual.
- Acentos azul eléctrico y cian: refuerzan tecnología, conectividad y modernidad sin caer en una estética informal.
- Tipografías: Space Grotesk para titulares y Manrope para cuerpo, buscando presencia corporativa contemporánea y lectura limpia.
- Componentes amplios, fondos con profundidad y brillo controlado: transmiten ingeniería, orden y solidez operacional.

## Árbol base de componentes

- BaseLayout
- SiteHeader
- SiteFooter
- HeroSection
- PageHero
- SectionHeading
- ServiceCard
- IndustryCard
- ProjectCard
- FAQAccordion
- ContactForm
- WhatsAppFloatingButton

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Build y validación

```bash
npm run build
```

## Variables de entorno

Copiar `.env.example` a `.env` y ajustar:

- `PUBLIC_SITE_URL`: URL pública del sitio.
- `PUBLIC_COMPANY_PHONE`: teléfono visible en la interfaz.
- `PUBLIC_COMPANY_EMAIL`: correo comercial.
- `PUBLIC_COMPANY_WHATSAPP`: número usado en CTA de WhatsApp, sin signos ni espacios.
- `CONTACT_WEBHOOK_URL`: endpoint para procesar formularios desde `/api/contact`.

## Flujo de deploy recomendado

1. Desarrollar en VS Code y versionar en GitHub.
2. Conectar el repositorio a Cloudflare Pages.
3. Configurar:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Agregar variables de entorno en Cloudflare Pages.
5. Asociar producción a la rama principal y staging a una rama como `develop`.
6. Conectar el dominio `netcom.cl` desde la sección Custom Domains de Cloudflare.

### Configuración sugerida en Cloudflare Pages

- Production branch: `main`
- Preview branch control: `develop` o cualquier branch de feature
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Environment variables:
   - `PUBLIC_SITE_URL=https://netcom.cl` en producción
   - `PUBLIC_SITE_URL=https://staging.netcom.cl` en staging
   - `PUBLIC_COMPANY_PHONE`, `PUBLIC_COMPANY_EMAIL`, `PUBLIC_COMPANY_WHATSAPP`
   - `CONTACT_WEBHOOK_URL`

### Dominio netcom.cl

1. En Cloudflare Pages, agregar `netcom.cl` como custom domain del proyecto.
2. Agregar también `www.netcom.cl` si se quiere redirección o cobertura paralela.
3. Verificar que la zona DNS de `netcom.cl` esté administrada por Cloudflare.
4. Confirmar SSL en modo Full o Full Strict una vez propagado el dominio.

### GitHub + Cloudflare

- El deploy automático principal debe quedar en Cloudflare Pages conectado al repositorio GitHub.
- El archivo [.github/workflows/validate.yml](.github/workflows/validate.yml) agrega validación de build en push y pull request para no romper producción por cambios no compilables.
- El archivo [wrangler.jsonc](wrangler.jsonc) deja preparada la configuración local para Cloudflare y preview con Wrangler.

## Staging y producción

- Producción: rama `main` apuntando a `https://netcom.cl`
- Staging: rama `develop` apuntando a un subdominio como `staging.netcom.cl`

## Tareas útiles en VS Code

- `npm run dev`: desarrollo local.
- `npm run build`: validación completa y build de producción.
- `npx wrangler pages dev ./dist`: preview local del artefacto de Cloudflare si se necesita revisar comportamiento de Pages.

## Estado actual

- Dependencias instaladas correctamente.
- Build validado localmente con `npm run build`.
- Base visual, páginas, formulario API y configuración inicial de Cloudflare listas para continuar con refinamiento de contenido y branding.