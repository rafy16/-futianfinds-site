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
  { id: "K3ykeVcrl6s", title: "Sourcing run", sub: "Booth to booth · Yiwu" },
  { id: "lSj11EPjAVk", title: "Inside Futian Market", sub: "District walkthrough" },
  { id: "PR4Jhh8hdn0", title: "Supplier negotiation", sub: "Live booth visit" },
];

/* ============================================================
   PACKAGES — same detailed cards as the Services page
   ============================================================ */
const PACKAGES = [
  {
    tier: "Insider", tagline: "Daily deal flow", price: "19.99", unit: "/ mo",
    alt: "Subscription · cancel anytime",
    altLinks: [{ label: "Save 38% — $149/year", sub: { variantId: "gid://shopify/ProductVariant/49775020671216", sellingPlanId: "gid://shopify/SellingPlan/7778894064" } }],
    pricesub: "Membership · billed monthly",
    features: [
      "Daily supplier drops on WhatsApp",
      "Private members-only group",
      "Short video clips of fresh finds",
      "Weekly market trend report",
      "15% off every Scout report",
      "Priority queue for SmallBatch & FullScale",
    ],
    policy: "Auto-renews monthly · cancel anytime · 3-day payment grace, then removed from the group · no refunds.",
    cta: "Join Insider — $19.99/mo", sub: { variantId: "gid://shopify/ProductVariant/49775020638448", sellingPlanId: "gid://shopify/SellingPlan/7778861296" }, featured: false,
  },
  {
    tier: "Scout", tagline: "Test one product", price: "99", unit: "/ product",
    alt: "Bundle & save — multi-product packs",
    altLinks: [
      { label: "3 products — $249", href: "https://gsr4fx-wg.myshopify.com/cart/49775020769520:1" },
      { label: "5 products — $399", href: "https://gsr4fx-wg.myshopify.com/cart/49775020802288:1" },
    ],
    pricesub: "One-time · 48-hour delivery",
    features: [
      "3 verified suppliers",
      "HD video shoot of each",
      "Product info form — MOQ, price, lead time, customization",
      "48-hour turnaround",
    ],
    notIncluded: "Detailed landed-cost estimate (offered in higher tiers)",
    policy: "Don't like round one? Round two is free. No refund after round two. 100% refund if the product isn't in the market. No refund requests once the report is delivered.",
    cta: "Start with Scout — 1 product", href: "https://gsr4fx-wg.myshopify.com/cart/49775020736752:1", featured: false,
  },
  {
    tier: "SmallBatch", tagline: "Most popular", price: "299", unit: "+ commission",
    alt: "Minimum order value $1,000",
    pricesub: "Setup fee · FOB commission applies",
    features: [
      "Everything in Scout",
      "Sample sourcing & shipping",
      "Target-price negotiation",
      "Brand & packaging review",
      "1-on-1 WhatsApp line",
      "Shipping coordination",
      "Order management",
    ],
    commission: "FOB commission: 10% / 8% / 6% by order size.",
    policy: "15-day decision window — after that the $299 setup fee is non-refundable. Samples + freight billed separately. Factory-visit costs separate, only with your approval.",
    cta: "Start SmallBatch — $299", href: "https://gsr4fx-wg.myshopify.com/cart/49775020867824:1", featured: true,
  },
  {
    tier: "FullScale", tagline: "Full done-for-you", price: "599", unit: "+ commission",
    alt: "$599 fully refunded once your order is confirmed",
    pricesub: "Setup fee · refunded on order",
    features: [
      "Everything in SmallBatch",
      "Factory visit (if needed)",
      "Full production management",
      "QC inspection (AQL)",
      "China customs & export",
      "International shipping coordination",
      "Dedicated project manager",
    ],
    commission: "FOB commission: 8% / 6% / 4% by order size.",
    policy: "15-day decision window. $599 fully refunded if you place the order, non-refundable if you don't. Factory-visit costs separate.",
    cta: "Go FullScale — $599", href: "https://gsr4fx-wg.myshopify.com/cart/49775021031664:1", featured: false,
  },
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
  ArrowDown: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="6 13 12 19 18 13"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="4 12 10 18 20 6"/>
    </svg>
  ),
  Dollar: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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
  WhatsApp: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.85.98h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.4-5.62zM12.06 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.6 6.6 0 1 1 12.2-3.48 6.6 6.6 0 0 1-6.6 6.57zm3.62-4.94c-.2-.1-1.17-.58-1.35-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.35.05-.53.25s-.7.68-.7 1.66.71 1.93.81 2.06c.1.13 1.4 2.14 3.4 3 .47.21.84.33 1.13.42.48.15.91.13 1.25.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z"/>
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
    <a href="/" className="logo" aria-label="FutianFinds home">
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
          <a href="https://account.futianfinds.com" className="nav-login">Login</a>
          <a href="#packages" className="btn btn-primary btn-sm">See Packages <Icon.ArrowDown /></a>
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
          <a href="https://account.futianfinds.com" onClick={() => setOpen(false)}>Login</a>
          <a href="#packages" className="btn btn-primary" onClick={() => setOpen(false)}>See Packages <Icon.ArrowDown /></a>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO (compact) ---------- */
