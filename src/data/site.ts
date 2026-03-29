export const siteConfig = {
  name: 'NETCOM Servicios Integrales SpA',
  shortName: 'NETCOM',
  legalName: 'NETCOM Servicios Integrales SpA',
  description:
    'Empresa chilena especializada en software, redes, telecomunicaciones, soporte TI, CCTV, control de acceso, cableado estructurado y habilitaciones técnicas.',
  domain: 'netcom.cl',
  url: 'https://netcom.cl',
  location: 'Chile',
  phone: import.meta.env.PUBLIC_COMPANY_PHONE || '+56 9 0000 0000',
  email: import.meta.env.PUBLIC_COMPANY_EMAIL || 'contacto@netcom.cl',
  whatsapp: import.meta.env.PUBLIC_COMPANY_WHATSAPP || '56900000000',
  hero: {
    badge: 'Software + infraestructura + terreno',
    title: 'Tecnología corporativa con ejecución real en software, redes e instalaciones técnicas.',
    description:
      'Diseñamos, implementamos y damos soporte a soluciones tecnológicas para empresas que necesitan continuidad operativa, conectividad confiable y ejecución técnica seria en cada proyecto.',
    primaryCta: 'Solicitar cotización',
    secondaryCta: 'Ver servicios',
  },
  stats: [
    { value: '360°', label: 'Cobertura desde software hasta habilitación técnica' },
    { value: 'TI + OT', label: 'Integración entre oficina, terreno e infraestructura' },
    { value: 'B2B', label: 'Enfoque comercial para pymes, retail y operaciones' },
  ],
  seo: {
    defaultTitle: 'NETCOM Servicios Integrales SpA | Software, redes, telecomunicaciones e instalaciones técnicas',
    defaultDescription:
      'NETCOM entrega soluciones de software, POS, redes, soporte TI, telecomunicaciones, CCTV, control de acceso y habilitaciones técnicas para empresas en Chile.',
  },
};

export const serviceLines = [
  {
    slug: 'desarrollo-software',
    title: 'Desarrollo de Software',
    short: 'Plataformas a medida para procesos, operación y control.',
    description:
      'Construimos soluciones de software a medida para digitalizar procesos, integrar áreas y dar visibilidad a la operación con una base técnica mantenible.',
    problems: ['Procesos manuales dispersos', 'Falta de trazabilidad operativa', 'Herramientas que no conversan entre sí'],
    benefits: ['Automatización de flujos críticos', 'Mayor control y reportería', 'Escalabilidad para nuevas áreas o sucursales'],
  },
  {
    slug: 'software-ventas-pos',
    title: 'Software de Ventas y POS',
    short: 'Venta, caja, inventario y control comercial en un solo flujo.',
    description:
      'Implementamos soluciones de punto de venta y software comercial para negocios que necesitan vender mejor, controlar stock y operar con información confiable.',
    problems: ['Pérdidas por desorden de stock', 'Cierres de caja lentos', 'Falta de control de ventas y márgenes'],
    benefits: ['Venta rápida y ordenada', 'Control en tiempo real', 'Base lista para crecimiento multisucursal'],
  },
  {
    slug: 'redes-conectividad',
    title: 'Redes y Conectividad',
    short: 'Infraestructura de red estable para operar sin interrupciones.',
    description:
      'Diseñamos e instalamos redes cableadas e inalámbricas con foco en rendimiento, orden técnico y continuidad de servicio para oficinas, locales y faenas.',
    problems: ['Cortes recurrentes de red', 'Wi-Fi inestable', 'Crecimiento sin estándar técnico'],
    benefits: ['Conectividad confiable', 'Topologías ordenadas', 'Capacidad para crecer sin rehacer la base'],
  },
  {
    slug: 'telecomunicaciones',
    title: 'Telecomunicaciones',
    short: 'Integración de voz, datos y soporte de comunicaciones empresariales.',
    description:
      'Abordamos proyectos de telecomunicaciones y conectividad empresarial para dar estabilidad a las comunicaciones internas y externas.',
    problems: ['Servicios aislados', 'Incidencias difíciles de diagnosticar', 'Infraestructura subdimensionada'],
    benefits: ['Visión técnica integral', 'Menos tiempos muertos', 'Mayor continuidad operacional'],
  },
  {
    slug: 'cctv-seguridad',
    title: 'Cámaras de Seguridad y CCTV',
    short: 'Monitoreo, registro y cobertura visual para proteger la operación.',
    description:
      'Instalamos y mantenemos sistemas de cámaras de seguridad con enfoque en cobertura, monitoreo y respaldo para negocios, oficinas y edificios.',
    problems: ['Puntos ciegos', 'Equipos mal ubicados', 'Grabación deficiente o sin respaldo'],
    benefits: ['Cobertura estratégica', 'Mayor control del entorno', 'Mejor capacidad de revisión ante incidentes'],
  },
  {
    slug: 'soporte-informatico',
    title: 'Soporte Informático',
    short: 'Soporte preventivo y correctivo para continuidad operativa.',
    description:
      'Entregamos soporte técnico y mantención tecnológica a empresas que necesitan resolver incidencias rápido y ordenar su plataforma de trabajo.',
    problems: ['Equipos lentos o inestables', 'Pérdida de tiempo por fallas repetitivas', 'Ausencia de soporte formal'],
    benefits: ['Respuesta técnica confiable', 'Menos interrupciones', 'Mejor vida útil de la infraestructura'],
  },
  {
    slug: 'obras-menores',
    title: 'Obras Menores e Instalaciones Técnicas',
    short: 'Ejecución en terreno para habilitar proyectos tecnológicos con estándar.',
    description:
      'Desarrollamos obras menores asociadas a proyectos tecnológicos, incluyendo soportes, fijaciones, ductería, canalización y terminaciones funcionales.',
    problems: ['Dependencia de múltiples proveedores', 'Instalaciones improvisadas', 'Riesgos por mala terminación'],
    benefits: ['Una sola contraparte técnica', 'Ejecución ordenada en terreno', 'Mejor terminación y seguridad'],
  },
  {
    slug: 'construccion-habilitaciones',
    title: 'Construcción, Habilitaciones y Canalización',
    short: 'Base física preparada para redes, seguridad y operación continua.',
    description:
      'Ejecutamos canalizaciones, habilitaciones y adecuaciones técnicas para soportar instalaciones de red, CCTV, control de acceso y equipamiento crítico.',
    problems: ['Espacios sin infraestructura técnica adecuada', 'Canalización deficiente', 'Proyectos con baja coordinación entre obra y tecnología'],
    benefits: ['Infraestructura lista para tecnología', 'Mayor orden y seguridad', 'Coordinación real entre construcción y TI'],
  },
];

