import { NavLink } from 'react-router-dom';
import { usePortfolio, ACTIONS } from '../context/PortfolioContext';
import './Navbar.css';

export default function Navbar() {
  const { state, dispatch } = usePortfolio();
  const bookmarkCount = state.bookmarks.length;

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          DG
          <span className="logo-bracket">/&gt;</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={({isActive}) => isActive ? 'active' : ''}>Skills</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>

        <div className="nav-actions">
          {/* Bookmark badge — uses context */}
          <NavLink to="/projects" className="bookmark-btn" title="Bookmarked Projects">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
            </svg>
            {bookmarkCount > 0 && <span className="badge">{bookmarkCount}</span>}
          </NavLink>

          {/* Theme toggle — uses context */}
          <button
            className="theme-btn"
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_THEME })}
            title={`Switch to ${state.theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {state.theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
