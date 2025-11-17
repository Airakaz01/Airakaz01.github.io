export const CONFIG = {
  personal: {
    name: "Zakaria EL HOUARI",
    title: "Élève Ingénieur en Informatique et Ingénierie des Données",
    subtitle: "Data Science, Data Engineering & Data Analytics",
    school: "ENSA Khouribga",
    year: "5ème année",
    availability: "Recherche stage PFE (6 mois) à partir de février 2026",
    image: "/assets/zakaria.png"
  },
  contact: {
    email: "elhouari.zakaria01@gmail.com",
    phone: "+212 6 34 30 33 00",
    linkedin: "https://linkedin.com/in/zakaria-el-houari-0b2910221",
    github: "https://github.com/Airakaz01"
  },
  cv: {
    DA: "/assets/Zakaria_EL_HOUARI_CV.pdf",
    DS: "/assets/Zakaria_EL_HOUARI_CV.pdf",
    DE: "/assets/Zakaria_EL_HOUARI_CV.pdf"
  },
  stats: [
    { number: '10+', label: 'Projets Data', icon: 'Target' },
    { number: '2', label: 'Stages Réalisés', icon: 'Award' },
    { number: '20+', label: 'Technologies', icon: 'Code' },
    { number: '2026', label: 'Diplôme', icon: 'GraduationCap' }
  ]
};

export const navItems = [
  { id: 'home', label: 'Accueil', icon: 'Camera' },
  { id: 'about', label: 'À propos', icon: 'User' },
  { id: 'experience', label: 'Expérience', icon: 'Briefcase' },
  { id: 'skills', label: 'Compétences', icon: 'Code' },
  { id: 'projects', label: 'Projets', icon: 'Rocket' },
  { id: 'contact', label: 'Contact', icon: 'Mail' }
];

export const skillCategories = [
  // ... autres catégories
  {
      icon: 'Brain',
      title: 'Data Science & ML',
      description: 'Intelligence artificielle et apprentissage automatique',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow/PyTorch', level: 80 },
        { name: 'Computer Vision', level: 75 }
      ],
      tags: ['Pandas', 'NumPy', 'Deep Learning', 'Model Deployment', 'OpenCV'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Languages',
      title: 'NLP & LLM',
      description: 'Traitement du langage naturel et modèles de grande taille',
      skills: [
        { name: 'BERT/Transformers', level: 85 },
        { name: 'NLTK/Spacy', level: 90 },
        { name: 'LangChain', level: 80 },
        { name: 'Text Generation', level: 75 }
      ],
      tags: ['Sentiment Analysis', 'Chatbots', 'Text Classification', 'LLM Fine-tuning'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'BarChart3',
      title: 'Analyse & Visualisation',
      description: 'Business Intelligence et analyse de données',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 75 },
        { name: 'Matplotlib/Seaborn', level: 90 },
        { name: 'SQL', level: 85 }
      ],
      tags: ['Dashboard', 'ETL', 'Statistical Analysis', 'Data Storytelling'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'Database',
      title: 'Big Data & Engineering',
      description: 'Gestion de données massives et ingénierie des données',
      skills: [
        { name: 'Apache Spark', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'Elasticsearch', level: 85 },
        { name: 'Apache Kafka', level: 70 }
      ],
      tags: ['Data Pipelines', 'Real-time Processing', 'Data Warehousing', 'Cloud Platforms'],
      color: 'from-orange-500 to-red-500'
    }
];

export const experiences = [
  // ... autres expériences
  {
      date: 'Juillet - Septembre 2025',
      title: 'Stagiaire Data Science',
      company: 'Moteur de Recherche Réglementaire Intelligent',
      description: 'Développement d\'un système de recherche sémantique avancé utilisant BERT pour l\'extraction d\'entités juridiques. Optimisation des performances avec indexation vectorielle et similarité cosinus.',
      tags: ['Python', 'BERT', 'NLP', 'Elasticsearch', 'Streamlit', 'LangChain LLM'],
      icon: 'Brain',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      date: 'Juillet - Août 2024',
      title: 'Stagiaire Data Analyst',
      company: 'Analyse des ventes avec Power BI',
      description: 'Analyse approfondie des données de ventes avec création de tableaux de bord interactifs. Automatisation des processus via Power Automate pour améliorer l\'efficacité opérationnelle.',
      tags: ['Power BI', 'Power Automate', 'SQL', 'Data Visualization', 'Business Intelligence'],
      icon: 'BarChart3',
      gradient: 'from-purple-500 to-pink-500'
    }
];