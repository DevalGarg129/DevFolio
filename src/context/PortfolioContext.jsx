import { createContext, useContext, useReducer, useEffect } from 'react';

// ─── Initial State ────────────────────────────────────────────────────────────
const initialState = {
  theme: 'dark',
  bookmarks: [],          // bookmarked projects
  skills: [
    { id: 1, name: 'React.js', category: 'Frontend', level: 90, endorsed: false },
    { id: 2, name: 'JavaScript', category: 'Frontend', level: 88, endorsed: false },
    { id: 3, name: 'Node.js', category: 'Backend', level: 78, endorsed: false },
    { id: 4, name: 'Python', category: 'Backend', level: 75, endorsed: false },
    { id: 5, name: 'MongoDB', category: 'Database', level: 70, endorsed: false },
    { id: 6, name: 'CSS / Tailwind', category: 'Frontend', level: 85, endorsed: false },
    { id: 7, name: 'Git & GitHub', category: 'DevOps', level: 82, endorsed: false },
    { id: 8, name: 'REST APIs', category: 'Backend', level: 80, endorsed: false },
    { id: 9, name: 'TypeScript', category: 'Frontend', level: 65, endorsed: false },
    { id: 10, name: 'Docker', category: 'DevOps', level: 55, endorsed: false },
  ],
  activeSkillFilter: 'All',
};

// ─── Action Types ─────────────────────────────────────────────────────────────
export const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  CLEAR_BOOKMARKS: 'CLEAR_BOOKMARKS',
  ENDORSE_SKILL: 'ENDORSE_SKILL',
  SET_SKILL_FILTER: 'SET_SKILL_FILTER',
};

// ─── Reducer ─────────────────────────────────────────────────────────────────
function portfolioReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

    case ACTIONS.ADD_BOOKMARK:
      if (state.bookmarks.find(b => b.id === action.payload.id)) return state;
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };

    case ACTIONS.REMOVE_BOOKMARK:
      return { ...state, bookmarks: state.bookmarks.filter(b => b.id !== action.payload) };

    case ACTIONS.CLEAR_BOOKMARKS:
      return { ...state, bookmarks: [] };

    case ACTIONS.ENDORSE_SKILL:
      return {
        ...state,
        skills: state.skills.map(s =>
          s.id === action.payload ? { ...s, endorsed: !s.endorsed } : s
        ),
      };

    case ACTIONS.SET_SKILL_FILTER:
      return { ...state, activeSkillFilter: action.payload };

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  // Sync theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <PortfolioContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
}

// ─── Custom Hook ─────────────────────────────────────────────────────────────
export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used inside PortfolioProvider');
  return ctx;
}
