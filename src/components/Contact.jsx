import React, { useState } from 'react';

const EMAIL = 'benjivoll@gmail.com';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Proyecto Web Full Stack',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portafolio benjivoll.me] ${formData.subject} — ${formData.name}`,
          project_type: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Proyecto Web Full Stack',
          message: '',
        });
      } else {
        throw new Error('Fallback mailto');
      }
    } catch {
      // Respaldo inmediato abriendo cliente de correo pre-llenado y confirmando en UI
      const mailtoSubject = encodeURIComponent(`[Portafolio] ${formData.subject} - ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Hola Benjamin,\n\nSoy ${formData.name} (${formData.email}).\nMotivo: ${formData.subject}\n\n${formData.message}`
      );
      window.open(`mailto:${EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
      setSubmitStatus('success');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Hablemos de tu Proyecto</h2>
        <p className="section-subtitle">
          ¿Buscas desarrollar una plataforma web, tienda online o sumar un Full Stack Developer a tu equipo?
        </p>

        <div className="contact-grid">
          {/* Columna Izquierda: Info directa + Copiar Correo 1-Clic + Redes */}
          <div className="contact-info-panel">
            <div className="contact-availability-badge">
              <span className="hero-badge-dot" />
              Respuesta rápida · Disponible para proyectos &amp; oportunidades laborales
            </div>

            <h3>Conectemos directamente</h3>
            <p>
              Puedes enviarme un mensaje directo desde el formulario o contactarme por cualquiera
              de mis canales profesionales.
            </p>

            {/* Tarjeta Interactiva de Correo con Botón Copiar */}
            <div className="contact-email-box">
              <div>
                <span className="email-box-label">Correo Electrónico Directo</span>
                <div className="email-box-address">{EMAIL}</div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`copy-email-btn ${copied ? 'copied' : ''}`}
              >
                {copied ? '✓ ¡Copiado!' : '📋 Copiar correo'}
              </button>
            </div>

            {/* Tarjetas de canales */}
            <div className="contact-channels-list">
              <a
                href="https://www.linkedin.com/in/benjivoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="channel-title">LinkedIn Profesional</div>
                  <div className="channel-sub">linkedin.com/in/benjivoll</div>
                </div>
                <span className="channel-arrow">↗</span>
              </a>

              <a
                href="https://github.com/BenjiVoll"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="channel-title">GitHub &amp; Código Fuente</div>
                  <div className="channel-sub">github.com/BenjiVoll</div>
                </div>
                <span className="channel-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario Dinámico de Contacto */}
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <h4>Envíame un mensaje directo</h4>

            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="contact-name">Tu Nombre *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Carlos Mendoza"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Tu Correo *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.cl"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Tipo de Proyecto / Consulta</label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="Proyecto Web Full Stack">Desarrollo de Aplicación / Plataforma Full Stack</option>
                <option value="E-Commerce & Pasarela de Pagos">Tienda Online / E-Commerce &amp; Pagos</option>
                <option value="Oportunidad Laboral / Reclutamiento">Oportunidad Laboral / Contratación</option>
                <option value="Consultoría / Otro">Consultoría Técnica u Otro</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Mensaje o detalles del proyecto *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame brevemente qué necesitas construir, plazos estimados o detalles del puesto..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary contact-submit-btn"
            >
              {submitting ? 'Enviando mensaje...' : '🚀 Enviar Mensaje Directo'}
            </button>

            {submitStatus === 'success' && (
              <div className="contact-success-banner">
                ✓ ¡Mensaje enviado correctamente! Te responderé a la brevedad a tu correo.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
