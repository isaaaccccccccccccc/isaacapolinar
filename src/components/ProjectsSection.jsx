import { useState } from "react";
import { projects, filters } from "../data";

const Projects = () => {
  const [active, setActive] = useState("all");
  const shown = projects.filter((p) => active === "all" || p.stack === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by stack">
        {filters.map((f) => (
          <button key={f.key} className="chip" type="button" aria-pressed={active === f.key} onClick={() => setActive(f.key)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects">
        {shown.map((p) => (
          <article className="card" key={p.title}>
            <div className="shot">
              <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              {p.soon && <span className="soon">Coming soon</span>}
            </div>
            <div className="body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Projects;
