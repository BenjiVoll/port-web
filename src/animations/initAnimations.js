import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const ctx = gsap.context(() => {
    // ── Secciones principales: revelación suave ──────────────────────────
    ['#about', '#projects', '#contact'].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 40 },
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

    // ── Stats: slide desde abajo ─────────────────────────────────────────
    gsap.fromTo(
      '.about-stat',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 90%',
          once: true,
        },
      }
    );

    // ── Tarjetas de contacto: escala + fade ──────────────────────────────
    gsap.fromTo(
      '.contact-card',
      { opacity: 0, scale: 0.85, y: 24 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'back.out(1.4)',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.contact-cards',
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  return () => ctx.revert();
}
