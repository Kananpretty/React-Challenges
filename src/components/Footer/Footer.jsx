import "./Footer.css";

const Footer = () => {
  return (
    <footer className="react-challenge-footer">
      <p className="footer-text">Find me online</p>
      <ul className="social-links">
        <li className="social-links-items">
          <a
            href="https://frontend-lab-inky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Frontend Lab portfolio"
          >
            <span>Frontend Lab</span>
            <span className="external-link-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>

        <li className="social-links-items">
          <a
            href="https://www.linkedin.com/in/kanan-mehta-93770157/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <span>Linkedin</span>
            <span className="external-link-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
        <li className="social-links-items">
          <a
            href="https://github.com/Kananpretty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <span>Github</span>
            <span className="external-link-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
