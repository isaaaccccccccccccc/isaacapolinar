import { featured } from "../data";

const FeaturedWebsite = () => (
  <a className="feature reveal" href={featured.url} target="_blank" rel="noopener noreferrer">
    <div className="shot">
      <img src={featured.image} alt={`${featured.name} website preview`} loading="lazy" />
    </div>
    <div className="info">
      <span className="eyebrow">Live project</span>
      <h3>{featured.name}</h3>
      <span className="url">{featured.label}</span>
      <span className="go">View live site ↗</span>
    </div>
  </a>
);

export default FeaturedWebsite;
