// Fonctions utilitaires pour les animations
export const particleAnimation = () => {
  // Logique des particules
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};