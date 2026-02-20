import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import './Home.css';

export default function Home() {
  const { state } = usePortfolio();

  return (
    <div className="page-wrapper home-page">
      <div className="container">
        <div className="hero">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Available for work
          </div>

          <h1 className="hero-title">
            Hi, I'm <span>Deval Garg</span>
          </h1>

          <p className="hero-role">
            Full Stack Developer &amp; UI Enthusiast
          </p>

          <p className="hero-desc">
            I build modern, performant web applications with React and Node.js.
            Passionate about clean code, great design, and developer experience.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">{state.skills.length}</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="code-filename">deval.js</span>
            </div>
            <pre className="code-body"><code>{`const developer = {
  name: "Deval Garg",
  role: "Full Stack Dev",
  stack: ["React", "Node", "MongoDB"],
  theme: "${state.theme}",
  status: "Building cool stuff ✨",
  bookmarks: ${state.bookmarks.length},
};`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
