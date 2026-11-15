import { Router } from "lucide-react";
import { offlineProjects } from "../data";

const reduceMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const OfflineProjects = () => (
  <section id="offline" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <div className="head reveal">
        <span className="eyebrow">Offline systems</span>
        <h2>Built to run without the internet.</h2>
        <p className="lede">
          These run on a local network: one computer is the server and a router connects everyone's phones and
          laptops. No internet connection is needed, so they keep working in a hall or a gym with no signal.
        </p>
      </div>
      <div className="offline-list">
        {offlineProjects.map((p) => (
          <article className={`offline-card reveal ${p.shape}`} key={p.name}>
            <div className="stage">
              <video
                poster={p.image}
                autoPlay={!reduceMotion}
                controls={reduceMotion}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${p.name} walkthrough`}
              >
                {p.video.map((v) => (
                  <source key={v.type} src={v.src} type={v.type} />
                ))}
              </video>
            </div>
            <div className="info">
              <span className="offline-tag">
                <Router size={15} strokeWidth={2} aria-hidden="true" />
                Local network · offline
              </span>
              <h3>{p.name}</h3>
              <span className="event">{p.event}</span>
              <p>{p.text}</p>
              <ul className="tags">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OfflineProjects;
