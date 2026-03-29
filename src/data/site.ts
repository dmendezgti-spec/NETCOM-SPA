const envPhone = import.meta.env.PUBLIC_COMPANY_PHONE as string | undefined;
const envWhatsapp = import.meta.env.PUBLIC_COMPANY_WHATSAPP as string | undefined;

const hasPlaceholderDigits = (value?: string) => !value || /0{4,}/.test(value);
const normalizeWhatsapp = (value?: string) => (value ? value.replace(/\D/g, '') : '');

export const siteConfig = {
  name: 'NETCOM Servicios Integrales SpA',
  shortName: 'NETCOM',
  legalName: 'NETCOM Servicios Integrales SpA',
  description:
    'Empresa chilena especializada en software, redes, telecomunicaciones, soporte TI, CCTV, control de acceso, cableado estructurado y habilitaciones técnicas.',
  domain: 'netcom.cl',
  url: 'https://netcom.cl',
  location: 'Chile',
  phone: hasPlaceholderDigits(envPhone) ? '+56 9 5429 3135' : envPhone,
  email: import.meta.env.PUBLIC_COMPANY_EMAIL || 'contacto@netcom.cl',
  whatsapp: hasPlaceholderDigits(envWhatsapp) ? '56954293135' : normalizeWhatsapp(envWhatsapp) || '56954293135',
  hero: {
    badge: 'Software · Redes · CCTV · Obras e instalaciones',
    title: 'Tecnología e infraestructura técnica para empresas que operan sin margen de error.',
    description:
      'NETCOM ejecuta proyectos de software, conectividad, seguridad y obras técnicas con un solo equipo, sin subcontratos y con criterio corporativo de principio a fin.',
    primaryCta: 'Solicitar cotización',
    secondaryCta: 'Ver servicios',
  },
  stats: [
    { value: 'Sin subcontratos', label: 'TI e infraestructura ejecutadas por el mismo equipo técnico' },
    { value: 'Dos líneas', label: 'Software y conectividad + obras, mantención e instalaciones' },
    { value: 'Una contraparte', label: 'Un solo punto de contacto para todo el alcance del proyecto' },
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
    benefits: ['Venta rápida y ordenada', 'Control en tiempo real', 'Escalabilidad para nuevas sucursales'],
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
    title: 'Obras Menores y Ejecución en Terreno',
    short: 'Ejecución técnica en terreno para habilitar proyectos comerciales y tecnológicos.',
    description:
      'Ejecutamos obras menores asociadas a implementación tecnológica, habilitando espacios con criterios técnicos de seguridad, continuidad y orden operacional.',
    problems: ['Obras improvisadas sin estándar', 'Demoras por coordinación entre contratistas', 'Instalaciones sin terminación profesional'],
    benefits: ['Una sola contraparte técnica', 'Ejecución controlada en terreno', 'Mejor estándar de terminaciones y seguridad'],
  },
  {
    slug: 'construccion-habilitaciones',
    title: 'Construcción, Canalización y Habilitaciones Técnicas',
    short: 'Infraestructura física diseñada para redes, seguridad y continuidad operativa.',
    description:
      'Desarrollamos canalización, habilitación y adecuaciones técnicas para soportar redes, CCTV, control de acceso, telecomunicaciones y operación comercial.',
    problems: ['Espacios sin infraestructura técnica adecuada', 'Canalización deficiente', 'Proyectos con baja coordinación entre obra y tecnología'],
    benefits: ['Infraestructura lista para operar', 'Mayor seguridad y orden técnico', 'Coordinación efectiva entre construcción y TI'],
  },
];

export const infrastructureExecutionPillars = [
  {
    title: 'Canalización y habilitación técnica',
    description:
      'Canalización, ductería, soportes y adecuaciones para dejar espacios listos para equipamiento tecnológico y operación continua.',
  },
  {
    title: 'Mantención e instalaciones en terreno',
    description:
      'Mantención preventiva y correctiva de infraestructura, redes, CCTV y componentes críticos para reducir detenciones operativas.',
  },
  {
    title: 'Obras menores para proyectos comerciales',
    description:
      'Ejecución de obras técnicas asociadas a apertura, remodelación o mejora de oficinas, locales, bodegas y edificios.',
  },
  {
    title: 'Soporte operativo e infraestructura',
    description:
      'Acompañamiento técnico para asegurar continuidad operativa, trazabilidad y respuesta frente a incidencias de terreno.',
  },
];

export const integrationStatement =
  'NETCOM integra software, redes, telecomunicaciones, CCTV, soporte informático, construcción e instalaciones técnicas para resolver proyectos con foco comercial y operacional.';

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
    summary: 'Operación de ventas e inventario estabilizada, con control comercial y capacidad de expansión a nuevas sucursales.',
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
      'Ambas líneas. Desarrollamos software y también ejecutamos redes, cableado, CCTV, control de acceso, canalización y habilitaciones técnicas asociadas a cada proyecto.',
  },
  {
    question: '¿Atienden empresas pequeñas y medianas?',
    answer:
      'Sí. Trabajamos con pymes, retail, oficinas, bodegas y operaciones que necesitan una contraparte técnica seria, con capacidad de respuesta y criterio para escalar.',
  },
  {
    question: '¿Es posible comenzar con un proyecto acotado y ampliar después?',
    answer:
      'Sí. La estructura de servicio está diseñada para crecer por etapas, priorizando continuidad operativa y orden técnico en cada fase de implementación.',
  },
  {
    question: '¿Cómo se gestiona una solicitud de cotización?',
    answer:
      'Cada solicitud recibe un diagnóstico comercial y técnico. Definimos alcance, prioridades y propuesta según la realidad operativa de tu empresa, sin plantillas genéricas.',
  },
];