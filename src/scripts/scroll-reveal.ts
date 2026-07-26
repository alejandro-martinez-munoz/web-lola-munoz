/**
 * Scroll Reveal Observer
 *
 * Watches elements with the `.reveal` class and adds
 * the `data-visible` attribute when they enter the viewport.
 * Once revealed, elements stay visible (no re-hiding).
 *
 * Usage in Astro components:
 *   <div class="reveal reveal--up">Content here</div>
 *   <div class="reveal reveal--up stagger-2">Delayed content</div>
 */
export function initScrollReveal(): void {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');

  if (reveals.length === 0) return;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    reveals.forEach((el) => {
      el.dataset.visible = '';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = '';
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
}
