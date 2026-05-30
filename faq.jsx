const { useState: useStateFAQ, useMemo: useMemoFAQ } = React;

/* ---------- FAQ DATA ---------- */
const FAQ_DATA = [
  // GENERAL
  { cat: "general",
    q: "Who is FutianFinds for?",
    a: "We work mainly with Amazon FBA sellers, Shopify D2C brands, and small-to-mid wholesale importers. If you're sourcing physical products from China and value transparency over the cheapest possible price, you're our kind of client. We're not a great fit for $100K+ first orders on highly engineered products — that needs a different kind of agent." },
  { cat: "general",
    q: "Why Yiwu? Why not Shenzhen or Guangzhou?",
    a: "Yiwu's Futian Market is the world's largest wholesale market for small commodities — over 75,000 booths under one roof. If your product is consumer goods, kitchenware, accessories, toys, stationery, or home decor, it's almost certainly here. For electronics, we'll honestly tell you to source in Shenzhen instead." },
  { cat: "general",
    q: "Do you only source from Futian Market booths?",
    a: "No. The market is the discovery tool — most booths in Futian are storefronts for factories elsewhere in Zhejiang and Guangdong. When it makes sense, we visit the actual factory (sometimes 3-4 hours away by car) to verify capacity, quality systems, and certifications." },

  // PRICING
  { cat: "pricing",
    q: "Do you take commission from suppliers?",
    a: "No, never. We're paid only by you. This is non-negotiable for us — taking a kickback from the factory would compromise our ability to negotiate hard on your behalf. You can verify this by asking any supplier directly: we'll have them confirm in writing." },
  { cat: "pricing",
    q: "Is the $99 Scout package really $99?",
    a: "Yes. One product, three quotes, a short walkthrough video, and a price comparison report — flat $99, no hidden fees. About 60% of new clients start here. Most then upgrade to Source ($299) once they want a sample shipped and full negotiation handled." },
  { cat: "pricing",
    q: "What's your refund policy?",
    a: "100% money-back within 7 days of delivering the report, no questions asked. If after the report you don't think the suppliers we found are a fit, we'll either go back to the market for a second round at no charge, or refund you in full. We'd rather give the money back than burn the relationship." },

  // SHIPPING
  { cat: "shipping",
    q: "Do you handle shipping and customs?",
    a: "Yes — it's included in Launch and Partner packages, and available as an add-on for Source. We coordinate with vetted freight forwarders for sea, air, or rail freight, and can arrange DDP (delivered duty paid) shipping direct to Amazon FBA, your warehouse, or your 3PL." },
  { cat: "shipping",
    q: "How long does shipping take?",
    a: "Air freight: 5-10 days door to door. Sea freight (FCL): 25-40 days depending on destination. Sea freight (LCL): 35-50 days. We'll give you a realistic ETA based on your destination port and current schedule before you commit." },
  { cat: "shipping",
    q: "Can you ship to Amazon FBA directly?",
    a: "Yes. We're set up for FBA prep (FNSKU labeling, polybagging, master cartons sized to Amazon spec) and can ship DDP direct to US, UK, EU, and CA Amazon warehouses. Add-on pricing is $0.45/unit for prep + freight at cost." },

  // QUALITY
  { cat: "quality",
    q: "How do you verify supplier quality?",
    a: "Three layers: (1) we visit the booth/factory in person and film it, (2) we order a physical sample and inspect it ourselves before shipping to you, (3) we offer optional pre-shipment AQL inspection on the finished goods. For Launch packages, layer 3 is included." },
  { cat: "quality",
    q: "What if my goods arrive defective?",
    a: "If we ran pre-shipment QC and the goods passed, but arrive damaged, we help you file a claim with the supplier or freight forwarder (whichever is at fault) and replace or refund the defective units. We've successfully resolved 100% of the claims we've filed in the last 3 years." },
  { cat: "quality",
    q: "Do you check certifications (CE, FDA, FCC)?",
    a: "Yes — we verify any cert the supplier claims to have. We ask for the actual document, check it against the certifying body's online database, and flag any that look forged or expired. About 1 in 5 'CE certified' claims turn out to be invalid on first check." },
];

