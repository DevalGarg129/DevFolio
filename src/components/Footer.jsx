import { usePortfolio } from '../context/PortfolioContext';
import './Footer.css';

export default function Footer() {
  const { state } = usePortfolio();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">&lt;DG/&gt;</span>
        <p>Built with React, Vite &amp; ❤️ — Theme: <strong>{state.theme}</strong></p>
        <p className="footer-copy">© 2025 Deval Garg. All rights reserved.</p>
      </div>
    </footer>
  );
}
