const { useState } = React;

/* ============================================================
   Brand contact + video constants
   ============================================================ */
const CONTACT = {
  whatsappUrl: "https://wa.me/8619548858435",
  whatsappDisplay: "+86 195 4885 8435",
  email: "info@lunofy.com",
};

const VIDEOS = [
  { id: "lSj11EPjAVk", title: "Inside Futian Market", sub: "District walkthrough · Yiwu" },
  { id: "PR4Jhh8hdn0", title: "Supplier negotiation", sub: "Live booth visit" },
  { id: "lCAr1ZOM_4o", title: "Sample inspection", sub: "Quality check on camera" },
  { id: "K3ykeVcrl6s", title: "Sourcing run", sub: "Booth to booth" },
  { id: "FzOqPhXL4WU", title: "On the ground in Yiwu", sub: "What we film for you" },
];

/* ---------- ICONS ---------- */
const Icon = {
  Pin: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s-7-7.58-7-13a7 7 0 0 1 14 0c0 5.42-7 13-7 13z"/>
      <circle cx="12" cy="9" r="2.6"/>
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="13 6 19 12 13 18"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="4 12 10 18 20 6"/>
    </svg>
  ),
  Menu: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <line x1="4" y1="7" x2="20" y2="7"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="17" x2="20" y2="17"/>
    </svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <line x1="6" y1="6" x2="18" y2="18"/>
      <line x1="18" y1="6" x2="6" y2="18"/>
    </svg>
  ),
  Camera: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  Map: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  YouTube: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
};

