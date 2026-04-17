import { Link, useParams, useOutletContext } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import LessonBadge from '../../components/learn/LessonBadge';
import RightRail from '../../components/learn/RightRail';
import useSEO from '../../hooks/useSEO';

function ApproachCategoryPage() {
  const { categorySlug } = useParams();
  const { learn } = useOutletContext();
  const { approach } = learn;
  const { isComplete, enabled } = useProgress();

  const category = (approach.categories || []).find(c => c.key === categorySlug);
  const guides = category
    ? approach.guides.filter(g => g.category === category.key)
    : [];

  useSEO({
    title: category ? `${category.number} ${category.label} — Approach` : 'Category Not Found',
    description: category?.desc,
    path: `/learn/approach/${categorySlug}`,
  });

  if (!category) {
    return (
      <div className="ovl-not-found">
        <h1>Category not found</h1>
        <p>The approach category you are looking for does not exist.</p>
        <Link to="/learn/approach">Back to all categories</Link>
      </div>
    );
  }

  const totalMinutes = guides.reduce((sum, g) => {
    const match = g.duration?.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  const categoryIndex = (approach.categories || []).findIndex(c => c.key === categorySlug);
  const prevCategory = categoryIndex > 0 ? approach.categories[categoryIndex - 1] : null;
  const nextCategory = categoryIndex < (approach.categories || []).length - 1
    ? approach.categories[categoryIndex + 1]
    : null;

  return (
    <div className="ovl-level-page" data-level={category.number}>
      <header className="ovl-level-header">
        <div className="ovl-level-header-number">{category.number}</div>
        <h1 className="ovl-level-header-title">{category.label}</h1>
        <p className="ovl-level-header-subtitle">{category.subtitle}</p>
        <p className="ovl-level-header-desc">{category.desc}</p>
        <div className="ovl-level-header-stats">
          <span className="ovl-level-header-stat">{guides.length} guides</span>
          {totalMinutes > 0 && <span className="ovl-level-header-stat">{totalMinutes} min total</span>}
        </div>
      </header>
      <div className="ovl-with-rail">
        <div className="ovl-main">
          <div className="ovl-level-lesson-list">
            <div className="ovl-level-lesson-list-label">Guides</div>
            {guides.map((guide, i) => {
              const completed = enabled && isComplete('approach', guide.slug);
              return (
                <Link
                  key={guide.slug}
                  to={`/learn/approach/${category.key}/${guide.slug}`}
                  className={`ovl-level-lesson-item ${completed ? 'ovl-level-lesson-item--done' : ''}`}
                >
                  <div className="ovl-level-lesson-index">
                    {completed ? <span className="ovl-level-lesson-check">{'\u2713'}</span> : String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="ovl-level-lesson-info">
                    <div className="ovl-level-lesson-title">{guide.title}</div>
                    <div className="ovl-level-lesson-subtitle">{guide.subtitle}</div>
                  </div>
                  <div className="ovl-level-lesson-meta">
                    <LessonBadge badge={guide.badge} />
                    {guide.duration && <span className="ovl-level-lesson-duration">{guide.duration}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <RightRail>
          {(prevCategory || nextCategory) && (
            <div className="ovl-rail-section">
              <div className="ovl-rail-section-header">Other Categories</div>
              <div className="ovl-rail-levels">
                {prevCategory && (
                  <Link to={`/learn/approach/${prevCategory.key}`} className="ovl-rail-level-link">
                    <span className="ovl-rail-level-num">{prevCategory.number}</span>
                    <span className="ovl-rail-level-title">{prevCategory.label}</span>
                  </Link>
                )}
                {nextCategory && (
                  <Link to={`/learn/approach/${nextCategory.key}`} className="ovl-rail-level-link">
                    <span className="ovl-rail-level-num">{nextCategory.number}</span>
                    <span className="ovl-rail-level-title">{nextCategory.label}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </RightRail>
      </div>
    </div>
  );
}

export default ApproachCategoryPage;
