import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const ctx = gsap.context(() => {
    // ── Secciones principales: revelación fluida ──────────────────────────
    ['#about', '#projects', '#contact'].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: id,
            start: 'top 86%',
            once: true,
          },
        }
      );
    });

    // ── Pilares Full Stack: stagger desde abajo ───────────────────────────
    gsap.fromTo(
      '.about-pillar-card',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.14,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.about-pillars-grid',
          start: 'top 88%',
          once: true,
        },
      }
    );

    // ── Stats: slide desde abajo ─────────────────────────────────────────
    gsap.fromTo(
      '.about-stat',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // ── Títulos de sección: slide suave ──────────────────────────────────
    gsap.utils.toArray('.section-title').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });
  });

  return () => ctx.revert();
}
