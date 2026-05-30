const { useState: useStateCT } = React;

const DEFAULT_FORM = {
  name: "", email: "", company: "", interest: "SmallBatch ($299 + commission)", productType: "", budget: "Under $5,000", message: ""
};

/* ---------- CONTACT FORM ---------- */
function ContactForm() {
  const [form, setForm] = useStateCT(DEFAULT_FORM);
  const [errors, setErrors] = useStateCT({});
  const [submitted, setSubmitted] = useStateCT(false);

  function update(key, val) {
    setForm({ ...form, [key]: val });
    if (errors[key]) setErrors({ ...errors, [key]: null });
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Hmm, that email looks off";
    if (!form.message.trim() || form.message.trim().length < 12) e.message = "A little more detail would help (12+ chars)";
    return e;
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-card">
        <div className="form-success">
          <div className="ic"><Icon.Check width="32" height="32" /></div>
          <h3>Got it — message received.</h3>
          <p>
            We'll reply within 3 business hours (Yiwu time, GMT+8).<br/>
            In the meantime, check your inbox for our intake questionnaire.
          </p>
          <div style={{display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap"}}>
            <button className="btn btn-ghost-dark" onClick={() => { setSubmitted(false); setForm(DEFAULT_FORM); }}>
              Send another
            </button>
            <a href="FAQ.html" className="btn btn-outline-dark">Read the FAQ</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="btn btn-whatsapp btn-block wa-btn">
        <Icon.WhatsApp /> Message us on WhatsApp
      </a>
      <div className="wa-or"><span>Or fill out the form below</span></div>

      <h2>Tell us about your product.</h2>
      <p className="sub">The more detail, the faster we can scope it. Replies within 3 business hours.</p>

      <div className="form-row split">
        <div>
          <label>Name <span className="req">*</span></label>
          <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)}
                 className={errors.name ? "error" : ""} placeholder="Jane Smith" />
          {errors.name && <div className="err-msg">{errors.name}</div>}
        </div>
        <div>
          <label>Email <span className="req">*</span></label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                 className={errors.email ? "error" : ""} placeholder="jane@brand.com" />
          {errors.email && <div className="err-msg">{errors.email}</div>}
        </div>
      </div>

      <div className="form-row split">
        <div>
          <label>Company / brand</label>
          <input type="text" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Goods Co." />
        </div>
        <div>
          <label>I'm interested in</label>
          <select value={form.interest} onChange={(e) => update("interest", e.target.value)}>
            <option>Insider ($19.99/mo)</option>
            <option>Scout ($99)</option>
            <option>SmallBatch ($299 + commission)</option>
            <option>FullScale ($599 + commission)</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="form-row split">
        <div>
          <label>Product category</label>
          <input type="text" value={form.productType} onChange={(e) => update("productType", e.target.value)} placeholder="e.g. kitchen gadgets, pet toys" />
        </div>
        <div>
          <label>Order budget (estimate)</label>
          <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
            <option>Under $5,000</option>
            <option>$5,000 – $20,000</option>
            <option>$20,000 – $50,000</option>
            <option>$50,000 – $200,000</option>
            <option>$200,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <label>Tell us about the product <span className="req">*</span></label>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)}
                  className={errors.message ? "error" : ""}
                  placeholder="What you're sourcing, target price, MOQ, any reference links — the more, the better." />
        {errors.message && <div className="err-msg">{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Send Message <Icon.Send />
      </button>
      <div className="form-fine">
        By submitting, you agree to our <a href="#">Privacy Policy</a>. We'll never share your info or send marketing emails.
      </div>
    </form>
  );
}

/* ---------- SIDE PANEL ---------- */
function SidePanel() {
  return (
    <div className="side-stack">
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="side-card featured" style={{display: "block"}}>
        <div className="sc-head">
          <span className="ic" style={{background: "rgba(37,211,102,0.2)", color: "#25d366"}}><Icon.WhatsApp /></span>
          <h3>WhatsApp us</h3>
        </div>
        <p>The quickest way to reach our team directly. Typical reply: within an hour during Yiwu daytime hours.</p>
        <span className="row-link" style={{color: "var(--orange)"}}>{CONTACT.whatsappDisplay} <Icon.ArrowRight /></span>
      </a>

      <a href={CONTACT.mailto} className="side-card" style={{display: "block"}}>
        <div className="sc-head">
          <span className="ic"><Icon.Mail /></span>
          <h3>Email</h3>
        </div>
        <p>For longer briefs, NDAs, or anything not urgent. Reply within 3 business hours.</p>
        <span className="row-link">{CONTACT.email} <Icon.ArrowRight /></span>
      </a>

      <a href="FAQ.html" className="side-card" style={{display: "block"}}>
        <div className="sc-head">
          <span className="ic"><Icon.Search /></span>
          <h3>Prefer to read first?</h3>
        </div>
        <p>Pricing, shipping, MOQs, QC, refunds — we've answered the questions we hear most.</p>
        <span className="row-link">Read the FAQ <Icon.ArrowRight /></span>
      </a>
    </div>
  );
}

/* ---------- CONTACT MAIN ---------- */
function ContactMain() {
  return (
    <section className="contact-main" data-screen-label="03 Contact">
      <div className="container">
        <div className="contact-grid">
          <ContactForm />
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  // Yiwu (GMT+8) — figure out if we're in business hours: 9am–7pm Mon–Sat
  const now = new Date();
  const yiwuHour = (now.getUTCHours() + 8) % 24;
  const yiwuDay = (now.getUTCDay() + (now.getUTCHours() + 8 >= 24 ? 1 : 0)) % 7; // rough
  const isLive = yiwuDay !== 0 && yiwuHour >= 9 && yiwuHour < 19;

  return (
    <section className="location" data-screen-label="05 Location">
      <div className="container">
        <div className="loc-grid">
          <div className="loc-info">
            <span className="eyebrow">Based in Yiwu</span>
            <h2>The world's largest small-commodity market is our office.</h2>
            <p>We're 10 minutes from Futian Market, in Zhejiang Province, eastern China. Our team operates on GMT+8 — that's a 12-hour difference from US Eastern, 7 hours from London, 5 hours from Istanbul.</p>
            <div className="loc-meta">
              <div><div className="k">Address</div><div className="v">Yiwu, Zhejiang<br/>China, 322000</div></div>
              <div><div className="k">Hours</div><div className="v">Mon–Sat<br/>9am – 7pm GMT+8</div></div>
              <div><div className="k">Reply Time</div><div className="v">~3 business hours</div></div>
              <div><div className="k">Right Now</div><div className="v">
                {isLive ? (
                  <span className="live-now"><span className="dot"></span>We're in the office</span>
                ) : (
                  <span className="live-now" style={{color: "var(--muted)", background: "rgba(107,123,141,0.10)", borderColor: "rgba(107,123,141,0.3)"}}>
                    <span className="dot" style={{background: "var(--muted)"}}></span>Outside Yiwu hours
                  </span>
                )}
              </div></div>
            </div>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="btn btn-primary">
              <Icon.WhatsApp /> Message us on WhatsApp
            </a>
          </div>
          <div className="loc-map">
            <div className="pin-ic"><Icon.Pin width="28" height="28" /></div>
            <div>[ INTERACTIVE MAP — Yiwu, Zhejiang<br/>Replace with Google Maps embed<br/>or static screenshot ]</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <>
      <Nav active="contact" />
      <PageHero
        page="Contact"
        title="Let's get your product sourced."
        sub="Send us a WhatsApp or fill out the form — whichever's easier. We reply within 3 business hours."
      />
      <ContactMain />
      <Location />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
