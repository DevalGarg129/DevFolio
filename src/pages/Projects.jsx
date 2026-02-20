import { useMemo, useState } from 'react';
import { usePortfolio, ACTIONS } from '../context/PortfolioContext';
import './Projects.css';

const ALL_PROJECTS = [
  {
    id: 1,
    title: 'DevFolio',
    desc: 'A personal portfolio SPA built with React + Vite, featuring multi-page routing, Context API, and dark/light theming.',
    tech: ['React', 'Vite', 'React Router', 'CSS'],
    category: 'Frontend',
    link: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Chat Application',
    desc: 'Real-time chat app using Socket.io, Node.js, and React. Supports multiple rooms and user authentication.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Full Stack',
    link: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Manager',
    desc: 'CRUD task management app with drag-and-drop, priority labels, and persistent storage using localStorage.',
    tech: ['React', 'useReducer', 'CSS'],
    category: 'Frontend',
    link: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'REST API Server',
    desc: 'RESTful API built with Express.js, featuring JWT authentication, rate limiting, and MongoDB integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    link: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    desc: 'Weather forecasting dashboard consuming OpenWeather API with charts, geolocation, and 7-day forecasts.',
    tech: ['React', 'Chart.js', 'API', 'CSS'],
    category: 'Frontend',
    link: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'E-commerce Backend',
    desc: 'Complete backend service for an e-commerce platform with product CRUD, cart management, and payment hooks.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    category: 'Backend',
    link: '#',
    featured: false,
  },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Full Stack'];

export default function Projects() {
  const { state, dispatch } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  // useMemo: filtered + searched projects
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter(p => {
      const matchCat = activeFilter === 'All' || p.category === activeFilter;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                          p.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeFilter, search]);

  // useMemo: stats summary
  const stats = useMemo(() => ({
    total: ALL_PROJECTS.length,
    frontend: ALL_PROJECTS.filter(p => p.category === 'Frontend').length,
    backend: ALL_PROJECTS.filter(p => p.category === 'Backend').length,
    fullstack: ALL_PROJECTS.filter(p => p.category === 'Full Stack').length,
  }), []);

  const isBookmarked = (id) => state.bookmarks.some(b => b.id === id);

  const toggleBookmark = (project) => {
    if (isBookmarked(project.id)) {
      dispatch({ type: ACTIONS.REMOVE_BOOKMARK, payload: project.id });
    } else {
      dispatch({ type: ACTIONS.ADD_BOOKMARK, payload: { id: project.id, title: project.title } });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container section">
        <h2 className="section-title">My <span>Projects</span></h2>
        <p className="section-subtitle">// projects_showcase.json</p>

        {/* Stats bar — useMemo */}
        <div className="projects-stats">
          <div className="pstat"><span>{stats.total}</span> Total</div>
          <div className="pstat"><span>{stats.frontend}</span> Frontend</div>
          <div className="pstat"><span>{stats.backend}</span> Backend</div>
          <div className="pstat"><span>{stats.fullstack}</span> Full Stack</div>
          <div className="pstat bookmarked-stat">
            <span>{state.bookmarks.length}</span> Bookmarked
          </div>
        </div>

        {/* Filters */}
        <div className="projects-controls">
          <div className="filter-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Bookmarks banner */}
        {state.bookmarks.length > 0 && (
          <div className="bookmarks-banner">
            <span>
              📌 {state.bookmarks.length} project{state.bookmarks.length > 1 ? 's' : ''} bookmarked:&nbsp;
              {state.bookmarks.map(b => b.title).join(', ')}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.CLEAR_BOOKMARKS })}>
              Clear all
            </button>
          </div>
        )}

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <p className="no-results">No projects match your search.</p>
          ) : filteredProjects.map(project => (
            <div key={project.id} className={`project-card card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <span className="featured-badge">⭐ Featured</span>}

              <div className="project-header">
                <div className="project-icon">
                  {project.category === 'Frontend' ? '🎨' : project.category === 'Backend' ? '⚙️' : '🔗'}
                </div>
                <button
                  className={`bookmark-icon ${isBookmarked(project.id) ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(project)}
                  title={isBookmarked(project.id) ? 'Remove bookmark' : 'Bookmark project'}
                >
                  <svg width="16" height="16" fill={isBookmarked(project.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                  </svg>
                </button>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <a href={project.link} className="btn btn-outline project-btn">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