/* ---------- SHORT CARD ---------- */
function ShortCard({ video }) {
  return (
    <figure className="short-card">
      <div className="short-frame">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?rel=0&playsinline=1&modestbranding=1`}
          title={video.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <figcaption>
        <span className="st-title">{video.title}</span>
        <span className="st-sub">{video.sub}</span>
      </figcaption>
    </figure>
  );
}

/* ---------- LOGO ---------- */
function Logo({ small }) {
  return (
    <a href="FutianFinds Homepage.html" className="logo" aria-label="FutianFinds home">
      <span className="pin"><Icon.Pin /></span>
      <span className="logo-stack">
        <span>
          Futian<span className="finds">Finds</span>
        </span>
        {!small && <span className="tag">SOURCE IT · SEE IT · SHIP IT</span>}
      </span>
    </a>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "How It Works", href: "How It Works.html" },
    { label: "Packages", href: "Services.html" },
    { label: "About", href: "About.html" },
    { label: "FAQ", href: "FAQ.html" },
    { label: "Contact", href: "Contact.html" },
  ];
  return (
    <header className="nav" data-screen-label="01 Nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="Contact.html" className="btn btn-primary btn-sm">Get Started <Icon.ArrowRight /></a>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="Contact.html" className="btn btn-primary" onClick={() => setOpen(false)}>Get Started <Icon.ArrowRight /></a>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const featured = VIDEOS[0];
  return (
    <section className="hero" data-screen-label="02 Hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">
            <span className="dot"></span>
            Real videos from Futian Market
          </span>
          <h1>
            We Source It.<br/>
            We Film It.<br/>
            <span className="accent">You Decide.</span>
          </h1>
          <p className="hero-sub">
            Product research, supplier negotiation, and quality control — all from our team on the ground in Yiwu, China.
          </p>
          <div className="hero-ctas">
            <a href="Services.html" className="btn btn-primary">
              See Our Packages <Icon.ArrowRight />
            </a>
            <a href="#work" className="btn btn-outline-light">
              <Icon.Play width="16" height="16" /> Watch Our Finds
            </a>
          </div>
          <div className="hero-trust">
            <span className="stars">★★★★★</span>
            <span>Filming every supplier visit, booth by booth</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-video">
            <span className="live-tag"><span className="pulse"></span>REAL FOOTAGE</span>
            <iframe
              src={`https://www.youtube.com/embed/${featured.id}?rel=0&playsinline=1&modestbranding=1`}
              title={featured.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hero-meta">
            <div>
              <div className="title">{featured.title}</div>
              <div className="sub">{featured.sub}</div>
            </div>
            <a className="duration" href="#work">More finds ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = [
    { ic: <Icon.Pin />, text: "Based in Yiwu since 2024" },
    { ic: <Icon.Camera />, text: "Video proof on every project" },
    { ic: <Icon.Map />, text: "75,000+ suppliers accessible" },
  ];
  return (
    <section className="trust-bar" data-screen-label="03 Trust Bar">
      <div className="container">
        <div className="trust-grid">
          {items.map((it) => (
            <div className="trust-item" key={it.text}>
              <span className="trust-ic">{it.ic}</span>
              <span>{it.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Tell Us What You Need",
      body: "Share your product idea, target price, MOQ, and any reference links. We'll confirm scope within 24 hours.",
      bullets: ["Free discovery chat", "Niche & competitor brief", "Target landed cost range"],
    },
    {
      n: "2",
      title: "We Hit the Market",
      body: "Our team walks Futian Market in person — filming booths, negotiating prices, collecting samples. No middlemen.",
      bullets: ["Live video from every supplier", "3+ quotes per product", "Sample shipped to your door"],
    },
    {
      n: "3",
      title: "You Get the Report",
      body: "A full sourcing report with videos, supplier profiles, prices and MOQs, plus our recommendation. You decide.",
      bullets: ["Video + info-form deliverables", "MOQ, price & lead time", "QC checklist before shipment"],
    },
  ];
  return (
    <section className="section how" id="how" data-screen-label="04 How It Works">
      <div className="container">
        <div className="section-head" style={{textAlign: "center"}}>
          <span className="eyebrow">How it works</span>
          <h2>Three steps. Zero guesswork.</h2>
          <p style={{margin: "0 auto"}}>From product brief to a vetted supplier with video evidence — usually within a week.</p>
        </div>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}><span className="check"><Icon.Check /></span>{b}</li>
                ))}
              </ul>
              {i < steps.length - 1 && <div className="arrow-step"><Icon.ArrowRight /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SAVINGS (Before / After) ---------- */
function Savings() {
  const rows = [
    { name: "Product A", before: 45.00, after: 8.50, save: 81 },
    { name: "Product B", before: 28.00, after: 6.20, save: 78 },
    { name: "Product C", before: 62.00, after: 14.00, save: 77 },
  ];
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <section className="section savings" data-screen-label="05 Savings">
      <div className="container">
        <div className="section-head" style={{textAlign: "center"}}>
          <span className="eyebrow">The math</span>
          <h2>Real savings from real sourcing.</h2>
          <p style={{margin: "0 auto"}}>What sellers pay on Amazon versus what the same product costs sourced directly from Yiwu.</p>
        </div>
        <div className="savings-grid">
          {rows.map((r) => (
            <div className="savings-card" key={r.name}>
              <div className="sv-name">{r.name}</div>
              <div className="sv-row">
                <div className="sv-side before">
                  <span className="sv-label">Amazon</span>
                  <span className="sv-price">{fmt(r.before)}</span>
                </div>
                <span className="sv-arrow"><Icon.ArrowRight /></span>
                <div className="sv-side after">
                  <span className="sv-label">Yiwu</span>
                  <span className="sv-price">{fmt(r.after)}</span>
                </div>
              </div>
              <div className="sv-save">{r.save}% savings</div>
            </div>
          ))}
        </div>
        <p className="savings-note">Example figures shown — real client comparisons will appear here as projects complete.</p>
      </div>
    </section>
  );
}

/* ---------- SEE OUR WORK ---------- */
function SeeOurWork() {
  return (
    <section className="section work" id="work" data-screen-label="06 See Our Work">
      <div className="container">
        <div className="section-head on-dark" style={{textAlign: "center"}}>
          <span className="eyebrow">See our work</span>
          <h2>Straight from the market floor.</h2>
          <p style={{margin: "0 auto"}}>Every supplier visit is filmed. This is the kind of footage you get with every project.</p>
        </div>
        <div className="short-grid work-grid">
          {VIDEOS.slice(1).map((v) => (
            <ShortCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDING CLIENT CTA ---------- */
function FoundingClient() {
  return (
    <section className="founding" data-screen-label="07 Founding Client">
      <div className="container">
        <div className="founding-card">
          <span className="founding-badge"><span className="dot"></span>Founding clients · only 10 spots</span>
          <h2>Be one of our first 10 clients.</h2>
          <p>
            Get <strong>20% off any package</strong> — and have your testimonial featured right here on our site.
            We're new, we're hungry, and we'll treat your first order like it's our own.
          </p>
          <div className="founding-ctas">
            <a href="Contact.html" className="btn btn-primary">Claim your spot <Icon.ArrowRight /></a>
            <a href="Services.html" className="btn btn-outline-light">See Packages</a>
          </div>
          <div className="founding-note">
            <Icon.Pin width="14" height="14" /> Based in Yiwu, China · We source, we film, we deliver
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="footer" data-screen-label="99 Footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo small />
            <p className="footer-blurb">A boots-on-the-ground sourcing service for Amazon FBA, Shopify D2C, and wholesale importers. Based in Yiwu, China.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="#" aria-label="YouTube"><Icon.YouTube /></a>
              <a href="#" aria-label="LinkedIn"><Icon.LinkedIn /></a>
            </div>
          </div>
          <div>
            <h4>Packages</h4>
            <ul>
              <li><a href="Services.html">Insider — $19.99/mo</a></li>
              <li><a href="Services.html">Scout — $99</a></li>
              <li><a href="Services.html">SmallBatch — $299 +</a></li>
              <li><a href="Services.html">FullScale — $599 +</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="About.html">About the Team</a></li>
              <li><a href="How It Works.html">How It Works</a></li>
              <li><a href="Services.html">Packages</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="FAQ.html">FAQ</a></li>
              <li><a href="Contact.html">Contact</a></li>
              <li><a href={CONTACT.whatsappUrl} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div>© 2026 FutianFinds · Yiwu, Zhejiang, China</div>
          <div className="right">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Savings />
      <SeeOurWork />
      <FoundingClient />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
