import { featured } from "../data";

const FeaturedWebsite = () => (
  <div className="features">
    {featured.map((site) => (
      <a className="feature reveal" key={site.name} href={site.url} target="_blank" rel="noopener noreferrer">
        <div className="shot">
          <img src={site.image} alt={`${site.name} website preview`} loading="lazy" />
        </div>
        <div className="info">
          <span className="eyebrow">{site.status}</span>
          <h3>{site.name}</h3>
          {site.text && <span>{site.text}</span>}
          <span className="url">{site.label}</span>
          <span className="go">View live site ↗</span>
        </div>
      </a>
    ))}
  </div>
);

export default FeaturedWebsite;