export const industries = [
  {
    title: 'Retail y negocios con POS',
    description: 'Control comercial, puntos de venta, stock y soporte operativo para locales con alta exigencia diaria.',
  },
  {
    title: 'Pymes y oficinas',
    description: 'Conectividad, soporte TI, seguridad y software para equipos que necesitan orden y continuidad.',
  },
  {
    title: 'Bodegas y centros logísticos',
    description: 'Cobertura de red, CCTV, control de acceso y trazabilidad operativa para espacios de alta circulación.',
  },
  {
    title: 'Edificios y comunidades',
    description: 'Soluciones de seguridad, acceso y soporte técnico para operación centralizada y mantenimiento continuo.',
  },
];

export const projectCategories = ['Software', 'POS', 'Redes', 'Telecom', 'Seguridad', 'Infraestructura'];

export const featuredProjects = [
  {
    title: 'Implementación POS e inventario para cadena local',
    category: 'POS',
    summary: 'Base operativa para ventas, stock y reportería comercial con despliegue preparado para nuevas sucursales.',
  },
  {
    title: 'Renovación de red y CCTV en oficinas administrativas',
    category: 'Redes',
    summary: 'Mejora de cobertura, ordenamiento de cableado y visualización de espacios críticos para continuidad operacional.',
  },
  {
    title: 'Canalización e instalación técnica para proyecto de seguridad',
    category: 'Infraestructura',
    summary: 'Habilitación física, montaje y terminaciones para soportar cámaras y control de acceso en terreno.',
  },
];

export const faqItems = [
  {
    question: '¿NETCOM trabaja solo software o también ejecuta instalaciones en terreno?',
    answer:
      'Trabajamos ambas líneas. Podemos desarrollar soluciones de software y también ejecutar redes, cableado, CCTV, control de acceso, canalización y habilitaciones técnicas asociadas.',
  },
  {
    question: '¿Atienden empresas pequeñas y medianas?',
    answer:
      'Sí. El enfoque está pensado para pymes, retail, oficinas, bodegas y operaciones que necesitan una contraparte técnica seria y escalable.',
  },
  {
    question: '¿Se puede partir con un proyecto pequeño y luego crecer?',
    answer:
      'Sí. La arquitectura del servicio y del sitio está pensada para crecer por etapas, priorizando continuidad operativa y orden técnico.',
  },
  {
    question: '¿Cómo se gestionan las solicitudes de cotización?',
    answer:
      'El formulario queda preparado para conectarse a un webhook, CRM o automatización externa, permitiendo centralizar las consultas sin depender de una sola casilla de correo.',
  },
];