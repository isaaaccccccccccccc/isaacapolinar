import { skills, languages } from "../data";

const SkillsSection = () => (
  <section id="skills">
    <div className="wrap">
      <div className="head reveal">
        <span className="eyebrow">Skills</span>
        <h2>What I can take off your plate.</h2>
        <p className="lede">
          Two sides of the same job: keeping your day-to-day running, and building the site your customers find you on.
        </p>
      </div>
      <div className="skill-groups reveal">
        {skills.map((g) => (
          <div className="skill-group" key={g.group}>
            <div className="skill-head">
              <h3>{g.group}</h3>
              <p>{g.lead}</p>
            </div>
            <ul className="skill-list">
              {g.items.map((s) => (
                <li key={s.name}>
                  <b>{s.name}</b>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="langs reveal">
        <span className="eyebrow">Languages</span>
        {languages.map((l) => (
          <span className="lang" key={l}>{l}</span>
        ))}
      </p>
    </div>
  </section>
);

export default SkillsSection;
