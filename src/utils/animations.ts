/**
 * Utilitaires pour les animations au scroll
 * Utilise Intersection Observer pour des animations performantes
 */

/**
 * Initialise les animations au scroll pour les éléments avec la classe .animate-on-scroll
 */
export function initScrollAnimations(): void {
  // Vérifier que nous sommes côté client
  if (typeof window === 'undefined') return;

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionnel : arrêter d'observer une fois visible pour la performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe .animate-on-scroll
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));
}

/**
 * Initialise les animations au chargement de la page
 */
export function initOnLoad(): void {
  if (typeof window === 'undefined') return;

  // Attendre que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}