const CATS = [
  { key: "all", label: "All Questions" },
  { key: "general", label: "General" },
  { key: "pricing", label: "Pricing" },
  { key: "shipping", label: "Shipping" },
  { key: "quality", label: "Quality" },
];

/* ---------- ACCORDION ---------- */
function Accordion({ items, openId, setOpenId }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <strong>No questions match that search.</strong>
        Try a different keyword, or book a call — we'll answer it directly.
      </div>
    );
  }
  return items.map((it, i) => {
    const id = it.cat + "-" + i;
    const open = openId === id;
    return (
      <div className={"acc-item" + (open ? " open" : "")} key={id}>
        <button className="acc-q" onClick={() => setOpenId(open ? null : id)}>
          {it.q}
          <span className="toggle"><Icon.Plus /></span>
        </button>
        {open && (
          <div className="acc-a">
            <p>{it.a}</p>
          </div>
        )}
      </div>
    );
  });
}

/* ---------- FAQ MAIN ---------- */
function FaqMain() {
  const [cat, setCat] = useStateFAQ("all");
  const [query, setQuery] = useStateFAQ("");
  const [openId, setOpenId] = useStateFAQ("general-0");

  const counts = useMemoFAQ(() => {
    const c = { all: FAQ_DATA.length };
    FAQ_DATA.forEach((it) => { c[it.cat] = (c[it.cat] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemoFAQ(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.filter((it) => {
      if (cat !== "all" && it.cat !== cat) return false;
      if (q && !(it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [cat, query]);

  // Group by category
  const grouped = useMemoFAQ(() => {
    const map = {};
    filtered.forEach((it) => {
      (map[it.cat] = map[it.cat] || []).push(it);
    });
    return map;
  }, [filtered]);

  const groupOrder = ["general", "pricing", "shipping", "quality"];

  return (
    <section className="faq-main" data-screen-label="03 FAQ">
      <div className="container">
        <div className="faq-layout">
          <aside className="cat-nav">
            {CATS.map((c) => (
              <button key={c.key}
                      className={cat === c.key ? "active" : ""}
                      onClick={() => setCat(c.key)}>
                {c.label}
                <span className="count">{counts[c.key] || 0}</span>
              </button>
            ))}
          </aside>
          <div>
            <div className="faq-search">
              <span className="ic"><Icon.Search width="18" height="18" /></span>
              <input type="text" placeholder="Search the FAQ — try 'shipping', 'refund', 'sample'…"
                     value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            {filtered.length === 0 ? (
              <Accordion items={[]} openId={openId} setOpenId={setOpenId} />
            ) : (
              groupOrder.filter((g) => grouped[g] && (cat === "all" || cat === g)).map((g) => (
                <div className="acc-group" key={g}>
                  <h3 className="acc-group-title">{CATS.find((c) => c.key === g).label}</h3>
                  <Accordion items={grouped[g]} openId={openId} setOpenId={setOpenId} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STILL HAVE QUESTIONS ---------- */
function StillHaveQuestions() {
  return (
    <section className="still-qs" data-screen-label="04 Still QS">
      <div className="container">
        <div className="still-card">
          <div className="still-card-inner">
            <span className="eyebrow" style={{color: "var(--orange)"}}>Still stuck?</span>
            <h2>Still have questions? Let's hop on a call.</h2>
            <p>15 minutes with our team. Free, no pitch, no hard sell. Ask anything — about your specific product, our process, or whether we're even the right fit.</p>
            <div className="still-card-ctas">
              <a href="Contact.html" className="btn btn-primary">Book a free call <Icon.Calendar /></a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener" className="btn btn-outline-light"><Icon.WhatsApp /> WhatsApp us</a>
            </div>
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
      <Nav active="faq" />
      <PageHero
        page="FAQ"
        title="The questions we hear most."
        sub="12 answers covering pricing, shipping, MOQs, refunds, and QC. If yours isn't here, hit us up — we'll add it."
      />
      <FaqMain />
      <StillHaveQuestions />
      <FinalCTA
        title="Ready to source smarter?"
        sub="One product. Forty-eight hours. Real video from the market floor. Money-back if you don't love the report."
        primaryLabel="Start With Scout — $99"
        primaryHref="Services.html"
        secondaryLabel="See all Packages"
        secondaryHref="Services.html"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
