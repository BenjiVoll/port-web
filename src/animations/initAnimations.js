import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // ── Secciones principales: fade + slide up ──────────────────────────
  ['#about', '#projects', '#contact'].forEach((id) => {
    gsap.fromTo(
      id,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: id,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  // ── Skill badges: stagger con efecto elástico ────────────────────────
  gsap.fromTo(
    '.skill-badge',
    { opacity: 0, scale: 0.75, y: 20 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.06,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
        once: true,
      },
    }
  );

  // ── Stats: slide desde abajo ─────────────────────────────────────────
  gsap.fromTo(
    '.about-stat',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 88%',
        once: true,
      },
    }
  );

  // ── Tarjetas de proyectos: stagger desde abajo ───────────────────────
  gsap.fromTo(
    '.project-card',
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        once: true,
      },
    }
  );

  // ── Tarjetas de contacto: escala + fade ──────────────────────────────
  gsap.fromTo(
    '.contact-card',
    { opacity: 0, scale: 0.8, y: 30 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.contact-cards',
        start: 'top 88%',
        once: true,
      },
    }
  );

  // ── Parallax suave en el avatar del hero ─────────────────────────────
  gsap.to('.hero-avatar-ring', {
    y: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // ── Títulos de sección: slide desde la izquierda ─────────────────────
  gsap.utils.toArray('.section-title').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
      }
    );
  });
}
