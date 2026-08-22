import './HoverRevealCards.css';

/**
 * A grid of cards where hovering/focusing one dims and softens its siblings,
 * so the hovered card visually pops forward. Same interaction as the
 * fan carousel's hover push, expressed as a plain grid for a small, fixed
 * set of items (e.g. solution-type selectors).
 */
const HoverRevealCards = ({ items, className = '' }) => {
  if (!items?.length) return null;

  return (
    <div className={`hover-reveal-grid ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={item.onClick}
          aria-pressed={!!item.active}
          className={`hover-reveal-card ${item.active ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          <span className="hover-reveal-overlay" />
          <span className="hover-reveal-content">
            <span className="hover-reveal-subtitle">{item.subtitle}</span>
            <span className="hover-reveal-title">{item.title}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default HoverRevealCards;
