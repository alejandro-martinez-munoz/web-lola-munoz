export interface FeaturedTreatment {
  id: string;
  categoryLabel: string;
  title: string;
  price: string;
  description: string;
  duration?: string;
  badge?: string;
}

export interface MenuItem {
  name: string;
  price: string;
  detail?: string;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

// 1. TRATAMIENTOS ESTRELLA (Para tarjetas destacadas en la parte superior)
export const TRATAMIENTOS_ESTRELLA: FeaturedTreatment[] = [
  {
    id: 'higienes-avanzadas',
    categoryLabel: 'Facial de Cabina',
    title: 'Higienes Faciales Avanzadas',
    price: 'Desde 45€',
    description: 'Higienes profundas, hidrofacial, peeling con ácidos y desintoxicación para renovar la luz de tu piel.',
    duration: '60 min',
    badge: 'Esencial',
  },
  {
    id: 'dermopen-activos',
    categoryLabel: 'Microneedling & Biotecnología',
    title: 'Dermopen, Exosomas & Vitaminas',
    price: 'Desde 60€',
    description: 'Inducción profunda de Vitamina C, factores de crecimiento y exosomas para una regeneración celuar intensiva.',
    duration: '60 min',
    badge: 'Alta Gama',
  },
  {
    id: 'aparatologia-firm',
    categoryLabel: 'Aparatología Reafirmante',
    title: 'Radiofrecuencia, Diatermia e IPL',
    price: 'Desde 40€',
    description: 'Estimulación de colágeno, efecto lifting y unificación del tono cutáneo con tecnología de vanguardia.',
    duration: '50 - 60 min',
    badge: 'Bonos Disponibles',
  },
  {
    id: 'masaje-rituales',
    categoryLabel: 'Bienestar & Relax',
    title: 'Masajes & Rituales Holísticos',
    price: 'Desde 45€',
    description: 'Tensiones liberadas y paz absoluta. Desde masajes descontracturantes hasta el completo Ritual Sence.',
    duration: '45 - 90 min',
    badge: 'Experiencia Spa',
  },
  {
    id: 'micropigmentacion',
    categoryLabel: 'Maquillaje Semipermanente',
    title: 'Micropigmentación & Hidralips',
    price: 'Desde 180€',
    description: 'Diseño permanente de mirada (ojos y cejas), acuarela de labios e hidratación profunda con Hidralips.',
    duration: '90 - 120 min',
    badge: 'Precio Especial',
  },
  {
    id: 'remodelacion-bellaction',
    categoryLabel: 'Silueta & Corporal',
    title: 'Remodelación Bellaction Corporal',
    price: '60€ / ses.',
    description: 'Masaje fisioactivo profundo para celulitis, firmeza y drenaje. Bonos de 6 y 10 sesiones disponibles.',
    duration: '60 min',
    badge: 'Bonos Disponibles',
  },
];

// 2. CARTA COMPLETA DE TARIFAS (Para lista limpia tipo menú de spa)
export const CARTA_TARIFAS: MenuCategory[] = [
  {
    id: 'mirada',
    title: 'Facial, Cejas & Mirada',
    subtitle: 'Diseño, tintes, permanentes y estética de la mirada',
    items: [
      { name: 'Depilación Labio Superior', price: '3€' },
      { name: 'Depilación Patillas / Mentón', price: '3€ / 5€' },
      { name: 'Diseño y Depilación de Cejas', price: '8€' },
      { name: 'Pack Cejas + Labio', price: '10€', highlight: true },
      { name: 'Depilación Facial Completa', price: '10€' },
      { name: 'Tinte de Pestañas', price: '10€' },
      { name: 'Tinte de Cejas', price: '12€' },
      { name: 'Tinte + Depilación de Cejas', price: '16€', detail: '13€ cejas poco pobladas' },
      { name: 'Henna para Cejas Orgánica', price: '30€' },
      { name: 'Lifting de Pestañas', price: '25€', detail: '30€ con Tinte' },
      { name: 'Laminado de Cejas', price: '25€', detail: '35€ con Tinte' },
      { name: 'Hidralips (Tratamiento Labial 4 ses.)', price: '180€' },
      { name: 'Micropigmentación de Cejas', price: '200€', highlight: true },
      { name: 'Micropigmentación Ojos (Eyeliner)', price: '250€' },
      { name: 'Micropigmentación de Labios', price: '300€', highlight: true },
    ],
  },
  {
    id: 'unas',
    title: 'Manicura & Pedicura',
    subtitle: 'Cuidado de uñas, esmaltados y reconstrucción',
    items: [
      { name: 'Limar + Pintar (Manos / Pies)', price: '8€ / 10€' },
      { name: 'Manicura Completa', price: '13€' },
      { name: 'Esmaltado Permanente Manos (EP)', price: '14€', highlight: true },
      { name: 'Esmaltado Permanente Pies (EP)', price: '18€' },
      { name: 'Pedicura Completa', price: '29€' },
      { name: 'Pedicura Completa + Esmaltado Permanente', price: '42€', highlight: true },
      { name: 'Construcción Uñas de Gel', price: '40€', detail: '8€ uña suelta' },
      { name: 'Retirada Esmalte Permanente + Calcio', price: '3€', detail: '5€ si es externo' },
      { name: 'Retirada de Gel / Acrílico', price: '8€' },
    ],
  },
  {
    id: 'depilacion',
    title: 'Depilación a la Cera',
    subtitle: 'Cera caliente tradicional de alta calidad y cera fría',
    items: [
      { name: 'Axilas (Cera Caliente)', price: '6€' },
      { name: 'Ingles Normales / Completas', price: '10€ / 18€' },
      { name: '½ Brazos / Brazos Enteros', price: '12€ / 15€' },
      { name: '½ Piernas / Piernas Enteras (Cera Caliente)', price: '15€ / 20€' },
      { name: '½ Piernas / Piernas Enteras (Cera Fría / Tibia)', price: '14€ / 19€' },
      { name: 'Glúteos / Glúteos Completo', price: '5€ / 12€' },
      { name: 'Pecho y Espalda', price: '24€' },
    ],
  },
  {
    id: 'cabina-tarifas',
    title: 'Cabina, Aparatología & Bonos',
    subtitle: 'Tratamientos faciales, corporales y sesiones bonificadas',
    items: [
      { name: 'Higiene Facial Completa', price: '45€' },
      { name: 'Higiene con Ácidos / Hidrofacial / TheCure', price: '50€' },
      { name: 'Tratamiento Oxígeno / VC+', price: '60€' },
      { name: 'Dermopen VC+ / Hyaluron Pen Vitaminas', price: '70€' },
      { name: 'Hilos Tensores Reabsorbibles', price: '90€' },
      { name: 'Bioplacenta Regeneración Intensiva', price: '100€' },
      { name: 'Exosomas con Dermopen', price: '60€ - 70€', detail: 'Recomendado 4-5 sesiones' },
      { name: 'Acuderma (Tratamiento Manchas)', price: 'Desde 30€' },
      { name: 'Plasma Pen (Verrugas / Imperfecciones)', price: 'Desde 15€' },
      { name: 'Radiofrecuencia (Sesión suelta)', price: '40€', detail: 'Bono 6 sesiones: 180€', highlight: true },
      { name: 'IPL Fotorejuvenecimiento (Sesión suelta)', price: '40€', detail: 'Bono 6 sesiones: 210€' },
      { name: 'Diatermia Profunda (Sesión suelta)', price: '60€', detail: 'Bono 6 sesiones: 330€' },
      { name: 'Bellaction Corporal (Sesión suelta)', price: '60€', detail: 'Bono 6 sesiones: 330€', highlight: true },
      { name: 'Ultrasonix Lifting (HIFU)', price: '350€' },
      { name: 'Bono Corporal Intensivo (10 sesiones)', price: '500€', detail: '2 sesiones por semana', highlight: true },
      { name: 'Masaje Relajante / Descontracturante (45 min)', price: '45€' },
      { name: 'Peeling Corporal & Masaje (1 hora)', price: '60€' },
      { name: 'Ritual Sence Holistic (1h 30m)', price: '70€', highlight: true },
      { name: 'Presoterapia (Sesión suelta)', price: '20€', detail: 'Bono 8 sesiones: 120€' },
    ],
  },
];
