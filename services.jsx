const { useState: useStateSvc } = React;

/* ============================================================
   PACKAGES — FutianFinds v3
   ============================================================ */
const PACKAGES = [
  {
    tier: "Insider", tagline: "Daily deal flow", price: "19.99", unit: "/ mo",
    alt: "or $149/year — save 38%",
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
    cta: "Join Insider", featured: false,
  },
  {
    tier: "Scout", tagline: "Test one product", price: "99", unit: "/ product",
    alt: "Bundles: 3 for $249 · 5 for $399",
    pricesub: "One-time · 48-hour delivery",
    features: [
      "3 verified suppliers",
      "HD video shoot of each",
      "Product info form — MOQ, price, lead time, customization",
      "48-hour turnaround",
    ],
    notIncluded: "Detailed landed-cost estimate (offered in higher tiers)",
    policy: "Don't like round one? Round two is free. No refund after round two. 100% refund if the product isn't in the market. No refund requests once the report is delivered.",
    cta: "Start with Scout", featured: false,
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
    commission: "FOB commission: 10% / 8% / 6% by order size — see table below.",
    policy: "15-day decision window — after that the $299 setup fee is non-refundable. Samples + freight billed separately. Factory-visit costs separate, only with your approval.",
    cta: "Pick SmallBatch", featured: true,
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
    commission: "FOB commission: 8% / 6% / 4% by order size — see table below.",
    policy: "15-day decision window. $599 fully refunded if you place the order, non-refundable if you don't. Factory-visit costs separate.",
    cta: "Go FullScale", featured: false,
  },
];

function Packages() {
  return (
    <section className="section" data-screen-label="03 Packages">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">The Four Packages</span>
          <h2>Pick the level that matches your stage.</h2>
          <p>From daily deal flow for $19.99/mo, to a full-time team that runs your whole order end to end.</p>
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
              <button className={"btn btn-block " + (p.featured ? "btn-primary" : "btn-ghost-dark")} onClick={() => window.location.href = "Contact.html"}>
                {p.cta} <Icon.ArrowRight />
              </button>
              <div className="policy-note">{p.policy}</div>
            </div>
          ))}
        </div>
        <div className="currency-note">
          <Icon.Dollar width="16" height="16" />
          <span>All prices in <strong>USD</strong>. Commission is charged on the <strong>FOB product value only</strong> — shipping is never part of the commission base.</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMMISSION TABLES ---------- */