function Hero() {
  const trust = ["Based in Yiwu since 2024", "Video proof on every project", "75,000+ suppliers accessible"];
  return (
    <section className="hero hero-compact" data-screen-label="02 Hero">
      <div className="container hero-inner">
        <span className="badge">
          <span className="dot"></span>
          Real videos from Futian Market
        </span>
        <h1>
          We Source It. We Film It. <span className="accent">You Decide.</span>
        </h1>
        <p className="hero-sub">
          Product research, supplier negotiation, and quality control — all from our team on the ground in Yiwu, China.
        </p>
        <div className="hero-ctas">
          <a href="#packages" className="btn btn-primary">
            See Our Packages <Icon.ArrowDown />
          </a>
          <a href="#work" className="btn btn-outline-light">
            <Icon.Play width="16" height="16" /> Watch Our Videos
          </a>
        </div>
        <div className="hero-trustbar">
          {trust.map((t, i) => (
            <React.Fragment key={t}>
              {i > 0 && <span className="sep">·</span>}
              <span className="ht-item"><Icon.Check width="15" height="15" />{t}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSIDER SUBSCRIPTION (Storefront API) ---------- */
async function startInsiderSubscription(variantId, sellingPlanId) {
  try {
    const res = await fetch('https://gsr4fx-wg.myshopify.com/api/2026-04/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '2656bc17d8cf37434d3f5d9af821c301'
      },
      body: JSON.stringify({
        query: `mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart { checkoutUrl }
            userErrors { field message }
          }
        }`,
        variables: {
          input: { lines: [{ merchandiseId: variantId, quantity: 1, sellingPlanId: sellingPlanId }] }
        }
      })
    });
    const data = await res.json();
    const url = data?.data?.cartCreate?.cart?.checkoutUrl;
    if (url) { window.location.href = url; }
    else { console.error('Cart error', data); alert('Bir sorun oluştu, lütfen tekrar deneyin.'); }
  } catch (e) { console.error(e); alert('Bağlantı hatası, lütfen tekrar deneyin.'); }
}

/* ---------- PACKAGES ---------- */
function Packages() {
  return (
    <section className="section packages" id="packages" data-screen-label="03 Packages">
      <div className="container">
        <div className="section-head" style={{textAlign: "center"}}>
          <span className="eyebrow">Packages</span>
          <h2>Simple pricing. Pick your stage.</h2>
          <p style={{margin: "0 auto"}}>From daily deal flow at $19.99/mo to a full done-for-you order. No factory kickbacks — commission only on the FOB product value.</p>
        </div>
        <div className="pricing-grid">
          {PACKAGES.map((p) => (
            <div className={"price-card" + (p.featured ? " featured" : "")} key={p.tier}>
              {p.featured && <span className="featured-tag">Most Popular</span>}
              <div className="tier">{p.tier}</div>
              <div className="tagline">{p.tagline}</div>
              <div className="price">
                <span className="currency">$</span>{p.price}<span className="unit">{p.unit}</span>
              </div>
              {p.alt && <div className="price-alt">{p.alt}</div>}
              <div className="pricesub">{p.pricesub}</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><span className="check"><Icon.Check /></span>{f}</li>
                ))}
              </ul>
              {p.notIncluded && <div className="not-incl"><strong>Not included:</strong> {p.notIncluded}</div>}
              {p.commission && <div className="comm-hint"><Icon.Dollar width="15" height="15" /> {p.commission}</div>}
              {p.sub ? (
                <button type="button" className={"btn btn-block " + (p.featured ? "btn-primary" : "btn-ghost-dark")} onClick={() => startInsiderSubscription(p.sub.variantId, p.sub.sellingPlanId)}>
                  {p.cta} <Icon.ArrowRight />
                </button>
              ) : (
                <a className={"btn btn-block " + (p.featured ? "btn-primary" : "btn-ghost-dark")} href={p.href} target="_blank" rel="noopener">
                  {p.cta} <Icon.ArrowRight />
                </a>
              )}
              {p.altLinks && (
                <div className="alt-links">
                  {p.altLinks.map((a) => (
                    a.sub ? (
                      <button type="button" key={a.label} onClick={() => startInsiderSubscription(a.sub.variantId, a.sub.sellingPlanId)}>{a.label} <Icon.ArrowRight width="14" height="14" /></button>
                    ) : (
                      <a key={a.href} href={a.href} target="_blank" rel="noopener">{a.label} <Icon.ArrowRight width="14" height="14" /></a>
                    )
                  ))}
                </div>
              )}
              <div className="policy-note">{p.policy}</div>
            </div>
          ))}
        </div>
        <div className="packages-foot">
          <span className="currency-note">
            <Icon.Dollar width="15" height="15" />
            All prices in <strong>USD</strong>. Commission is on the FOB product value only — shipping never included.
          </span>
          <a href="Services.html" className="view-details">View full details <Icon.ArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- VIDEO STRIP ---------- */
function VideoStrip() {
  return (
    <section className="section work" id="work" data-screen-label="04 Videos">
      <div className="container">
        <div className="section-head on-dark" style={{textAlign: "center"}}>
          <span className="eyebrow">Watch</span>
          <h2>Straight from the market floor.</h2>
          <p style={{margin: "0 auto"}}>Every supplier visit is filmed. This is the kind of footage you get with every project.</p>
        </div>
        <div className="short-grid work-grid">
          {VIDEOS.map((v) => (
            <ShortCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="final-cta" data-screen-label="05 CTA">
      <div className="container final-cta-inner">
        <span className="eyebrow" style={{color: "var(--orange)"}}>Let's go</span>
        <h2>Ready to source smarter?</h2>
        <p>Message us on WhatsApp — we reply within an hour during Yiwu business hours.</p>
        <div className="final-cta-row">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="btn btn-whatsapp">
            <Icon.WhatsApp width="18" height="18" /> WhatsApp Us <Icon.ArrowRight />
          </a>
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
              <li><a href="https://account.futianfinds.com">Login</a></li>
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
      <Packages />
      <VideoStrip />
      <FinalCTA />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
