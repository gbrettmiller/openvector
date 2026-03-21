import { Link } from 'react-router-dom';
import NotifyForm from '../../components/NotifyForm';
import useSEO from '../../hooks/useSEO';

function LearnWorkflowsPage() {
  useSEO({
    title: 'Workflows — The Open Vector',
    description: 'Structured, self-paced courses that walk you through real outcomes step by step. Video, examples, demos. Coming soon.',
    path: '/learn/workflows',
  });

  return (
    <div className="ovl-workflows">
      <header className="ovl-workflows-header">
        <div className="ovl-workflows-badge">Coming Soon</div>
        <h1 className="ovl-workflows-title">Workflows</h1>
        <p className="ovl-workflows-subtitle">
          Structured, self-paced courses that walk you through real outcomes
          from start to finish.
        </p>
      </header>

      <section className="ovl-workflows-intro">
        <div className="ovl-workflows-intro-body">
          <p>
            The Curriculum teaches you concepts. The Approach gives you
            reference guides. Workflows are different: they are sequential,
            structured follow-alongs that take you from nothing to a specific,
            tangible outcome.
          </p>
          <p>
            Each workflow pulls from the curriculum and the approach, weaving
            lessons and guides into a guided path with a clear destination. You
            do not pick and choose. You start at step one and work through to
            the end. When you finish, you have built something real.
          </p>
        </div>
      </section>

      <section className="ovl-workflows-features">
        <h2 className="ovl-workflows-section-title">What to Expect</h2>
        <div className="ovl-workflows-feature-grid">
          <div className="ovl-workflows-feature">
            <div className="ovl-workflows-feature-icon">&sect;</div>
            <h3>Step-by-Step Structure</h3>
            <p>
              Each workflow is a sequence of stages, not a menu. Complete one
              before moving to the next. Every stage builds on the previous one.
            </p>
          </div>
          <div className="ovl-workflows-feature">
            <div className="ovl-workflows-feature-icon">&para;</div>
            <h3>Video, Examples & Demos</h3>
            <p>
              Workflows include video walkthroughs, working code examples, and
              live demos you can reference as you build alongside them.
            </p>
          </div>
          <div className="ovl-workflows-feature">
            <div className="ovl-workflows-feature-icon">&dagger;</div>
            <h3>Real Outcomes</h3>
            <p>
              Every workflow ends with something shipped: a deployed site, a
              working feature, a configured project. Not theory. A result.
            </p>
          </div>
          <div className="ovl-workflows-feature">
            <div className="ovl-workflows-feature-icon">&loz;</div>
            <h3>Curriculum + Approach, Combined</h3>
            <p>
              Workflows reference and build on lessons and guides you already
              know. They are the connective tissue between learning and doing.
            </p>
          </div>
        </div>
      </section>

      <section className="ovl-workflows-notify">
        <div className="ovl-workflows-notify-card">
          <h2>Get Notified When Workflows Launch</h2>
          <p>
            We are building the first set of workflows now. Sign up to be the
            first to know when they are available.
          </p>
          <div className="ovl-workflows-notify-form">
            <NotifyForm variant="learn" tag="workflows" />
          </div>
        </div>
      </section>

      <section className="ovl-workflows-contribute">
        <h2 className="ovl-workflows-section-title">Want to Build a Workflow?</h2>
        <p>
          If you have real experience shipping something with AI agents and want
          to turn that into a structured, teachable workflow, we want to hear
          from you. Workflows are authored collaborations — you bring the
          expertise, we help shape it into the format.
        </p>
        <div className="ovl-workflows-contribute-cta">
          <a
            href="https://github.com/erikaflowers/openvector/issues/new?title=Workflow+Proposal:+[Your+Title]&body=Describe+the+outcome+this+workflow+produces+and+the+steps+involved."
            target="_blank"
            rel="noopener noreferrer"
            className="ovl-btn ovl-btn-primary"
          >
            Propose a Workflow
          </a>
          <Link to="/learn/contribute" className="ovl-btn ovl-btn-outline">
            Other Ways to Contribute
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LearnWorkflowsPage;
