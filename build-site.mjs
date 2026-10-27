import fs from 'fs';
import path from 'path';

const root = 'c:/Users/timme/Downloads/Frank-ThroughBody-20mm';
const suppliers = JSON.parse(fs.readFileSync(path.join(root, 'suppliers.json'), 'utf8'));
const data = JSON.stringify(suppliers);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>THROUGH·20 — Brief for Frank</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
:root{--bg:#050808;--ink:#e8fffb;--muted:#8bb5ad;--teal:#2dd4bf;--teal-deep:#0f766e;--teal-glow:#5eead4;--panel:rgba(8,24,22,.92);--line:rgba(45,212,191,.18);--good:#34d399;--warn:#fbbf24;--bad:#f87171;--shadow:0 24px 60px rgba(0,0,0,.45);--radius:18px}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Outfit,system-ui,sans-serif;color:var(--ink);background:radial-gradient(900px 500px at 10% -10%,rgba(45,212,191,.18),transparent 55%),radial-gradient(700px 400px at 100% 0%,rgba(15,118,110,.25),transparent 50%),linear-gradient(180deg,#050808,#071412 40%,#050a0a);line-height:1.45;min-height:100vh}
a{color:inherit}button{font:inherit;cursor:pointer;border:0;background:none}
.wrap{width:min(1180px,calc(100% - 2rem));margin-inline:auto}
.hero{position:relative;min-height:88vh;display:grid;align-items:end;overflow:hidden;isolation:isolate}
.hero-bg{position:absolute;inset:0;z-index:-2;background:linear-gradient(105deg,rgba(5,8,8,.92),rgba(5,8,8,.45) 48%,rgba(5,8,8,.75)),radial-gradient(ellipse at 70% 35%,rgba(45,212,191,.28),transparent 55%),url('assets/suppliers/neolith-2.jpg') center/cover;animation:drift 18s ease-in-out infinite alternate}
@keyframes drift{from{transform:scale(1.04)}to{transform:scale(1.08) translateY(-1%)}}
.hero-inner{padding:clamp(2rem,6vw,5rem) 0 clamp(3rem,7vw,5.5rem)}
.brand{font-family:Fraunces,Georgia,serif;font-size:clamp(3rem,8.5vw,6.8rem);font-weight:700;letter-spacing:-.03em;line-height:.92;margin-bottom:1rem;opacity:0;animation:rise .9s .1s ease forwards}
.brand span{color:var(--teal)}
.hero h1{max-width:18ch;font-family:Fraunces,Georgia,serif;font-weight:500;font-size:clamp(1.3rem,2.5vw,1.9rem);margin-bottom:.7rem;opacity:0;animation:rise .9s .25s ease forwards}
.hero .lead{max-width:42ch;color:rgba(232,255,251,.72);font-weight:300;margin-bottom:1.6rem;opacity:0;animation:rise .9s .4s ease forwards}
.cta-row{display:flex;flex-wrap:wrap;gap:.7rem;opacity:0;animation:rise .9s .55s ease forwards}
.btn{display:inline-flex;align-items:center;gap:.45rem;padding:.85rem 1.2rem;border-radius:999px;text-decoration:none;font-weight:500;transition:transform .2s;cursor:pointer}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:var(--teal);color:#04110f}
.btn-ghost{background:rgba(45,212,191,.08);color:var(--ink);border:1px solid rgba(45,212,191,.35)}
.btn-line{border:1px solid rgba(45,212,191,.35);color:var(--ink)}
.btn-hot{background:linear-gradient(135deg,#2dd4bf,#14b8a6);color:#04110f;font-weight:600;box-shadow:0 0 0 1px rgba(45,212,191,.4),0 12px 40px rgba(45,212,191,.25)}
.float-enquire{position:fixed;right:1.1rem;bottom:1.1rem;z-index:60;display:flex;flex-direction:column;gap:.55rem;align-items:flex-end}
.float-enquire .btn{box-shadow:var(--shadow)}
.enquire-panel{padding:1.25rem;margin-top:1rem}
.enquire-panel h3{font-family:Fraunces,Georgia,serif;font-size:1.35rem;margin-bottom:.35rem;color:var(--teal)}
.enquire-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.45rem;margin:1rem 0}
.enquire-list label{display:flex;gap:.55rem;align-items:flex-start;padding:.7rem .8rem;border-radius:12px;background:rgba(45,212,191,.05);border:1px solid rgba(45,212,191,.12);font-size:.86rem;cursor:pointer}
.enquire-list input{margin-top:.2rem;accent-color:var(--teal)}
.enquire-list .meta{font-size:.75rem;color:var(--muted)}
.toast{position:fixed;left:50%;bottom:5.5rem;transform:translateX(-50%);background:#042f2e;border:1px solid var(--teal);color:var(--ink);padding:.85rem 1.2rem;border-radius:999px;z-index:70;opacity:0;pointer-events:none;transition:opacity .25s}
.toast.show{opacity:1}
.meta-chip{position:absolute;top:1.2rem;right:1.2rem;padding:.55rem .9rem;border-radius:999px;background:rgba(0,0,0,.55);border:1px solid rgba(45,212,191,.3);font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:0;animation:rise .8s .7s ease forwards}
@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.dock{position:sticky;top:0;z-index:40;backdrop-filter:blur(16px);background:rgba(5,8,8,.82);border-bottom:1px solid var(--line)}
.dock-inner{display:flex;gap:.35rem;overflow-x:auto;padding:.7rem 0;scrollbar-width:none}
.dock a{white-space:nowrap;text-decoration:none;padding:.55rem .9rem;border-radius:999px;font-size:.86rem;color:var(--muted);font-weight:500}
.dock a:hover,.dock a.active{background:var(--teal);color:#04110f}
section{padding:clamp(2.4rem,5vw,4.2rem) 0}
.kicker{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);font-weight:600;margin-bottom:.45rem}
.title{font-family:Fraunces,Georgia,serif;font-size:clamp(1.7rem,3.4vw,2.5rem);letter-spacing:-.02em;margin-bottom:.45rem}
.sub{color:var(--muted);max-width:58ch;margin-bottom:1.5rem}
.specbar{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.4rem}
.pill{padding:.42rem .8rem;border-radius:999px;background:var(--teal);color:#04110f;font-size:.8rem;font-weight:600}
.pill.soft{background:rgba(45,212,191,.12);color:var(--teal-glow)}
.pill.ok{background:rgba(52,211,153,.15);color:var(--good)}
.pill.no{background:rgba(248,113,113,.15);color:var(--bad)}
.pill.warn{background:rgba(251,191,36,.15);color:var(--warn)}
.checklist{display:grid;grid-template-columns:repeat(5,1fr);gap:.7rem}
@media(max-width:980px){.checklist{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.checklist{grid-template-columns:1fr}}
.check,.panel,.edge-card,.detail,.rail,.matrix-wrap{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow)}
.check{padding:1.05rem}
.check .q{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:600;margin-bottom:.45rem}
.check .a{font-family:Fraunces,Georgia,serif;font-size:1.08rem;line-height:1.25;margin-bottom:.35rem}
.check .note{font-size:.84rem;color:var(--muted)}
.edge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem}
@media(max-width:800px){.edge-grid{grid-template-columns:1fr}}
.edge-card{overflow:hidden}
.edge-card img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}
.edge-card .body{padding:1rem 1.05rem 1.15rem}
.edge-card h3{font-family:Fraunces,Georgia,serif;font-size:1.15rem;margin:.4rem 0 .35rem}
.edge-card p{font-size:.88rem;color:var(--muted)}
.ship{display:grid;grid-template-columns:1.2fr .8fr;gap:1rem}
@media(max-width:860px){.ship{grid-template-columns:1fr}}
.panel{padding:1.25rem}
.stat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.7rem}
.stat{background:rgba(45,212,191,.06);border-radius:14px;padding:.9rem;border:1px solid rgba(45,212,191,.1)}
.stat label{display:block;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:.25rem}
.stat strong{font-family:Fraunces,Georgia,serif;font-size:1.2rem;color:var(--teal-glow)}
.moq-box{border:1px dashed rgba(251,191,36,.45);background:rgba(251,191,36,.06);border-radius:14px;padding:1rem;margin-top:1rem}
.moq-box h4{font-family:Fraunces,Georgia,serif;margin-bottom:.35rem;color:var(--warn)}
.filters{display:flex;flex-wrap:wrap;gap:.45rem;margin-bottom:1rem}
.chip{padding:.5rem .85rem;border-radius:999px;background:rgba(45,212,191,.08);border:1px solid rgba(45,212,191,.2);font-size:.84rem;font-weight:500;color:var(--muted)}
.chip.active{background:var(--teal);color:#04110f;border-color:var(--teal)}
.studio{display:grid;grid-template-columns:300px 1fr;gap:1rem;align-items:start}
@media(max-width:920px){.studio{grid-template-columns:1fr}}
.rail{padding:.55rem;position:sticky;top:64px;max-height:calc(100vh - 80px);overflow:auto}
@media(max-width:920px){.rail{position:static;display:flex;gap:.4rem;overflow-x:auto;max-height:none}}
.sup-btn{width:100%;text-align:left;padding:.8rem .85rem;border-radius:14px;display:grid;gap:.12rem;color:var(--ink)}
@media(max-width:920px){.sup-btn{min-width:170px}}
.sup-btn:hover{background:rgba(45,212,191,.08)}
.sup-btn.active{background:var(--teal);color:#04110f}
.sup-btn .name{font-weight:600;font-size:.92rem}
.sup-btn .loc{font-size:.75rem;opacity:.7}
.sup-btn .price{font-family:Fraunces,Georgia,serif;font-size:.92rem;color:var(--teal-glow)}
.sup-btn.active .price{color:#0f766e}
.detail{padding:clamp(1rem,2.4vw,1.6rem);min-height:700px}
.detail-head{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;margin-bottom:1.1rem;padding-bottom:1rem;border-bottom:1px solid var(--line)}
.detail-head h3{font-family:Fraunces,Georgia,serif;font-size:1.75rem}
.where{color:var(--muted);margin-top:.2rem;font-size:.9rem}
.price-block{text-align:right}.price-block .big{font-family:Fraunces,Georgia,serif;font-size:1.7rem;color:var(--teal);line-height:1}
.price-block .tiny{font-size:.78rem;color:var(--muted);margin-top:.25rem}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:.65rem;margin-bottom:1rem}
@media(max-width:720px){.grid3{grid-template-columns:1fr}}
.fact{background:rgba(45,212,191,.05);border-radius:14px;padding:.85rem;border:1px solid rgba(45,212,191,.1)}
.fact label{display:block;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:.3rem}
.fact strong{font-size:.92rem;display:block}
.badge{display:inline-flex;margin-top:.35rem;font-size:.74rem;font-weight:600;padding:.18rem .5rem;border-radius:999px}
.badge.yes{background:rgba(52,211,153,.15);color:var(--good)}
.badge.ask{background:rgba(251,191,36,.15);color:var(--warn)}
.badge.no{background:rgba(248,113,113,.15);color:var(--bad)}
.lab{display:grid;grid-template-columns:repeat(3,1fr);gap:.65rem;margin-bottom:1.1rem}
@media(max-width:720px){.lab{grid-template-columns:1fr}}
.lab-card{border:1px dashed rgba(45,212,191,.25);border-radius:14px;padding:.85rem;text-align:center}
.lab-card .val{font-family:Fraunces,Georgia,serif;font-size:1.15rem;margin:.2rem 0;color:var(--teal-glow)}
.lab-card .lbl{font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.colors-label{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600;margin:0 0 .65rem}
.swatches{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.7rem}
.swatch{border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#041110}
.swatch img,.swatch video{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#0a1a18}
.swatch figcaption{padding:.5rem .65rem .65rem;font-size:.8rem;font-weight:500;color:var(--muted)}
.photo-note{font-size:.82rem;color:var(--teal-glow);margin:.4rem 0 1rem}
.detail-actions{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:1.15rem}
.matrix-wrap{overflow-x:auto}
table.matrix{width:100%;border-collapse:collapse;min-width:1100px;font-size:.84rem}
.matrix th,.matrix td{padding:.8rem .85rem;text-align:left;border-bottom:1px solid rgba(45,212,191,.1);vertical-align:top}
.matrix th{background:#04110f;color:var(--teal);font-weight:500}
.matrix tr:hover td{background:rgba(45,212,191,.05)}
.footnote{margin-top:1.5rem;padding:1.1rem 1.25rem;border-radius:var(--radius);background:rgba(45,212,191,.05);border:1px solid var(--line);font-size:.88rem;color:var(--muted)}
footer{padding:2rem 0 3rem;color:var(--muted);font-size:.84rem;text-align:center}
</style>
</head>
<body>
<header class="hero" id="top">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="meta-chip">Black · Teal · Real supplier galleries</div>
  <div class="wrap hero-inner">
    <div class="brand">THROUGH<span>·</span>20</div>
    <h1>Each supplier shows their own product photos.</h1>
    <p class="lead">20mm whole-body sintered stone brief for Frank — pigment, vein-through, mono press, lab numbers, MOQ, freight. Colours come from each factory’s own gallery.</p>
    <div class="cta-row">
      <button class="btn btn-hot" type="button" id="enquire-all-hero">Enquire all suppliers — 1 click</button>
      <a class="btn btn-ghost" href="#studio">Open supplier studio</a>
      <a class="btn btn-ghost" href="#enquire">Customise list</a>
    </div>
  </div>
</header>
<div class="float-enquire">
  <button class="btn btn-hot" type="button" id="enquire-all-float">✉ Enquire all</button>
</div>
<div class="toast" id="toast" role="status"></div>
<nav class="dock"><div class="wrap dock-inner">
  <a href="#frank">Checklist</a><a href="#edges">Edge photos</a><a href="#ship">Weight & freight</a><a href="#studio">Suppliers</a><a href="#matrix">Compare</a><a href="#enquire">Enquire all</a><a href="#ask">RFQ</a>
</div></nav>
<section id="frank"><div class="wrap">
  <div class="kicker">For Frank</div>
  <h2 class="title">What you asked. Locked.</h2>
  <div class="specbar"><span class="pill">20mm</span><span class="pill">Whole body</span><span class="pill">Vein throughout</span><span class="pill soft">Own gallery per supplier</span></div>
  <div class="checklist">
    <article class="check"><div class="q">1 · Composition</div><div class="a">Mineral ceramic body</div><p class="note">Feldspar + minerals, pressed & fired. Not resin quartz.</p></article>
    <article class="check"><div class="q">2 · Pigment</div><div class="a">In the raw body</div><p class="note">Reject colour that only lives in a printed glaze layer.</p></article>
    <article class="check"><div class="q">3 · Veining</div><div class="a">Through the thickness</div><p class="note">Demand a cut-edge photo of the exact colour.</p></article>
    <article class="check"><div class="q">4 · Construction</div><div class="a">Single pressed body</div><p class="note">Prefer mono-press. Mesh-backed lines must be disclosed.</p></article>
    <article class="check"><div class="q">5 · Lab reports</div><div class="a">TDS every supplier</div><p class="note">Water absorption · flexural/MOR · Mohs.</p></article>
  </div>
</div></section>
<section id="edges"><div class="wrap">
  <div class="kicker">Vein school · educational reference</div>
  <h2 class="title">What the cut edge must look like</h2>
  <p class="sub">These three reference shots teach the pass/fail test. They are not a substitute for each supplier’s own cut-edge photo of the locked colour.</p>
  <div class="edge-grid">
    <article class="edge-card"><img src="assets/edge-through-vein.jpg" alt="Through-vein reference"/><div class="body"><span class="pill ok">PASS</span><h3>Vein runs through 20mm</h3><p>Pattern continues into the body.</p></div></article>
    <article class="edge-card"><img src="assets/edge-colour-body.jpg" alt="Colour body reference"/><div class="body"><span class="pill warn">PARTIAL</span><h3>Body tinted, vein on face</h3><p>Often sold as “full body” — not true through-vein.</p></div></article>
    <article class="edge-card"><img src="assets/edge-surface-print.jpg" alt="Surface print reference"/><div class="body"><span class="pill no">FAIL</span><h3>White/plain core</h3><p>Inkjet/glaze on top only.</p></div></article>
  </div>
</div></section>
<section id="ship"><div class="wrap">
  <div class="kicker">Logistics</div>
  <h2 class="title">Shipping weight, freight, 30 m²</h2>
  <div class="ship">
    <div class="panel"><div class="stat-grid">
      <div class="stat"><label>One slab 1600×3200×20</label><strong>~5.12 m² · 240–255 kg</strong></div>
      <div class="stat"><label>30 m² order</label><strong>~6 slabs · ~1.5 t</strong></div>
      <div class="stat"><label>Full 40ft</label><strong>~100–110 slabs · ~27 t</strong></div>
      <div class="stat"><label>Ocean 40ft guide</label><strong>$2,300–$5,200</strong></div>
    </div>
    <div class="moq-box"><h4>Can we order only 30 m²?</h4><p style="color:var(--muted);font-size:.92rem">Usually not from factory production. Possible via stock/traders/distributors. Freight per m² on 30 m² LCL is much worse than a full container.</p></div>
    </div>
    <div class="panel"><h3 style="font-family:Fraunces,Georgia,serif;margin-bottom:.7rem;color:var(--teal)">Freight / m² rough</h3>
      <div class="stat" style="margin-bottom:.55rem"><label>China → Europe full 40ft</label><strong>~$4–10 / m²</strong></div>
      <div class="stat" style="margin-bottom:.55rem"><label>China → Africa full 40ft</label><strong>~$5–12 / m²</strong></div>
      <div class="stat" style="margin-bottom:.55rem"><label>30 m² LCL / air</label><strong>Often $25–80+ / m²</strong></div>
    </div>
  </div>
</div></section>
<section id="studio"><div class="wrap">
  <div class="kicker">Supplier studio</div>
  <h2 class="title">Click a supplier. See their own gallery.</h2>
  <p class="sub">No shared stock photos across factories. Each card pulls that supplier’s product images (or video).</p>
  <div class="filters" id="filters"></div>
  <div class="studio"><aside class="rail" id="rail"></aside><div class="detail" id="detail"></div></div>
</div></section>
<section id="matrix"><div class="wrap">
  <div class="kicker">Side-by-side</div><h2 class="title">One matrix</h2>
  <div class="matrix-wrap"><table class="matrix"><thead><tr><th>Supplier</th><th>Country</th><th>Vein</th><th>30 m²?</th><th>MOQ</th><th>FOB</th><th>Slab wt</th><th>Freight</th><th>Labs</th></tr></thead><tbody id="matrix-body"></tbody></table></div>
  <div class="footnote">Product photos are captured from each supplier’s own website/CDN for Frank’s brief. Always request a fresh cut-edge photo of the exact locked colour before deposit.</div>
</div></section>
<section id="enquire"><div class="wrap">
  <div class="kicker">One-click outreach</div>
  <h2 class="title">Send the same enquiry to every supplier</h2>
  <p class="sub">One click opens your email app with the RFQ ready and all selected supplier emails in BCC. WhatsApp opens for numbers we have. Alibaba / distributor-only brands stay as manual links.</p>
  <div class="panel enquire-panel">
    <h3>Who gets this enquiry?</h3>
    <p style="color:var(--muted);font-size:.9rem;margin-bottom:.5rem">Tick who to include. Default = everyone with an email.</p>
    <div class="enquire-list" id="enquire-list"></div>
    <div class="detail-actions">
      <button class="btn btn-hot" type="button" id="enquire-all-panel">Send enquiry to selected</button>
      <button class="btn btn-ghost" type="button" id="enquire-whatsapp">Also open WhatsApps</button>
      <button class="btn btn-line" type="button" id="select-all-email">Select all with email</button>
    </div>
    <p id="enquire-summary" class="photo-note" style="margin-top:1rem"></p>
  </div>
</div></section>
<section id="ask"><div class="wrap">
  <div class="kicker">RFQ</div><h2 class="title">Message that gets sent</h2>
  <div class="panel"><p id="rfq-text" style="white-space:pre-wrap;line-height:1.55">Need 1600×3200×20mm sintered stone — whole body with vein throughout thickness (through-body / 对位通体).

Please confirm:
1) Is pigment mixed into the raw material body, or only a printed/glazed surface layer?
2) Do veins continue through the full 20mm? Send cut-edge photos of this exact colour.
3) Single pressed mono body, or laminated / mesh-backed / layered?
4) TDS: water absorption, flexural/MOR, Mohs hardness.
5) Can you supply ~30 m² from stock, or is MOQ higher?
6) FOB price, packing, slab weight, container loading, ocean freight to our port.

Do not quote surface-only inkjet or coloured body without vein-through.

Sent via THROUGH·20 brief for Frank.</p>
  <div class="detail-actions"><button class="btn btn-primary" id="copy-rfq" type="button">Copy RFQ</button></div></div>
</div></section>
<footer>THROUGH·20 · Brief for Frank · Live: https://timmtrades007-max.github.io/frank-through20/</footer>
<script>
const suppliers = ${data};
const EDGE={through:'assets/edge-through-vein.jpg',colour:'assets/edge-colour-body.jpg',surface:'assets/edge-surface-print.jpg'};
let filter='All';
const badge=b=>b==='yes'?'yes':b==='no'?'no':'ask';
const countries=['All',...new Set(suppliers.map(s=>s.country))];
const filtered=()=>filter==='All'?suppliers:suppliers.filter(s=>s.country===filter);
function renderFilters(){document.getElementById('filters').innerHTML=countries.map(c=>\`<button class="chip \${c===filter?'active':''}" data-c="\${c}" type="button">\${c}</button>\`).join('');
document.querySelectorAll('#filters .chip').forEach(b=>b.onclick=()=>{filter=b.dataset.c;select(filtered()[0]?.id||suppliers[0].id)});}
function renderRail(id){document.getElementById('rail').innerHTML=filtered().map(s=>\`<button class="sup-btn \${s.id===id?'active':''}" data-id="\${s.id}" type="button"><span class="name">\${s.name}</span><span class="loc">\${s.country} · \${s.loc}</span><span class="price">\${s.price}</span></button>\`).join('');
document.querySelectorAll('#rail .sup-btn').forEach(b=>b.onclick=()=>select(b.dataset.id));}
function media(s){
  const bits=[];
  if(s.video) bits.push(\`<figure class="swatch"><video src="\${s.video}" controls muted playsinline></video><figcaption>Official product video</figcaption></figure>\`);
  if(s.galleryOnly) bits.push(\`<figure class="swatch" style="display:grid;place-items:center;min-height:140px;padding:1rem;text-align:center"><figcaption>Open supplier gallery for live product photos</figcaption></figure>\`);
  bits.push(...(s.colours||[]).map(c=>\`<figure class="swatch"><img src="\${c.img}" alt="\${c.name}" loading="lazy"/><figcaption>\${c.name}</figcaption></figure>\`));
  return bits.join('');
}
function renderDetail(s){
  document.getElementById('detail').innerHTML=\`
  <div class="detail-head"><div><div class="specbar" style="margin-bottom:.45rem"><span class="pill soft">\${s.country}</span></div>
  <h3>\${s.name}</h3><div class="where">\${s.loc}</div><div class="where">\${s.contact}</div></div>
  <div class="price-block"><div class="big">\${s.price}</div><div class="tiny">\${s.priceNote}</div></div></div>
  <div class="grid3">
    <div class="fact"><label>Pigment</label><strong>\${s.pigment}</strong><span class="badge \${badge(s.pigmentBadge)}">\${s.pigmentBadgeText}</span></div>
    <div class="fact"><label>Vein through</label><strong>\${s.vein}</strong><span class="badge \${badge(s.veinBadge)}">\${s.veinBadgeText}</span></div>
    <div class="fact"><label>Construction</label><strong>\${s.construction}</strong><span class="badge \${badge(s.constructionBadge)}">\${s.constructionBadgeText}</span></div>
  </div>
  <div class="lab">
    <div class="lab-card"><div class="lbl">Water absorption</div><div class="val">\${s.water}</div></div>
    <div class="lab-card"><div class="lbl">Flexural / MOR</div><div class="val">\${s.flexural}</div></div>
    <div class="lab-card"><div class="lbl">Mohs</div><div class="val">\${s.mohs}</div></div>
  </div>
  <div class="grid3">
    <div class="fact"><label>Size</label><strong>\${s.size}</strong></div>
    <div class="fact"><label>MOQ</label><strong>\${s.moq}</strong></div>
    <div class="fact"><label>Lead</label><strong>\${s.lead}</strong></div>
    <div class="fact"><label>30 m²?</label><strong>\${s.moq30}</strong><span class="badge \${badge(s.moq30Badge)}">\${s.moq30Badge==='yes'?'Possible':s.moq30Badge==='no'?'Not typical':'Ask'}</span></div>
    <div class="fact"><label>Slab weight</label><strong>\${s.slabWt}</strong></div>
    <div class="fact"><label>40ft load</label><strong>\${s.load40}</strong></div>
  </div>
  <div class="fact" style="margin-bottom:1rem"><label>Freight guide</label><strong>\${s.freight}</strong></div>
  <div class="colors-label">Cut-edge standard to demand</div>
  <div class="swatches" style="margin-bottom:1rem"><figure class="swatch"><img src="\${EDGE[s.edgeRef]||EDGE.through}" alt="edge"/><figcaption>Educational edge reference</figcaption></figure></div>
  <div class="colors-label">This supplier’s own product gallery</div>
  <p class="photo-note">\${s.photoNote||''}</p>
  <div class="swatches">\${media(s)}</div>
  <div class="detail-actions">
    <a class="btn btn-primary" href="\${s.link}" target="_blank" rel="noopener">Open supplier gallery</a>
    \${s.email?\`<a class="btn btn-hot" href="mailto:\${s.email}?subject=\${encodeURIComponent(SUBJECT)}&body=\${encodeURIComponent(rfqBody())}">Email this supplier</a>\`:''}
    \${s.whatsapp?\`<a class="btn btn-ghost" href="https://wa.me/\${s.whatsapp}?text=\${encodeURIComponent(rfqBody())}" target="_blank" rel="noopener">WhatsApp</a>\`:''}
    <button class="btn btn-line" type="button" id="copy-one">Copy contact + ask</button>
  </div>\`;
  document.getElementById('copy-one').onclick=()=>{navigator.clipboard.writeText(\`\${s.name} (\${s.country} · \${s.loc})\\n\${s.contact}\\n\${s.link}\\n\\n20mm whole-body vein-through. Confirm body pigment vs surface print, mono press vs laminated, TDS, cut-edge photos, 30 m² possibility, slab weight, freight.\`);const b=document.getElementById('copy-one');b.textContent='Copied';setTimeout(()=>b.textContent='Copy contact + ask',1100)};
}
function select(id){renderFilters();const list=filtered();const s=list.find(x=>x.id===id)||list[0]||suppliers[0];renderRail(s.id);renderDetail(s)}
function renderMatrix(){document.getElementById('matrix-body').innerHTML=suppliers.map(s=>\`<tr><td><strong>\${s.name}</strong></td><td>\${s.country}</td><td>\${s.veinBadgeText}</td><td>\${s.moq30Badge==='yes'?'Possible':s.moq30Badge==='no'?'No':'Ask'}</td><td>\${s.moq}</td><td>\${s.price}</td><td>\${s.slabWt}</td><td>\${s.freight}</td><td>\${s.water} · \${s.flexural} · \${s.mohs}</td></tr>\`).join('')}
document.getElementById('copy-rfq').onclick=()=>{navigator.clipboard.writeText(document.getElementById('rfq-text').textContent);const b=document.getElementById('copy-rfq');b.textContent='Copied';setTimeout(()=>b.textContent='Copy RFQ',1100)};
const SUBJECT='RFQ: 1600×3200×20mm whole-body sintered stone (vein through)';
function rfqBody(){return document.getElementById('rfq-text').textContent.trim()}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200)}
function renderEnquireList(){
  const box=document.getElementById('enquire-list');
  box.innerHTML=suppliers.map(s=>{
    const hasEmail=!!s.email;const hasWa=!!s.whatsapp;
    const meta=hasEmail?(s.email+(hasWa?' · WhatsApp':'')):(hasWa?'WhatsApp only · open form: '+s.contact:s.contact+' · manual link');
    return \`<label><input type="checkbox" data-id="\${s.id}" \${hasEmail?'checked':''} /><span><strong>\${s.name}</strong><div class="meta">\${meta}</div></span></label>\`;
  }).join('');
  updateEnquireSummary();
  box.querySelectorAll('input').forEach(i=>i.onchange=updateEnquireSummary);
}
function selectedSuppliers(){const ids=[...document.querySelectorAll('#enquire-list input:checked')].map(i=>i.dataset.id);return suppliers.filter(s=>ids.includes(s.id))}
function updateEnquireSummary(){
  const sel=selectedSuppliers();
  const emails=sel.filter(s=>s.email).map(s=>s.email);
  const wa=sel.filter(s=>s.whatsapp);
  const manual=sel.filter(s=>!s.email);
  document.getElementById('enquire-summary').textContent=\`Selected \${sel.length}: \${emails.length} email BCC · \${wa.length} WhatsApp · \${manual.length} need gallery/form click\`;
}
function sendEnquireEmail(){
  const sel=selectedSuppliers();
  const emails=[...new Set(sel.map(s=>s.email).filter(Boolean))];
  if(!emails.length){toast('No emails on selection — tick suppliers with email, or open galleries');return}
  const bcc=emails.join(',');
  const body=encodeURIComponent(rfqBody());
  const subject=encodeURIComponent(SUBJECT);
  window.location.href=\`mailto:?bcc=\${encodeURIComponent(bcc)}&subject=\${subject}&body=\${body}\`;
  toast(\`Opening mail → BCC \${emails.length} suppliers\`);
}
function openWhatsApps(){
  const wa=selectedSuppliers().filter(s=>s.whatsapp);
  if(!wa.length){toast('No WhatsApp numbers on selection');return}
  const text=encodeURIComponent(rfqBody());
  wa.forEach((s,i)=>setTimeout(()=>window.open(\`https://wa.me/\${s.whatsapp}?text=\${text}\`,'_blank','noopener'),i*450));
  toast(\`Opening \${wa.length} WhatsApp chat(s)\`);
}
document.getElementById('select-all-email').onclick=()=>{document.querySelectorAll('#enquire-list input').forEach(i=>{const s=suppliers.find(x=>x.id===i.dataset.id);i.checked=!!s?.email});updateEnquireSummary()};
['enquire-all-hero','enquire-all-float','enquire-all-panel'].forEach(id=>document.getElementById(id).onclick=sendEnquireEmail);
document.getElementById('enquire-whatsapp').onclick=openWhatsApps;
const links=[...document.querySelectorAll('.dock a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -50% 0px'});
sections.forEach(s=>io.observe(s));
select(suppliers[0].id);renderMatrix();renderEnquireList();
</script>
</body></html>`;

fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('wrote', html.length, 'bytes');
