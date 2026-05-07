import { 
  Stethoscope, 
  Trash2, 
  Sparkles, 
  Smile, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  UserCheck,
  HeartPulse
} from 'lucide-react';

export const siteInfo = {
  name: "Cabinet Dentaire Anassi",
  address: "Lot. Anassi, C. Com. Entrée 8 N°55, 3° Ét., Hay Sidi Moumen, Casablanca – Maroc",
  phone: "+212 5 22 76 53 03",
  phoneRaw: "+212522765303",
  whatsappUrl: "https://wa.me/212522765303?text=Bonjour%20Cabinet%20Dentaire%20Anassi%2C%20je%20souhaite%20prendre%20rendez-vous.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cabinet%20Dentaire%20Anassi%20Lot.%20Anassi%20C.%20Com.%20Entr%C3%A9e%208%20N%C2%B055%20Hay%20Sidi%20Moumen%20Casablanca%20Maroc",
};

export const services = [
  {
    id: "consultation",
    title: "Consultation dentaire",
    description: "Un premier échange pour comprendre votre situation, répondre à vos questions et vous orienter vers les soins adaptés.",
    icon: Stethoscope,
  },
  {
    id: "caries",
    title: "Soins des caries",
    description: "Des soins destinés à traiter les caries et préserver la santé des dents lorsque cela est possible.",
    icon: Activity,
  },
  {
    id: "detartrage",
    title: "Détartrage",
    description: "Un nettoyage professionnel pour aider à éliminer le tartre et contribuer à une meilleure hygiène bucco-dentaire.",
    icon: ShieldCheck,
  },
  {
    id: "blanchiment",
    title: "Blanchiment dentaire",
    description: "Un accompagnement esthétique visant à améliorer l’apparence du sourire selon les besoins du patient.",
    icon: Sparkles,
  },
  {
    id: "extraction",
    title: "Extraction dentaire",
    description: "Une prise en charge adaptée lorsque l’extraction d’une dent devient nécessaire après évaluation.",
    icon: Trash2,
  },
  {
    id: "protheses",
    title: "Prothèses dentaires",
    description: "Des solutions pour remplacer une ou plusieurs dents et améliorer le confort au quotidien.",
    icon: Smile,
  },
  {
    id: "urgences",
    title: "Urgences dentaires",
    description: "Un contact rapide pour les situations douloureuses ou urgentes, selon les disponibilités du cabinet.",
    icon: HeartPulse,
  },
  {
    id: "conseils",
    title: "Conseils d'hygiène",
    description: "Des recommandations simples pour améliorer les habitudes d’hygiène et prévenir certains problèmes dentaires.",
    icon: UserCheck,
  }
];

export const reasons = [
  {
    title: "Écoute et respect",
    description: "Nous prenons le temps de comprendre vos besoins et vos appréhensions.",
    icon: MessageSquare,
  },
  {
    title: "Explications claires",
    description: "Chaque étape de votre soin vous est expliquée en détail avant de commencer.",
    icon: Stethoscope,
  },
  {
    title: "Approche humaine",
    description: "Un accueil chaleureux et bienveillant pour réduire le stress lié aux soins.",
    icon: Smile,
  },
  {
    title: "Hygiène rigoureuse",
    description: "Une attention constante portée à la propreté et à la stérilisation de l'environnement.",
    icon: ShieldCheck,
  },
  {
    title: "Localisation pratique",
    description: "Situé au cœur de Hay Sidi Moumen (Anassi), facile d'accès pour les résidents locaux.",
    icon: MapPin,
  },
  {
    title: "Contact simple",
    description: "Une disponibilité rapide par téléphone ou via WhatsApp pour vos prises de rendez-vous.",
    icon: Phone,
  }
];
