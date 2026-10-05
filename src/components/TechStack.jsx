import { toolbox } from "../data";

const TechStack = () => (
  <section id="toolbox" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <div className="head reveal">
        <span className="eyebrow">My toolbox</span>
        <h2>Tools &amp; technologies.</h2>
      </div>
      <div className="kit reveal">
        {toolbox.map((t) => (
          <div key={t.group}>
            <h3>{t.group}</h3>
            <ul>
              {t.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
