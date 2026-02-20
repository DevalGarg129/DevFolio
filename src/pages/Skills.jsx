import { useMemo } from 'react';
import { usePortfolio, ACTIONS } from '../context/PortfolioContext';
import './Skills.css';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

const categoryColors = {
  Frontend: '#00c853',
  Backend: '#69f0ae',
  Database: '#b9f6ca',
  DevOps: '#00e676',
};

export default function Skills() {
  // useContext — consuming global state
  const { state, dispatch } = usePortfolio();

  // useMemo — compute filtered skills & analytics summary
  const filteredSkills = useMemo(() => {
    if (state.activeSkillFilter === 'All') return state.skills;
    return state.skills.filter(s => s.category === state.activeSkillFilter);
  }, [state.skills, state.activeSkillFilter]);

  // useMemo — analytics derived from skills state
  const analytics = useMemo(() => {
    const endorsed = state.skills.filter(s => s.endorsed).length;
    const avgLevel = Math.round(state.skills.reduce((acc, s) => acc + s.level, 0) / state.skills.length);
    const topSkill = [...state.skills].sort((a, b) => b.level - a.level)[0];
    const byCategory = CATEGORIES.slice(1).map(cat => ({
      name: cat,
      count: state.skills.filter(s => s.category === cat).length,
      avg: Math.round(
        state.skills.filter(s => s.category === cat).reduce((a, s) => a + s.level, 0) /
        (state.skills.filter(s => s.category === cat).length || 1)
      ),
    }));
    return { endorsed, avgLevel, topSkill, byCategory };
  }, [state.skills]);

  return (
    <div className="page-wrapper">
      <div className="container section">
        <h2 className="section-title">Skills &amp; <span>Experience</span></h2>
        <p className="section-subtitle">// skills_and_analytics.jsx — useContext + useReducer + useMemo</p>

        {/* Analytics Cards — useMemo */}
        <div className="analytics-row">
          <div className="analytics-card card">
            <div className="analytics-icon">🎯</div>
            <div>
              <div className="analytics-num">{state.skills.length}</div>
              <div className="analytics-label">Total Skills</div>
            </div>
          </div>
          <div className="analytics-card card">
            <div className="analytics-icon">📊</div>
            <div>
              <div className="analytics-num">{analytics.avgLevel}%</div>
              <div className="analytics-label">Avg Proficiency</div>
            </div>
          </div>
          <div className="analytics-card card">
            <div className="analytics-icon">⭐</div>
            <div>
              <div className="analytics-num">{analytics.endorsed}</div>
              <div className="analytics-label">Endorsed Skills</div>
            </div>
          </div>
          <div className="analytics-card card">
            <div className="analytics-icon">🏆</div>
            <div>
              <div className="analytics-num">{analytics.topSkill?.name}</div>
              <div className="analytics-label">Top Skill</div>
            </div>
          </div>
        </div>

        <div className="skills-layout">
          {/* Left: Skill list */}
          <div className="skills-main">
            {/* Filter pills — dispatches SET_SKILL_FILTER */}
            <div className="skills-filters">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`pill ${state.activeSkillFilter === cat ? 'active' : ''}`}
                  onClick={() => dispatch({ type: ACTIONS.SET_SKILL_FILTER, payload: cat })}
                >
                  {cat}
                  <span className="pill-count">
                    {cat === 'All' ? state.skills.length : state.skills.filter(s => s.category === cat).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Skills List — filtered via useMemo */}
            <div className="skills-list">
              {filteredSkills.map(skill => (
                <div key={skill.id} className={`skill-row card ${skill.endorsed ? 'endorsed' : ''}`}>
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-cat" style={{ color: categoryColors[skill.category] }}>
                        {skill.category}
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      >
                      </div>
                    </div>
                  </div>

                  <div className="skill-right">
                    <span className="skill-pct">{skill.level}%</span>
                    {/* Endorse button — dispatches ENDORSE_SKILL */}
                    <button
                      className={`endorse-btn ${skill.endorsed ? 'active' : ''}`}
                      onClick={() => dispatch({ type: ACTIONS.ENDORSE_SKILL, payload: skill.id })}
                      title={skill.endorsed ? 'Remove endorsement' : 'Endorse this skill'}
                    >
                      {skill.endorsed ? '⭐' : '☆'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="skills-hint">
              Click ☆ to endorse skills · Filter updates live via <code>useMemo</code> · State managed by <code>useReducer</code>
            </p>
          </div>

          {/* Right: Category breakdown — useMemo */}
          <div className="skills-sidebar">
            <div className="card breakdown-card">
              <h3 className="breakdown-title">Category Breakdown</h3>
              {analytics.byCategory.map(cat => (
                <div key={cat.name} className="breakdown-row">
                  <div className="breakdown-header">
                    <span style={{ color: categoryColors[cat.name] }}>{cat.name}</span>
                    <span className="breakdown-meta">{cat.count} skills · {cat.avg}% avg</span>
                  </div>
                  <div className="breakdown-bar-track">
                    <div
                      className="breakdown-bar-fill"
                      style={{ width: `${cat.avg}%`, background: categoryColors[cat.name] }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card hooks-card">
              <h3 className="hooks-title">🧩 Exp 4 Hooks Used</h3>
              <div className="hook-item">
                <code>useContext</code>
                <span>Global skills state, theme &amp; bookmarks shared across all pages</span>
              </div>
              <div className="hook-item">
                <code>useReducer</code>
                <span>ENDORSE_SKILL, SET_SKILL_FILTER, TOGGLE_THEME, ADD/REMOVE/CLEAR_BOOKMARK</span>
              </div>
              <div className="hook-item">
                <code>useMemo</code>
                <span>Filtered skills list &amp; analytics summary recomputed only on state change</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
