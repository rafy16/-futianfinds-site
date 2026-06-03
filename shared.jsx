/* ============================================================
   FutianFinds — Shared components (Icons, Logo, Nav, Footer)
   Exported to window so individual page scripts can use them.
   ============================================================ */

const { useState, useEffect } = React;

/* ============================================================
   Brand contact + video constants (single source of truth)
   ============================================================ */
const CONTACT = {
  whatsappUrl: "https://wa.me/8619548858435",
  whatsappDisplay: "+86 195 4885 8435",
  email: "info@lunofy.com",
  mailto: "mailto:info@lunofy.com",
};

/* YouTube Shorts — real footage from the market floor */
const VIDEOS = [
  { id: "lSj11EPjAVk", title: "Inside Futian Market", sub: "District walkthrough · Yiwu" },
  { id: "PR4Jhh8hdn0", title: "Supplier negotiation", sub: "Live booth visit" },
  { id: "lCAr1ZOM_4o", title: "Sample inspection", sub: "Quality check on camera" },
  { id: "K3ykeVcrl6s", title: "Sourcing run", sub: "Booth to booth" },
  { id: "FzOqPhXL4WU", title: "On the ground in Yiwu", sub: "What we film for you" },
];

/* A single vertical YouTube Short, rendered in a 9:16 card */
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
  Plus: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Minus: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/>
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
  Dollar: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  WhatsApp: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.85.98h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.4-5.62zM12.06 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.6 6.6 0 1 1 12.2-3.48 6.6 6.6 0 0 1-6.6 6.57zm3.62-4.94c-.2-.1-1.17-.58-1.35-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.35.05-.53.25s-.7.68-.7 1.66.71 1.93.81 2.06c.1.13 1.4 2.14 3.4 3 .47.21.84.33 1.13.42.48.15.91.13 1.25.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z"/>
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Package: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16.5 9.4 7.55 4.24"/>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  Search: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Truck: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  Send: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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
  Facebook: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  TikTok: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 17a3 3 0 1 0 3-3V4c1 2 2.5 3 5 3"/>
    </svg>
  ),
  X: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 4l16 16M20 4L4 20"/>
    </svg>
  ),
};

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

const NAV_LINKS = [
  { label: "How It Works", href: "How It Works.html", key: "how" },
  { label: "Packages", href: "Services.html", key: "services" },
  { label: "About", href: "About.html", key: "about" },
  { label: "FAQ", href: "FAQ.html", key: "faq" },
  { label: "Contact", href: "Contact.html", key: "contact" },
];

function Nav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav" data-screen-label="01 Nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="https://account.futianfinds.com" className="nav-login">Login</a>
          <a href="https://wa.me/8619548858435" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Get Started <Icon.ArrowRight /></a>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="https://account.futianfinds.com" onClick={() => setOpen(false)}>Login</a>
          <a href="https://wa.me/8619548858435" target="_blank" rel="noopener" className="btn btn-primary" onClick={() => setOpen(false)}>Get Started <Icon.ArrowRight /></a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer" data-screen-label="99 Footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo small />
            <p className="footer-blurb">A boots-on-the-ground sourcing service for Amazon FBA, Shopify D2C, and wholesale importers. Based in Yiwu, China.</p>
            <div className="socials">
              <a href="https://www.instagram.com/futianfinds" target="_blank" rel="noopener" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61590800181843" target="_blank" rel="noopener" aria-label="Facebook"><Icon.Facebook /></a>
              <a href="https://x.com/findsfutian" target="_blank" rel="noopener" aria-label="X (Twitter)"><Icon.X /></a>
              <a href="https://www.tiktok.com/@futianfinds" target="_blank" rel="noopener" aria-label="TikTok"><Icon.TikTok /></a>
              <a href="https://www.youtube.com/@futianfinds" target="_blank" rel="noopener" aria-label="YouTube"><Icon.YouTube /></a>
              <a href="https://www.linkedin.com/in/raif-hella%C3%A7-363505326/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.LinkedIn /></a>
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
              <li><a href={CONTACT.mailto}>{CONTACT.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="legal-line">FutianFinds is a service of Lunofy LLC · info@lunofy.com · WhatsApp +86 195 4885 8435 · Yiwu, China</div>
        <div className="copyright">
          <div>© 2026 FutianFinds Sourcing Co. Ltd · Yiwu, Zhejiang, China</div>
          <div className="right">
            <a href="https://checkout.shopify.com/84142489840/policies/45847740656.html?locale=en" target="_blank" rel="noopener">Terms</a>
            <a href="https://checkout.shopify.com/84142489840/policies/45710803184.html?locale=en" target="_blank" rel="noopener">Privacy</a>
            <a href="https://checkout.shopify.com/84142489840/policies/45847675120.html?locale=en" target="_blank" rel="noopener">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageHero({ eyebrow, title, sub, page }) {
  return (
    <section className="page-hero" data-screen-label="02 Page Hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <span style={{color: "rgba(255,255,255,0.85)"}}>{page}</span>
        </div>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}

function FinalCTA({ title = "Ready to Source Smarter?", sub = "One product. Forty-eight hours. Real video from the market floor. If you don't love the report, we send the money back.", primaryLabel = "Start With Scout — $99", primaryHref = "Services.html", secondaryLabel = "How It Works", secondaryHref = "How It Works.html" }) {
  return (
    <section className="final-cta" data-screen-label="98 Final CTA">
      <div className="container final-cta-inner">
        <span className="eyebrow" style={{color: "var(--orange)"}}>Let's go</span>
        <h2>{title}</h2>
        <p>{sub}</p>
        <div className="final-cta-row">
          <a href={primaryHref} {...(/^https?:/.test(primaryHref) ? { target: "_blank", rel: "noopener" } : {})} className="btn btn-primary">{primaryLabel} <Icon.ArrowRight /></a>
          {secondaryLabel && <a href={secondaryHref} {...(/^https?:/.test(secondaryHref) ? { target: "_blank", rel: "noopener" } : {})} className="btn btn-outline-light">{secondaryLabel}</a>}
        </div>
        <div className="note">
          <Icon.Pin width="14" height="14" /> Based in Yiwu, China · We source, we film, we deliver
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Icon, Logo, Nav, Footer, PageHero, FinalCTA, NAV_LINKS, CONTACT, VIDEOS, ShortCard });
