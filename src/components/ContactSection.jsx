import { useEffect, useState } from "react";
import { EMAIL, PHONE, LINKEDIN } from "../data";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
  };
  return (
    <button className="copy" type="button" onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const empty = { name: "", email: "", subject: "", message: "", "bot-field": "" };

const Contact = () => {
  const [fields, setFields] = useState(empty);
  const [status, setStatus] = useState({ kind: "", text: "" });
  const [sending, setSending] = useState(false);

  // The "Get a quote" buttons in the rates section send the chosen package here.
  useEffect(() => {
    const onQuote = (e) => setFields((f) => ({ ...f, subject: e.detail }));
    window.addEventListener("quote", onQuote);
    return () => window.removeEventListener("quote", onQuote);
  }, []);

  const change = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  // Posts to Netlify Forms. Needs form detection enabled in the Netlify dashboard.
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ kind: "", text: "Sending…" });
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...fields }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setFields(empty);
      setStatus({ kind: "ok", text: "Message sent. I will reply by email." });
    } catch {
      setStatus({ kind: "err", text: `The message could not be sent. Please email me directly at ${EMAIL}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="band">
      <div className="wrap contact">
        <div className="reveal">
          <span className="eyebrow">Let's connect</span>
          <h2 style={{ marginTop: 14 }}>Have a project in mind?</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            I'm always interested in hearing about new opportunities, collaborations, and exciting projects. Reach out
            through any of these.
          </p>
          <ul className="ways">
            <li>
              <span className="k">Email</span>
              <a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <CopyButton text={EMAIL} />
            </li>
            <li>
              <span className="k">Phone</span>
              <a className="v" href="tel:+639691292138">{PHONE}</a>
              <CopyButton text={PHONE} />
            </li>
            <li>
              <span className="k">LinkedIn</span>
              <a className="v" href={LINKEDIN} target="_blank" rel="noopener noreferrer">john-isaac-apolinar ↗</a>
            </li>
            <li>
              <span className="k">Location</span>
              <span className="v">Tarlac, Philippines</span>
            </li>
          </ul>
        </div>
        <form name="contact" className="reveal" onSubmit={submit}>
          <p hidden>
            <label>
              Leave this empty <input name="bot-field" value={fields["bot-field"]} onChange={change} />
            </label>
          </p>
          <div className="row">
            <label htmlFor="name">
              Name
              <input id="name" name="name" autoComplete="name" placeholder="Your name" value={fields.name} onChange={change} required />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" value={fields.email} onChange={change} required />
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input id="subject" name="subject" placeholder="What do you need built?" value={fields.subject} onChange={change} required />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" placeholder="Tell me about the project, timeline, and budget." value={fields.message} onChange={change} required />
          </label>
          <button className="btn primary" type="submit" disabled={sending}>
            Send message
          </button>
          <div id="formMsg" className={status.kind} role="status" aria-live="polite">
            {status.text}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
