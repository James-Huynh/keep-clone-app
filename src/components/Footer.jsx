import React from 'react';

function Footer() {
  const DATE = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {DATE}</p>
    </footer>
    );
}

export default Footer;