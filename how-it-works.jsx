const { useState: useStateHIW } = React;

/* ---------- TIMELINE ---------- */
function Timeline() {
  const steps = [
    {
      n: 1, duration: "Day 1",
      title: "Tell us what you need",
      lead: "Fill out a short brief — product, target price, MOQ, any reference links. We confirm scope and timeline within 24 hours, or hop on a 15-min call if it's faster.",
      youDo: ["Submit the product brief", "Share reference photos / links", "Confirm budget range"],
      weDo: ["Discovery call (optional)", "Scope confirmation", "Project kickoff email"],
    },
    {
      n: 2, duration: "Day 2–3",
      title: "We hit the market",
      lead: "Our team walks Futian Market in person — district by district, booth by booth. We film every supplier we shortlist so you see exactly what we see.",
      youDo: ["Nothing — relax", "(Optional) WhatsApp updates"],
      weDo: ["Walk 4-5 districts", "Shortlist 5+ booths", "Film HD walkthroughs", "Collect business cards"],
    },
    {
      n: 3, duration: "Day 3–5",
      title: "We negotiate & sample",
      lead: "We get firm quotes in writing, push for better MOQs, and order samples. Samples ship to your door within a few days so you can hold the product in your hand.",
      youDo: ["Review supplier shortlist", "Confirm sample preferences"],
      weDo: ["Lock in 5+ written quotes", "Negotiate MOQ & lead time", "Order & QC samples", "Ship samples (DHL/EMS)"],
    },
    {
      n: 4, duration: "Day 5–10 (if Launch)",
      title: "Order, QC & ship",
      lead: "Pick your supplier and we place the order, manage production milestones, and run a pre-shipment AQL inspection before goods leave the factory. No nasty surprises.",
      youDo: ["Pick supplier from report", "Approve final spec & artwork", "Wire production deposit"],
      weDo: ["Place order, hold deposit", "Production milestone checks", "Pre-shipment AQL inspection", "Coordinate freight forwarder"],
    },
    {
      n: 5, duration: "Day 10–35",
      title: "You receive your goods",
      lead: "Goods land at your warehouse, Amazon FBA, or 3PL — fully customs-cleared if we handled the freight. We follow up with you a week later for feedback.",
      youDo: ["Receive shipment", "Confirm inventory matches PO", "Give us a review 🙏"],
      weDo: ["Coordinate customs", "Final invoice & docs", "30-day post-shipment check-in"],
    },
  ];
  return (
    <section className="section timeline" data-screen-label="03 Timeline">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">The 5-step process</span>
          <h2>From product idea to inventory on your shelves.</h2>
          <p>Most clients finish steps 1–3 in a week. Steps 4–5 depend on order size — usually 3–5 weeks total for a first run.</p>
        </div>
        <div className="timeline-wrap">
          {steps.map((s) => (
            <div className="timeline-step" key={s.n}>
              <div className="ts-num">{s.n}</div>
              <div className="ts-body">
                <div className="ts-header">
                  <h3>{s.title}</h3>
                  <span className="ts-duration"><Icon.Clock /> {s.duration}</span>
                </div>
                <p className="lead">{s.lead}</p>
                <div className="ts-actions">
                  <div className="col">
                    <h4>You do</h4>
                    <ul>
                      {s.youDo.map((y) => (
                        <li key={y}><span className="check"><Icon.Check /></span>{y}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col">
                    <h4>We do</h4>
                    <ul>
                      {s.weDo.map((w) => (
                        <li key={w}><span className="check"><Icon.Check /></span>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMING VISUALIZATION ---------- */
function TimingViz() {
  const phases = [
    { day: "Day 1–3", title: "Sourcing", body: "Brief → market visits → supplier shortlist with HD video." },
    { day: "Day 3–10", title: "Sampling", body: "Quotes finalized → samples ordered → samples in your hands." },
    { day: "Day 10–35", title: "Production", body: "Order placed → QC inspection → freight booked → delivery." },
  ];
  return (
    <section className="process-viz" data-screen-label="04 Timing">
      <div className="container">
        <div className="section-head on-dark centered">
          <span className="eyebrow">A typical timeline</span>
          <h2>3 to 5 weeks, beginning to end.</h2>
          <p>Slower for custom branding or large MOQs. Faster for stock products you can buy off the shelf.</p>
        </div>
        <div className="viz-cards">
          {phases.map((p) => (
            <div className="viz-card" key={p.title}>
              <div className="day">{p.day}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT TO EXPECT ---------- */
function WhatToExpect() {
  const items = [
    {
      q: "How fast will I hear from you after I submit the brief?",
      a: "Within 24 hours, usually faster. If you submit on a weekend, expect a Monday morning reply (Yiwu time, GMT+8). For Source and Launch packages, we'll usually offer a 15-min Zoom to confirm scope.",
    },
    {
      q: "What happens if I don't like the suppliers you find?",
      a: "We give you a second round at no extra cost — we'll go back to the market with adjusted criteria. If after the second round we still can't find a fit, you get a full refund. We'd rather end the relationship clean than push a bad supplier.",
    },
    {
      q: "Do I have to pay before you start sourcing?",
      a: "Yes — package fees are paid in full when you sign up so we can put the work in. The money-back guarantee (7 days from delivery of the report) means your money is never really at risk.",
    },
    {
      q: "Can I be on the WhatsApp updates myself?",
      a: "Absolutely. Source and above include direct WhatsApp / WeChat access to your sourcing lead. You'll see videos and price quotes the moment they come back from the market — not packaged a week later.",
    },
    {
      q: "What if the supplier raises the price after the report?",
      a: "We lock prices in writing (PI or signed quote) before delivering the report, valid for 30 days. If a supplier tries to raise it after, we flag it as a red flag and move you to backup #2 from the report.",
    },
    {
      q: "Do you handle shipping and customs?",
      a: "Yes — included as an add-on or in Launch / Partner packages. We coordinate with vetted freight forwarders (sea, air, or rail) and can arrange DDP delivery direct to Amazon FBA, your warehouse, or your 3PL.",
    },
  ];
  const [open, setOpen] = useStateHIW(0);
  return (
    <section className="section expect" data-screen-label="05 What to Expect">
      <div className="container container-sm">
        <div className="section-head centered">
          <span className="eyebrow">What to expect</span>
          <h2>The questions we get on day one.</h2>
          <p>If you're nodding along — you're our kind of client.</p>
        </div>
        <div className="expect-grid">
          {items.map((it, i) => (
            <div className={"expect-item" + (open === i ? " open" : "")} key={i}>
              <button className="expect-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span className="toggle"><Icon.Plus /></span>
              </button>
              {open === i && <div className="expect-a">{it.a}</div>}
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
      <Nav active="how" />
      <PageHero
        page="How It Works"
        title="From brief to inventory in 5 steps."
        sub="What actually happens after you hit submit — every email, every video, every QC check, laid out honestly."
      />
      <Timeline />
      <TimingViz />
      <WhatToExpect />
      <FinalCTA
        title="Ready to start?"
        sub="Pick a package or book a free 15-minute call. We'll tell you honestly whether sourcing from Yiwu is the right move for your product."
        primaryLabel="See Packages"
        primaryHref="Services.html"
        secondaryLabel="Book a free call"
        secondaryHref="Contact.html"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
