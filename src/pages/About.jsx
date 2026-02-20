import './About.css';

const timeline = [
  { year: '2025', title: 'Full Stack Projects', desc: 'Built multiple full-stack applications using MERN stack, deployed on Vercel & Railway.' },
  { year: '2024', title: 'Started Learning React', desc: 'Deep-dived into React ecosystem, Context API, hooks and modern frontend patterns.' },
  { year: '2023', title: 'B.Tech CSE — Enrolled', desc: 'Started Computer Science & Engineering degree, learned fundamentals of programming.' },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">// who_am_i.txt</p>

        <div className="about-grid">
          <div className="about-left">
            <div className="avatar-card card">
              <div className="avatar">DG</div>
              <h3>Deval Garg</h3>
              <p className="avatar-role">Full Stack Developer</p>
              <div className="about-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">JavaScript</span>
              </div>
              <a
                href="mailto:devalgarg129@gmail.com"
                className="btn btn-primary"
                style={{marginTop: '1.5rem', display: 'inline-flex'}}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="about-right">
            <p className="about-bio">
              I'm a passionate full-stack developer currently pursuing my B.Tech in Computer Science.
              I love turning ideas into real, interactive web experiences that are fast, accessible, and fun to use.
            </p>
            <p className="about-bio">
              When I'm not coding, you'll find me exploring new tech, contributing to open-source projects,
              or experimenting with UI designs. I believe great software is equal parts engineering and craft.
            </p>

            <div className="timeline">
              <h3 className="timeline-title">Journey</h3>
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
