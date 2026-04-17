import { Link, useOutletContext } from 'react-router-dom';
import { SignInPrompt } from '../../components/learn/SignInPrompt';
import RightRail from '../../components/learn/RightRail';
import useSEO from '../../hooks/useSEO';

function ApproachIndexPage() {
  const { learn } = useOutletContext();
  const { approach } = learn;

  useSEO({
    title: 'Approach — The Open Vector',
    description: 'Step-by-step walkthroughs for the Zero Vector workflow. IKEA instructions for design-led engineering.',
    path: '/learn/approach',
  });

  const availableGuides = approach.guides.filter(g => g.status === 'available').length;

  return (
    <div className="ovl-index">
      <header className="ovl-index-header">
        <h1 className="ovl-index-title">{approach.title}</h1>
        <p className="ovl-index-subtitle">{approach.subtitle}</p>
      </header>
      <SignInPrompt />

      {/* Category cards (mirrors Curriculum level grid) */}
      <div className="ovl-with-rail">
        <div className="ovl-main">
          <div className="ovl-approach-guides-header">
            <h2 className="ovl-approach-guides-title">The Categories</h2>
            <p className="ovl-approach-guides-desc">
              Four categories of step-by-step walkthroughs for the Zero Vector workflow. Start
              with{' '}
              <Link to="/learn/approach/getting-started/this-is-not-vibe-coding" className="ovl-approach-intro-link">
                This Is Not Vibe Coding
              </Link>{' '}
              if you want the mental model first, or jump straight into{' '}
              <Link to="/learn/approach/getting-started" className="ovl-approach-intro-link">
                Getting Started
              </Link>{' '}
              if today is day one. The rest assume you have been through it.
            </p>
          </div>
          <div className="ovl-index-grid">
            {(approach.categories || []).map(cat => {
              const catGuides = approach.guides.filter(g => g.category === cat.key);
              return (
                <Link
                  key={cat.key}
                  to={`/learn/approach/${cat.key}`}
                  className="ovl-level-card"
                  data-level={cat.number}
                >
                  <div className="ovl-level-card-number">{cat.number}</div>
                  <div className="ovl-level-card-body">
                    <h2 className="ovl-level-card-title">{cat.label}</h2>
                    <p className="ovl-level-card-subtitle">{cat.subtitle}</p>
                    <div className="ovl-level-card-meta">
                      <span className="ovl-level-card-count">{catGuides.length} guides</span>
                      <span className="ovl-level-card-status">Available</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <RightRail>
          <div className="ovl-rail-section">
            <div className="ovl-rail-section-header">About</div>
            <div className="ovl-rail-about">
              The curriculum teaches concepts. The Approach shows you what to do with them. Each guide is a step-by-step walkthrough you can follow along with on your own machine.
            </div>
          </div>
          <div className="ovl-rail-section">
            <div className="ovl-rail-section-header">Stats</div>
            <div className="ovl-rail-stats">
              <div className="ovl-rail-stat">
                <span className="ovl-rail-stat-count">{approach.guides.length}</span>
                <span className="ovl-rail-stat-label">Guides</span>
              </div>
              <div className="ovl-rail-stat">
                <span className="ovl-rail-stat-count">{(approach.categories || []).length}</span>
                <span className="ovl-rail-stat-label">Categories</span>
              </div>
              <div className="ovl-rail-stat">
                <span className="ovl-rail-stat-count">{availableGuides}</span>
                <span className="ovl-rail-stat-label">Available</span>
              </div>
            </div>
          </div>
        </RightRail>
      </div>
    </div>
  );
}

export default ApproachIndexPage;
