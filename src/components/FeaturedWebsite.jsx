import { featured } from "../data";

// People who ask their device for reduced motion get the still poster instead of autoplay.
const reduceMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FeaturedWebsite = () => (
  <div className="features">
    {featured.map((site) => (
      <a className="feature reveal" key={site.name} href={site.url} target="_blank" rel="noopener noreferrer">
        <div className="shot">
          {site.video ? (
            <video
              poster={site.image}
              autoPlay={!reduceMotion}
              controls={reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${site.name} website walkthrough`}
            >
              {site.video.map((v) => (
                <source key={v.type} src={v.src} type={v.type} />
              ))}
            </video>
          ) : (
            <img src={site.image} alt={`${site.name} website preview`} loading="lazy" />
          )}
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
