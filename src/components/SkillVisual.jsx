// Small illustrated scenes for the top of each skills card, drawn with HTML and CSS
// so they stay sharp and follow the light and dark themes. Purely decorative.

const AssistantScene = () => (
  <div className="scene scene-va" aria-hidden="true">
    <div className="sc-card sc-chat">
      <div className="sc-label">Live chat</div>
      <div className="bubble in">Hi! Is my order on the way?</div>
      <div className="bubble out">Yes, it ships today. Tracking is in your inbox.</div>
      <div className="bubble in typing">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    <div className="sc-stack">
      <div className="sc-card sc-mail">
        <div className="sc-label">Inbox</div>
        <div className="mail-row">
          <span className="dot"></span>New client inquiry<span className="tag ok">Replied</span>
        </div>
        <div className="mail-row">
          <span className="dot"></span>Invoice #1042<span className="tag">Filed</span>
        </div>
        <div className="mail-row">
          <span className="dot"></span>Weekly newsletter<span className="tag">Sent</span>
        </div>
      </div>
      <div className="sc-card sc-call">
        <span className="call-ring"></span>
        <div>
          <b>Outbound call</b>
          <span>Follow-up · 03:12</span>
        </div>
      </div>
    </div>
  </div>
);

const WebScene = () => (
  <div className="scene scene-web" aria-hidden="true">
    <div className="sc-card sc-browser">
      <div className="bar">
        <i></i>
        <i></i>
        <i></i>
        <span className="url">yourbusiness.com</span>
      </div>
      <div className="page">
        <div className="hero-block">
          <span className="ln w70"></span>
          <span className="ln w45"></span>
          <span className="btn-pill"></span>
        </div>
        <div className="tiles">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div className="sc-card sc-code">
      <code>
        site.<span className="f">build</span>({"{"}
        <br />
        &nbsp;&nbsp;fast: <span className="v">true</span>,
        <br />
        &nbsp;&nbsp;mobile: <span className="v">true</span>
        <br />
        {"}"});
      </code>
    </div>
    <div className="sc-card sc-phone">
      <span className="notch"></span>
      <span className="ln w70"></span>
      <span className="ln w45"></span>
      <span className="blk"></span>
      <span className="blk"></span>
    </div>
  </div>
);

const SkillVisual = ({ kind }) => (kind === "web" ? <WebScene /> : <AssistantScene />);

export default SkillVisual;
