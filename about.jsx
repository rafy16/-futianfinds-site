/* ---------- BIO ---------- */
function Bio() {
  return (
    <section className="bio" data-screen-label="03 Bio">
      <div className="container">
        <div className="bio-grid">
          <div className="bio-photo">
            <span className="badge-corner">Based in Yiwu</span>
            <iframe
              className="bio-video"
              src="https://www.youtube.com/embed/K3ykeVcrl6s?rel=0&playsinline=1&modestbranding=1"
              title="FutianFinds — Inside Yiwu"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="name-tag">
              <div className="name">FutianFinds Team</div>
              <div className="role">Based in Yiwu, China</div>
            </div>
          </div>
          <div className="bio-content">
            <span className="eyebrow">Who we are</span>
            <h2>We source, we film, we deliver.</h2>
            <blockquote>
              Based in Yiwu, China — ten minutes from the world's largest wholesale market. We walk it for you, and we film every step.
            </blockquote>
            <p>
              FutianFinds is a small team of sourcing specialists, videographers, and quality-control people based in Yiwu. We came together in 2024 around one idea: buyers deserve to <strong>see exactly what they're buying</strong> before they wire a single cent.
            </p>
            <p>
              Between us we've sold on Amazon, run QC on factory floors, and filmed thousands of booths. We put all of that to work on the ground in Futian Market — researching products, negotiating prices, and shooting video proof for sellers across the US, UK, and Europe.
            </p>
            <p>
              We're deliberately small. We'd rather work closely with a handful of great clients than churn through hundreds. Right now we're taking on our <strong>first founding clients</strong> — and we'd love to hear about your product.
            </p>
            <div style={{display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap"}}>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="btn btn-primary"><Icon.WhatsApp /> Message us on WhatsApp</a>
              <a href="Services.html" className="btn btn-outline-dark">See Packages</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMELINE ---------- */
function StoryTimeline() {
  const items = [
    { yr: "2024", title: "The team forms", body: "Three of us — sourcing, QC, and video — set up base ten minutes from Futian Market in Yiwu." },
    { yr: "2024", title: "Video-first from day one", body: "We made a rule: every supplier visit gets filmed. No staged photos, no stock images, ever." },
    { yr: "2025", title: "Mapping the market", body: "Built relationships across Futian's 75,000+ booths — and the factories in Zhejiang and Guangdong behind them." },
    { yr: "2026", title: "Open for founding clients", body: "Now taking on our first 10 clients: 20% off any package, and your story featured right here." },
  ];
  return (
    <section className="section story-timeline" data-screen-label="04 Timeline">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">The story</span>
          <h2>How FutianFinds came together.</h2>
          <p>The short version, with dates.</p>
        </div>
        <div className="st-wrap">
          {items.map((it, i) => (
            <div className={"st-item " + (i % 2 === 0 ? "left" : "right")} key={it.title}>
              {i % 2 === 0 ? (
                <>
                  <div className="st-card">
                    <div className="yr">{it.yr}</div>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                  <div className="st-dot"></div>
                  <div className="empty"></div>
                </>
              ) : (
                <>
                  <div className="empty"></div>
                  <div className="st-dot"></div>
                  <div className="st-card">
                    <div className="yr">{it.yr}</div>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function StatsStrip() {
  const stats = [
    { num: "2024", lbl: "Founded in Yiwu" },
    { num: "75K+", lbl: "Suppliers Accessible" },
    { num: "100%", lbl: "Video Proof" },
    { num: "<24h", lbl: "Avg. Reply Time" },
  ];
  return (
    <section className="about-stats" data-screen-label="05 Stats">
      <div className="container">
        <div className="as-grid">
          {stats.map((s) => (
            <div className="as-item" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function Values() {
  const items = [
    { num: "01 / Honesty", title: "No factory kickbacks. Ever.", body: "We accept zero commission from suppliers — we're paid only by you, the buyer. That's the only way to keep negotiation real." },
    { num: "02 / Transparency", title: "Video proof on everything.", body: "If we say a booth has 50 SKUs in stock, we film it. If we say the factory has 8 sewing lines, we count them on camera." },
    { num: "03 / Care", title: "We treat your product like ours.", body: "Our team sells too. Every product we source, we ask: would we put our own brand on this? If not, it doesn't ship." },
  ];
  return (
    <section className="section values" data-screen-label="06 Values">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">What we stand for</span>
          <h2>Three principles. We don't break them.</h2>
          <p>If you've worked with sourcing agents before, you'll know why these matter.</p>
        </div>
        <div className="v-grid">
          {items.map((v) => (
            <div className="v-card" key={v.title}>
              <div className="num">{v.num}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OUR PROCESS VIS ---------- */
function OurProcess() {
  const steps = [
    { ic: <Icon.Send />, title: "Brief", body: "You submit your product + targets. We confirm scope in 24h." },
    { ic: <Icon.Map />, title: "Source", body: "We walk Futian Market, film every booth, get written quotes." },
    { ic: <Icon.Search />, title: "Verify", body: "Samples shipped, factories inspected, AQL pre-shipment QC." },
    { ic: <Icon.Truck />, title: "Ship", body: "Order placed, freight booked, customs cleared, delivered." },
  ];
  return (
    <section className="process-vis" data-screen-label="07 Process">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Our process, at a glance</span>
          <h2>Four steps. Roughly four weeks.</h2>
          <p>Want the full walkthrough? See the <a href="How It Works.html" style={{color: "var(--orange)", fontWeight: 600}}>How It Works</a> page.</p>
        </div>
        <div className="pv-grid">
          {steps.map((s, i) => (
            <div className="pv-card" key={s.title}>
              <div className="ic">{s.ic}</div>
              <h4>{i+1}. {s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <>
      <Nav active="about" />
      <PageHero
        page="About"
        title="The team behind every video."
        sub="A small, Yiwu-based sourcing team built on one belief: you should see exactly what you're buying before you commit. We source, we film, we deliver."
      />
      <Bio />
      <StoryTimeline />
      <StatsStrip />
      <Values />
      <OurProcess />
      <FinalCTA
        title="Ready to start?"
        sub="Message us on WhatsApp or fill out the form. Tell us about your product and we'll tell you honestly whether sourcing from Yiwu is the right move."
        primaryLabel="Message us on WhatsApp"
        primaryHref={CONTACT.whatsappUrl}
        secondaryLabel="See Packages"
        secondaryHref="Services.html"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