function CommissionTables() {
  const tables = [
    {
      pkg: "SmallBatch", note: "Setup fee $299 · min order $1,000",
      rows: [
        ["$1,000 – $5,000", "10%"],
        ["$5,000 – $10,000", "8%"],
        ["$10,000 – $20,000", "6%"],
      ],
    },
    {
      pkg: "FullScale", note: "Setup fee $599 · refunded on order",
      rows: [
        ["$50,000 – $100,000", "8%"],
        ["$100,000 – $200,000", "6%"],
        ["$200,000 +", "4%"],
      ],
    },
  ];
  return (
    <section className="section commission" data-screen-label="04 Commission">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Commission, in plain numbers</span>
          <h2>The bigger the order, the lower the rate.</h2>
          <p>Charged only on the FOB product value — never on shipping. The larger your run, the more our incentive is to negotiate it down.</p>
        </div>
        <div className="comm-grid">
          {tables.map((t) => (
            <div className="comm-card" key={t.pkg}>
              <div className="comm-head">
                <div className="comm-pkg">{t.pkg}</div>
                <div className="comm-note">{t.note}</div>
              </div>
              <div className="comm-table">
                <div className="comm-row comm-row-head">
                  <div>Order value (FOB)</div>
                  <div>Commission</div>
                </div>
                {t.rows.map((r) => (
                  <div className="comm-row" key={r[0]}>
                    <div>{r[0]}</div>
                    <div className="rate">{r[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARE ---------- */
function Compare() {
  const rows = [
    ["Starting price", "$19.99/mo", "$99", "$299 +", "$599 +"],
    ["Verified suppliers", "—", "3", "3+", "3+"],
    ["HD supplier video", "Clips", "✓", "✓", "✓"],
    ["Product info form (MOQ, price, lead time)", "—", "✓", "✓", "✓"],
    ["Daily supplier drops (WhatsApp)", "✓", "—", "—", "—"],
    ["Private members group", "✓", "—", "—", "—"],
    ["Weekly trend report", "✓", "—", "—", "—"],
    ["Sample sourcing & shipping", "—", "—", "✓", "✓"],
    ["Target-price negotiation", "—", "—", "✓", "✓"],
    ["Brand & packaging review", "—", "—", "✓", "✓"],
    ["1-on-1 WhatsApp line", "Group", "—", "✓", "✓"],
    ["Shipping coordination", "—", "—", "✓", "✓"],
    ["Order management", "—", "—", "✓", "✓"],
    ["Factory visit", "—", "—", "—", "If needed"],
    ["QC inspection (AQL)", "—", "—", "—", "✓"],
    ["Dedicated project manager", "—", "—", "—", "✓"],
  ];
  const yes = <span className="yes"><Icon.Check /></span>;
  const no = <span className="no">—</span>;
  const cell = (v) => v === "✓" ? yes : v === "—" ? no : v;
  return (
    <section className="section compare-section" data-screen-label="05 Compare">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Side-by-side</span>
          <h2>What's in each package.</h2>
          <p>Sixteen lines of fine print, in one honest table.</p>
        </div>
        <div className="compare-table">
          <div className="compare-row head">
            <div className="cell">Feature</div>
            <div className="cell">Insider</div>
            <div className="cell">Scout</div>
            <div className="cell">SmallBatch</div>
            <div className="cell">FullScale</div>
          </div>
          {rows.map((r, i) => (
            <div className="compare-row featured-col" key={i}>
              <div className="cell label">{r[0]}</div>
              <div className="cell">{cell(r[1])}</div>
              <div className="cell">{cell(r[2])}</div>
              <div className="cell">{cell(r[3])}</div>
              <div className="cell">{cell(r[4])}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- POLICIES ---------- */
function Policies() {
  return (
    <section className="section policies" data-screen-label="06 Policies">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Before you commit</span>
          <h2>Two things we want crystal clear.</h2>
          <p>No surprises later. Here's exactly who's responsible for what.</p>
        </div>
        <div className="policy-grid">
          <div className="policy-card">
            <div className="policy-ic"><Icon.Shield /></div>
            <h3>Customs responsibility</h3>
            <p>
              We handle everything on the <strong>China side</strong> — export clearance, documentation, and getting your goods on the boat or plane.
            </p>
            <p>
              Customs in your <strong>destination country is your responsibility</strong>. If you misdirect a shipment or give us the wrong import details, that liability sits with you.
            </p>
            <p className="policy-foot">In some countries we work with local customs consultants we can introduce you to — just ask.</p>
          </div>
          <div className="policy-card">
            <div className="policy-ic"><Icon.Dollar /></div>
            <h3>External costs</h3>
            <p>
              <strong>Samples</strong> are invoiced separately, at cost plus shipping.
            </p>
            <p>
              <strong>Factory-visit costs</strong> — transport, hotel, meals, flights — are billed to you. Nothing is ever spent without your written approval first.
            </p>
            <p className="policy-foot">Want to join us in Yiwu? Tell us at least <strong>30 days ahead</strong> so we can schedule the visit program properly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VIDEO PROOF ---------- */
function VideoProof() {
  return (
    <section className="section video-proof" data-screen-label="07 Video Proof">
      <div className="container">
        <div className="section-head on-dark centered">
          <span className="eyebrow">Video proof on every project</span>
          <h2>You see what we see.</h2>
          <p>Every supplier we shortlist is filmed at the booth. No staged photos, no stock images — just the real market floor.</p>
        </div>
        <div className="short-grid proof-grid">
          {VIDEOS.slice(0, 3).map((v) => (
            <ShortCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ TEASER ---------- */
function FAQTeaser() {
  return (
    <section className="faq-teaser" data-screen-label="08 FAQ teaser">
      <div className="container">
        <h2>Got questions before you commit?</h2>
        <p>We've answered the ones we hear most — pricing, shipping, MOQs, QC, refunds. Two minutes of reading.</p>
        <a href="FAQ.html" className="btn btn-primary">Read the FAQ <Icon.ArrowRight /></a>
      </div>
    </section>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <>
      <Nav active="services" />
      <PageHero
        page="Packages"
        title="Pricing that fits how you buy."
        sub="From daily deal flow to a full done-for-you order. No factory kickbacks — commission only on the FOB product value, and only on the two order-based tiers."
      />
      <Packages />
      <CommissionTables />
      <Compare />
      <Policies />
      <VideoProof />
      <FAQTeaser />
      <FinalCTA
        title="Not sure which tier?"
        sub="Start with a $99 Scout report on one product. Like what you see? Move up to SmallBatch or FullScale when you're ready to order."
        primaryLabel="Start with Scout — $99"
        primaryHref="Contact.html"
        secondaryLabel="Message us on WhatsApp"
        secondaryHref={CONTACT.whatsappUrl}
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
