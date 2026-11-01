import { plans } from "../data";

// Clicking a quote button pre-fills the contact form's subject with the chosen package.
const pickPlan = (plan) => {
  window.dispatchEvent(new CustomEvent("quote", { detail: `Quote request, ${plan.tier}: ${plan.name}` }));
};

const RateSection = () => (
  <section id="rates" className="band">
    <div className="wrap">
      <div className="head reveal">
        <span className="eyebrow">Pricing</span>
        <h2>My rates.</h2>
        <p className="lede">
          Straightforward packages to fit different project needs. Every project starts with a free consultation to scope
          things out.
        </p>
      </div>
      <div className="plans reveal">
        {plans.map((plan) => (
          <div className={plan.popular ? "plan pop" : "plan"} key={plan.tier}>
            <div className="tier">
              {plan.tier} {plan.popular && <em>Most popular</em>}
            </div>
            <h3>{plan.name}</h3>
            {plan.custom ? (
              <div>
                <div className="price">Custom</div>
                <div className="php">Quoted per project</div>
              </div>
            ) : (
              <div>
                <div className="price">
                  {plan.cad}
                  <small>CAD</small>
                </div>
                <div className="php">≈ {plan.php} PHP</div>
              </div>
            )}
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a className={plan.popular ? "btn primary" : "btn"} href="#contact" onClick={() => pickPlan(plan)}>
              Get a quote
            </a>
          </div>
        ))}
      </div>
      <p className="note">
        Final pricing may vary based on project scope, timeline, and features required. Custom quotes are available for
        projects that don't fit neatly into a package.
      </p>
    </div>
  </section>
);

export default RateSection;
