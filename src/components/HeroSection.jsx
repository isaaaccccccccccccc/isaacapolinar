import hero from "../assets/optimized/hero1.webp";
import resume from "../assets/resumee.pdf";

const hops = [
  ["network-admin", "BSIT, Tarlac State University · cum laude"],
  ["web-developer", "React, WordPress, Shopify, PHP"],
  ["virtual-assistant", "admin and technical support"],
  ["musician ♪", "creativity, discipline, practice"],
];

const HeroSection = () => (
  <div className="wrap hero">
    <div className="hero-grid">
      <div>
        <span className="status">
          <span className="dot"></span>Open to freelance work · Tarlac, PH · UTC+8
        </span>
        <h1>
          Hi, I'm Isaac. I build websites that <em>work for your business.</em>
        </h1>
        <p className="lede">
          IT graduate specializing in Network Administration, freelance web developer, virtual assistant, and musician. I
          combine technical expertise, creativity, and problem-solving to help businesses grow and succeed online.
        </p>
        <div className="cta">
          <a className="btn primary" href="#contact">Hire me</a>
          <a className="btn" href="#work">See my work</a>
          <a className="btn" href={resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </div>
      </div>
      <div className="hero-side">
        <div className="portrait">
          <img src={hero} alt="Portrait of Isaac Apolinar" width="900" height="900" />
        </div>
        <div className="trace" aria-label="Isaac's four roles, shown as a traceroute">
          <div className="cmd">$ <b>traceroute</b> isaac.dev</div>
          <ol>
            {hops.map(([name, detail]) => (
              <li key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    <div className="stats">
      <div><b>7</b><span>Clients</span></div>
      <div><b>10</b><span>Projects</span></div>
      <div><b>2+</b><span>Years</span></div>
    </div>
  </div>
);

export default HeroSection;
