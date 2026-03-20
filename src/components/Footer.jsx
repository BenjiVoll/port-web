import React from 'react';

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} <span>Benjamin Vollrath</span>. Todos los derechos reservados.
    </footer>
  );
}

export default Footer;