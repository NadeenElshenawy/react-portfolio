import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Name and Title */}
        <div className="footer-brand">
          <h3 className="footer-name">Nadeen Samy</h3>
          <span className="footer-title">JUNIOR REACT FRONT-END DEVELOPER</span>
        </div>

        {/* Center Links */}
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/nadeensamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NadeenElshenawy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="mailto:nadienelshenawy@gmail.com" className="footer-link">
            Email
          </a>
        </div>

        {/* Right Side: Copyright */}
        <div className="footer-copyright">
          © {currentYear} Nadeen Samy
        </div>
      </div>
    </footer>
  );
};