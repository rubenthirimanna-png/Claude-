/* =========================================================
   TOP G NUTRITION – Interaktionen
   ---------------------------------------------------------
   Produktdaten zentral in PRODUCTS pflegen (Preise in Cent).
   Echte Produktfotos: Feld `image` setzen (z. B. "assets/img/eaa.png"),
   dann wird statt der gerenderten Dose das Foto angezeigt.
   ========================================================= */
(() => {
  "use strict";

  const FREE_SHIPPING = 5900; // Cent
  const INSTAGRAM = "https://www.instagram.com/topg.nutrition/";

  const PRODUCTS = [
    {
      id: "eaa",
      name: "EAA+",
      label: "EAA+",
      sub: "ESSENTIAL AMINO ACIDS",
      category: "Performance",
      filters: ["performance", "muskelaufbau", "definition"],
      color: "#e2283c",
      light: "#ff7a88",
      emoji: "🍒",
      flavors: ["Cherry Fruit"],
      size: "20 Servings",
      price: 2990,
      tags: [{ t: "Back in Stock", c: "hot" }],
      short: "Alle 9 essentiellen Aminosäuren, 11 g Protein pro Shake. Der Geschmack? Brutal.",
      desc: "MORE REPS. MORE POWER. EAA+ liefert dir alle 9 essentiellen Aminosäuren und 11 g Protein pro Shake – mit intensivem Cherry-Fruit Geschmack. Glutenfrei, laktosefrei und perfekt für vor, während oder nach dem Training.",
      benefits: ["⚡️ 9 essentielle Aminosäuren", "💪 11 g Protein pro Shake", "🍒 Cherry-Fruit Geschmack", "🚫 Gluten- & laktosefrei", "🥤 20 Servings", "🇩🇪 Made in Germany"],
      image: null,
    },
    {
      id: "clear",
      name: "Clear Protein",
      label: "CLEAR",
      sub: "PROTEIN · GREEN APPLE",
      category: "Definition",
      filters: ["definition", "muskelaufbau"],
      color: "#7cc943",
      light: "#c3f08f",
      emoji: "🍏",
      flavors: ["Green Apple"],
      size: "500 g",
      price: 3490,
      tags: [{ t: "Neu", c: "gold" }],
      short: "Ultra leicht, perfekt löslich und erfrischend wie ein Drink. So sollte Protein schmecken.",
      desc: "Kennst du diese klumpigen Shakes? Vergiss sie. Clear Protein ist ultra leicht, perfekt löslich und erfrischend wie ein Drink – statt schwer und cremig. Ideal in der Definition und an heißen Tagen.",
      benefits: ["🍏 Erfrischender Apfel-Geschmack", "💧 Klar & leicht wie ein Drink", "🥤 Perfekt löslich", "🪶 Kein schweres Gefühl", "🎯 Ideal für Definition", "🇩🇪 Made in Germany"],
      image: null,
    },
    {
      id: "vegan",
      name: "Vegan Protein",
      label: "VEGAN",
      sub: "PLANT BASED PROTEIN",
      category: "Vegan",
      filters: ["vegan", "muskelaufbau", "definition"],
      color: "#2fa35a",
      light: "#86e0a6",
      emoji: "🌱",
      flavors: ["Chocolate", "Vanilla"],
      size: "1 kg",
      price: 3990,
      tags: [{ t: "Vegan", c: "green" }],
      short: "Vegan heißt nicht mehr trocken & klumpig. Smooth, leicht löslich und angenehm im Magen.",
      desc: "Keine Kompromisse – nur Performance. Unser Vegan Protein ist smooth, leicht löslich und angenehm im Magen. 100% pflanzlich und trotzdem mit Geschmack, der überzeugt.",
      benefits: ["🌱 100% pflanzlich", "🥤 Smooth & leicht löslich", "😌 Angenehm im Magen", "🥛 Von Natur aus laktosefrei", "💪 Für Aufbau & Erhalt", "🇩🇪 Made in Germany"],
      image: null,
    },
    {
      id: "gainer",
      name: "Mass Gainer",
      label: "GAINER",
      sub: "MASS · COOKIES & CREAM",
      category: "Muskelaufbau",
      filters: ["muskelaufbau"],
      color: "#b0855a",
      light: "#ecd2b4",
      emoji: "🍪",
      flavors: ["Cookies & Cream"],
      size: "3 kg",
      price: 4490,
      tags: [{ t: "Bestseller", c: "gold" }],
      short: "Wer sagt, Masse aufbauen muss eklig sein? Cookies & Cream Vibes – keine Qual, nur Gains.",
      desc: "Wer sagt, Masse aufbauen muss eklig sein? Cookies & Cream Vibes – smooth & easy zu trinken. Für alle, die zulegen wollen, ohne sich durch jeden Shake quälen zu müssen. Keine Qual. Nur Gains.",
      benefits: ["🍪 Cookies & Cream", "📈 Für Masse & Kraft", "🥤 Smooth & easy zu trinken", "⚡ Kalorien für harte Trainingsphasen", "🏋️ Ideal im Bulk", "🇩🇪 Made in Germany"],
      image: null,
    },
  ];

  const POSTS = [
    { id: "eaa", url: "https://www.instagram.com/p/DXB-lXKDAqU/", date: "12.04.2026", text: "BACK IN STOCK 🚨🔥 MORE REPS. MORE POWER. Und ja… der Geschmack? BRUTAL. 🍒💥 EAA+ ist wieder da und stärker denn je." },
    { id: "clear", url: "https://www.instagram.com/p/DWw3XFvjANV/", date: "05.04.2026", text: "Kennst du diese klumpigen Shakes? 😅 Vergiss sie. Ultra leicht, perfekt löslich und erfrischend wie ein Drink. So sollte Protein schmecken. 🍏💪" },
    { id: "vegan", url: "https://www.instagram.com/p/DWw4HRCjFTo/", date: "05.04.2026", text: "Vegan heißt nicht mehr trocken & klumpig. Smooth, leicht löslich und angenehm im Magen. Keine Kompromisse – nur Performance. 🌱💪" },
    { id: "gainer", url: "https://www.instagram.com/p/DWw4oAoDK1t/", date: "05.04.2026", text: "Wer sagt, Masse aufbauen muss eklig sein? Cookies & Cream Vibes 🍪 – smooth & easy zu trinken. Keine Qual. Nur Gains." },
  ];

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const byId = (id) => PRODUCTS.find((p) => p.id === id);
  const eur = (c) => (c / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Produktdose (SVG) ---------- */
  let uid = 0;
  function tub(p) {
    if (p.image) return `<img class="tub" src="${p.image}" alt="${p.name}" loading="lazy" />`;
    const n = ++uid;
    const fs = p.label.length > 5 ? 26 : p.label.length > 4 ? 30 : 36;
    return `
<svg class="tub" viewBox="0 0 200 250" role="img" aria-label="${p.name} Dose">
  <defs>
    <linearGradient id="b${n}" x1="0" x2="1">
      <stop offset="0" stop-color="${shade(p.color, -55)}"/>
      <stop offset=".22" stop-color="${p.color}"/>
      <stop offset=".42" stop-color="${p.light}"/>
      <stop offset=".62" stop-color="${p.color}"/>
      <stop offset="1" stop-color="${shade(p.color, -65)}"/>
    </linearGradient>
    <linearGradient id="l${n}" x1="0" x2="1">
      <stop offset="0" stop-color="#050505"/><stop offset=".38" stop-color="#3b3b3b"/><stop offset=".55" stop-color="#1c1c1c"/><stop offset="1" stop-color="#050505"/>
    </linearGradient>
    <linearGradient id="k${n}" x1="0" x2="1">
      <stop offset="0" stop-color="#030303"/><stop offset=".4" stop-color="#1d1d1d"/><stop offset="1" stop-color="#030303"/>
    </linearGradient>
    <linearGradient id="g${n}" x1="0" x2="1">
      <stop offset="0" stop-color="#a87a24"/><stop offset=".5" stop-color="#f6d98b"/><stop offset="1" stop-color="#a87a24"/>
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="240" rx="78" ry="8" fill="#000" opacity=".55"/>
  <path d="M30 62 L30 222 Q30 236 100 236 Q170 236 170 222 L170 62 Z" fill="url(#b${n})"/>
  <path d="M30 90 Q100 102 170 90 L170 198 Q100 210 30 198 Z" fill="url(#k${n})"/>
  <path d="M30 90 Q100 102 170 90" stroke="url(#g${n})" stroke-width="1.6" fill="none"/>
  <path d="M30 198 Q100 210 170 198" stroke="url(#g${n})" stroke-width="1.6" fill="none"/>
  <path d="M88 122 L90 110 L95.5 116 L100 107 L104.5 116 L110 110 L112 122 Z" fill="url(#g${n})"/>
  <text x="100" y="141" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="2" fill="#fff">TOP G</text>
  <text x="100" y="${172 + (36 - fs) / 4}" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="${fs}" letter-spacing="1" fill="${p.light}">${p.label}</text>
  <text x="100" y="190" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="6.6" letter-spacing="1.4" fill="#b9b3a6">${p.sub}</text>
  <path d="M24 38 L24 62 Q24 72 100 72 Q176 72 176 62 L176 38 Z" fill="url(#l${n})"/>
  ${Array.from({ length: 15 }, (_, i) => `<line x1="${32 + i * 9.7}" y1="44" x2="${32 + i * 9.7}" y2="${68 - Math.abs(7 - i) * 0.3}" stroke="#000" stroke-opacity=".35" stroke-width="1"/>`).join("")}
  <ellipse cx="100" cy="38" rx="76" ry="10" fill="#262626"/>
  <ellipse cx="100" cy="37" rx="60" ry="6.5" fill="#1a1a1a"/>
  <rect x="52" y="76" width="11" height="146" rx="5.5" fill="#fff" opacity=".13"/>
  <rect x="68" y="76" width="4" height="146" rx="2" fill="#fff" opacity=".08"/>
</svg>`;
  }
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.max(0, Math.min(255, v + amt));
    return "#" + ((c(n >> 16) << 16) | (c((n >> 8) & 255) << 8) | c(n & 255)).toString(16).padStart(6, "0");
  }

  /* ---------- Storage (fehlertolerant) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } },
  };

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 2600);
  }

  /* ---------- Warenkorb ---------- */
  let cart = store.get("topg-cart", []);
  const keyOf = (id, flavor) => `${id}::${flavor}`;

  function addToCart(id, flavor, qty = 1, silent = false) {
    const p = byId(id);
    if (!p) return;
    flavor = flavor || p.flavors[0];
    const key = keyOf(id, flavor);
    const line = cart.find((l) => l.key === key);
    if (line) line.qty += qty;
    else cart.push({ key, id, flavor, qty });
    saveCart();
    const btn = $("#cartOpen");
    btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
    if (!silent) toast(`✓ ${p.name} (${flavor}) im Warenkorb`);
  }
  function saveCart() { store.set("topg-cart", cart); renderCart(); }

  function renderCart() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    const total = cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
    const countEl = $("#cartCount");
    countEl.textContent = count;
    countEl.classList.toggle("has-items", count > 0);
    $("#cartTotal").textContent = eur(total);

    const rest = FREE_SHIPPING - total;
    $("#shipText").innerHTML = rest > 0 ? `Noch <b>${eur(rest)}</b> bis zum Gratis-Versand 🚚` : `🎉 Du hast dir <b>Gratis-Versand</b> gesichert!`;
    $("#shipBar").style.width = Math.min(100, (total / FREE_SHIPPING) * 100) + "%";

    const wrap = $("#cartItems");
    if (!cart.length) {
      wrap.innerHTML = `<div class="empty"><div>🛒</div><p>Dein Warenkorb ist noch leer.<br>Zeit für den richtigen Fuel.</p><a href="#shop" class="btn btn--ghost btn--sm" data-close-cart>Zum Shop</a></div>`;
      return;
    }
    wrap.innerHTML = cart.map((l) => {
      const p = byId(l.id);
      return `<div class="ci" style="--c:${p.color}">
        <div class="ci__img">${tub(p)}</div>
        <div><b>${p.name}</b><small>${l.flavor} · ${p.size}</small>
          <div class="qty"><button data-dec="${l.key}" aria-label="Weniger">−</button><span>${l.qty}</span><button data-inc="${l.key}" aria-label="Mehr">+</button></div>
        </div>
        <div class="ci__right"><b>${eur(p.price * l.qty)}</b><button class="ci__remove" data-remove="${l.key}">Entfernen</button></div>
      </div>`;
    }).join("");
  }

  $("#cartItems").addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    const k = t.dataset.inc || t.dataset.dec || t.dataset.remove;
    const line = cart.find((l) => l.key === k);
    if (!line) return;
    if (t.dataset.inc) line.qty++;
    if (t.dataset.dec) line.qty--;
    if (t.dataset.remove || line.qty <= 0) cart = cart.filter((l) => l !== line);
    saveCart();
  });

  const drawer = $("#drawer");
  function openCart() { drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false"); document.body.classList.add("lock"); }
  function closeCart() { drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); document.body.classList.remove("lock"); }
  $("#cartOpen").addEventListener("click", openCart);
  drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close-cart]")) closeCart(); });
  $("#checkout").addEventListener("click", () => {
    if (!cart.length) return toast("Dein Warenkorb ist leer");
    toast("Checkout wird mit dem Shop-System verbunden (Shopify / Stripe)");
  });

  /* ---------- Produkte ---------- */
  function renderProducts() {
    $("#products").innerHTML = PRODUCTS.map((p) => `
      <article class="card reveal tilt" style="--c:${p.color}" data-filters="${p.filters.join(" ")}">
        <div class="card__tags">${p.tags.map((t) => `<span class="tag tag--${t.c}">${t.t}</span>`).join("")}</div>
        <div class="card__media" data-open="${p.id}" role="button" tabindex="0" aria-label="${p.name} ansehen">${tub(p)}</div>
        <div class="card__body">
          <span class="card__cat">${p.category}</span>
          <h3 class="card__title">${p.name}</h3>
          <p class="card__desc">${p.short}</p>
          <span class="card__flavor"><i></i>${p.flavors.join(" · ")} · ${p.size}</span>
          <div class="card__foot">
            <div class="price"><b>${eur(p.price)}</b><small>inkl. MwSt.</small></div>
            <button class="btn btn--ghost btn--sm" data-open="${p.id}">Details</button>
            <button class="add-btn" data-quick-add="${p.id}" aria-label="${p.name} in den Warenkorb">+</button>
          </div>
        </div>
      </article>`).join("");
  }

  function applyFilter(f) {
    $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === f));
    $$(".card").forEach((c, i) => {
      const show = f === "all" || c.dataset.filters.split(" ").includes(f);
      c.classList.toggle("is-hidden", !show);
      if (show) { c.classList.remove("pop"); void c.offsetWidth; c.style.animationDelay = i * 60 + "ms"; c.classList.add("pop", "is-visible"); }
    });
  }
  $("#filters").addEventListener("click", (e) => { const b = e.target.closest(".filter"); if (b) applyFilter(b.dataset.filter); });
  $$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => applyFilter(a.dataset.filterLink)));

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let modalState = null;
  function openModal(id) {
    const p = byId(id);
    modalState = { id, flavor: p.flavors[0], qty: 1 };
    $("#modalContent").innerHTML = `
      <div class="pd" style="--c:${p.color}">
        <div class="pd__media">
          <div class="card__tags">${p.tags.map((t) => `<span class="tag tag--${t.c}">${t.t}</span>`).join("")}</div>
          ${tub(p)}
        </div>
        <div class="pd__info">
          <span class="card__cat">${p.category} · ${p.size}</span>
          <h3 id="modalTitle">${p.name}</h3>
          <p>${p.desc}</p>
          <div class="pd__price"><b>${eur(p.price)}</b><small>inkl. MwSt., zzgl. Versand</small></div>
          <p class="pd__label">Geschmack</p>
          <div class="chips">${p.flavors.map((f, i) => `<button class="chip ${i ? "" : "is-active"}" data-flavor="${f}">${f}</button>`).join("")}</div>
          <ul class="pd__benefits">${p.benefits.map((b) => `<li>${b}</li>`).join("")}</ul>
          <div class="pd__buy">
            <div class="qty"><button data-mq="-1" aria-label="Weniger">−</button><span id="mQty">1</span><button data-mq="1" aria-label="Mehr">+</button></div>
            <button class="btn btn--gold" id="mAdd">In den Warenkorb · <span id="mPrice">${eur(p.price)}</span></button>
          </div>
          <small class="pd__note">Nahrungsergänzungsmittel ersetzen keine ausgewogene, abwechslungsreiche Ernährung und gesunde Lebensweise.</small>
        </div>
      </div>`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    setTimeout(() => $(".modal__close", modal).focus(), 50);
  }
  function closeModal() { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); if (!drawer.classList.contains("is-open")) document.body.classList.remove("lock"); }
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeModal();
    const chip = e.target.closest("[data-flavor]");
    if (chip) { $$(".chip", modal).forEach((c) => c.classList.toggle("is-active", c === chip)); modalState.flavor = chip.dataset.flavor; }
    const q = e.target.closest("[data-mq]");
    if (q) {
      modalState.qty = Math.max(1, Math.min(20, modalState.qty + +q.dataset.mq));
      $("#mQty").textContent = modalState.qty;
      $("#mPrice").textContent = eur(byId(modalState.id).price * modalState.qty);
    }
    if (e.target.closest("#mAdd")) { addToCart(modalState.id, modalState.flavor, modalState.qty); closeModal(); }
  });

  /* ---------- Globale Klicks ---------- */
  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) return openModal(open.dataset.open);
    const qa = e.target.closest("[data-quick-add]");
    if (qa) {
      addToCart(qa.dataset.quickAdd);
      if (qa.classList.contains("add-btn")) {
        qa.classList.add("added"); qa.textContent = "✓";
        setTimeout(() => { qa.classList.remove("added"); qa.textContent = "+"; }, 1400);
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeCart(); }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card__media")) { e.preventDefault(); openModal(e.target.dataset.open); }
  });

  /* ---------- Hero Produkt-Switch ---------- */
  const heroBadges = {
    eaa: ["🍒 Cherry Fruit", "🚫 Gluten- & laktosefrei", "🥤 20 Servings"],
    clear: ["🍏 Green Apple", "💧 Leicht wie ein Drink", "🥤 Perfekt löslich"],
    vegan: ["🌱 100% pflanzlich", "😌 Angenehm im Magen", "🥤 Smooth & löslich"],
    gainer: ["🍪 Cookies & Cream", "📈 Für Masse & Kraft", "💪 Keine Qual. Nur Gains."],
  };
  let heroIdx = 0, heroTimer;
  function setHero(i, animate = true) {
    heroIdx = (i + PRODUCTS.length) % PRODUCTS.length;
    const p = PRODUCTS[heroIdx];
    const stage = $("#heroProduct");
    const swap = () => {
      stage.innerHTML = tub(p);
      if (animate) stage.firstElementChild.classList.add("swap-in");
      $$(".hero__badge").forEach((b, k) => (b.textContent = heroBadges[p.id][k]));
    };
    const cur = stage.firstElementChild;
    if (cur && animate) { cur.classList.add("swap-out"); setTimeout(swap, 380); } else swap();
    $(".hero").style.setProperty("--accent", p.color);
    $$("#heroSwitch button").forEach((b, k) => { b.classList.toggle("is-active", k === heroIdx); b.setAttribute("aria-selected", k === heroIdx); });
  }
  $("#heroSwitch").innerHTML = PRODUCTS.map((p) => `<button role="tab" aria-label="${p.name}" title="${p.name}">${p.emoji}</button>`).join("");
  $("#heroSwitch").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setHero([...b.parentNode.children].indexOf(b));
    restartHeroTimer();
  });
  $("#heroProduct").addEventListener("click", () => openModal(PRODUCTS[heroIdx].id));
  $("#heroProduct").style.cursor = "pointer";
  function restartHeroTimer() { clearInterval(heroTimer); if (!reduced) heroTimer = setInterval(() => setHero(heroIdx + 1), 5000); }

  // Maus-Parallax im Hero
  const stageEl = $("#heroStage");
  if (finePointer) {
    stageEl.addEventListener("mousemove", (e) => {
      const r = stageEl.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      $("#heroProduct").style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 18}deg) translateZ(20px)`;
    });
    stageEl.addEventListener("mouseleave", () => ($("#heroProduct").style.transform = ""));
  }

  /* ---------- Spotlight ---------- */
  $("#spotlightProduct").innerHTML = tub(byId("eaa"));

  /* ---------- Instagram ---------- */
  $("#insta").innerHTML = POSTS.map((po) => {
    const p = byId(po.id);
    return `<a class="post reveal" href="${po.url}" target="_blank" rel="noopener" style="--c:${p.color}" aria-label="Instagram-Beitrag zu ${p.name} öffnen">
      <div class="post__art">${tub(p)}</div>
      <span class="post__ig"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="#fff"/></svg></span>
      <div class="post__body"><p>${po.text}</p><div class="post__meta"><span>@topg.nutrition</span><span>${po.date}</span></div></div>
    </a>`;
  }).join("");

  /* ---------- Ziel-Finder ---------- */
  const QUESTIONS = [
    { key: "goal", q: "Was ist dein Ziel?", opts: [
      { v: "muskelaufbau", i: "💪", t: "Muskelaufbau", s: "Masse & Volumen aufbauen" },
      { v: "definition", i: "🔥", t: "Definition", s: "Lean werden, Muskeln erhalten" },
      { v: "performance", i: "⚡", t: "Mehr Kraft", s: "Mehr Reps, mehr Power" },
      { v: "allround", i: "🏆", t: "Allround", s: "Fit & stark im Alltag" },
    ]},
    { key: "diet", q: "Wie ernährst du dich?", opts: [
      { v: "all", i: "🍽️", t: "Alles", s: "Keine Einschränkungen" },
      { v: "vegan", i: "🌱", t: "Vegan", s: "100% pflanzlich" },
      { v: "lactose", i: "🥛", t: "Laktosefrei", s: "Empfindlicher Magen" },
      { v: "light", i: "🍹", t: "Lieber leicht", s: "Fruchtig statt cremig" },
    ]},
    { key: "freq", q: "Wie oft trainierst du?", opts: [
      { v: 1, i: "🌤️", t: "1–2× pro Woche", s: "Einstieg" },
      { v: 2, i: "🏋️", t: "3–4× pro Woche", s: "Regelmäßig" },
      { v: 3, i: "🔥", t: "5× oder mehr", s: "Beast Mode" },
      { v: 4, i: "🏆", t: "Wettkampf", s: "Champion-Level" },
    ]},
  ];
  let quizStep = 0, answers = {};

  function recommend({ goal, diet, freq }) {
    let stack;
    if (diet === "vegan") stack = ["vegan"];
    else if (diet === "lactose") stack = ["eaa", "vegan"];
    else if (diet === "light") stack = ["clear", "eaa"];
    else stack = { muskelaufbau: ["gainer", "eaa"], definition: ["clear", "eaa"], performance: ["eaa", "clear"], allround: ["clear", "eaa"] }[goal];
    if (goal === "muskelaufbau" && diet !== "vegan" && !stack.includes("gainer") && freq >= 2) stack.push("gainer");
    if (freq === 1 && stack.length > 1) stack = stack.slice(0, 1);
    if (freq >= 3 && diet !== "vegan" && !stack.includes("eaa")) stack.push("eaa");
    const titles = {
      muskelaufbau: "DER MASS-BUILDER STACK",
      definition: "DER LEAN-MACHINE STACK",
      performance: "DER POWER STACK",
      allround: "DER CHAMPION STACK",
    };
    return { stack: [...new Set(stack)], title: titles[goal] };
  }

  function renderQuiz() {
    const body = $("#quizBody");
    $("#quizBar").style.width = (quizStep / QUESTIONS.length) * 100 + "%";
    if (quizStep < QUESTIONS.length) {
      const q = QUESTIONS[quizStep];
      body.innerHTML = `<div class="quiz__step">
        <span class="quiz__count">Frage ${quizStep + 1} / ${QUESTIONS.length}</span>
        <h3 class="quiz__q">${q.q}</h3>
        <div class="quiz__opts">${q.opts.map((o, i) => `<button class="opt" data-ans="${i}"><span class="opt__icon">${o.i}</span><span><b>${o.t}</b><small>${o.s}</small></span></button>`).join("")}</div>
        ${quizStep ? `<button class="quiz__back" data-back>← Zurück</button>` : ""}
      </div>`;
      return;
    }
    const { stack, title } = recommend(answers);
    const total = stack.reduce((s, id) => s + byId(id).price, 0);
    body.innerHTML = `<div class="quiz__step">
      <span class="quiz__count">Deine Formel</span>
      <h3 class="result__title gold">${title}</h3>
      <p class="result__text">Basierend auf deinen Antworten passt dieser Stack perfekt zu dir. Kein Zufall, kein Shortcut.</p>
      <div class="stack">${stack.map((id, i) => { const p = byId(id); return `<div class="stack__item" style="animation-delay:${i * 90}ms">${tub(p)}<div><b>${p.name}</b><small>${p.flavors[0]} · ${p.size}</small></div><div class="price"><b>${eur(p.price)}</b></div></div>`; }).join("")}</div>
      <div class="result__actions">
        <button class="btn btn--gold" data-add-stack="${stack.join(",")}">Stack hinzufügen · ${eur(total)}</button>
        <button class="btn btn--ghost" data-restart>Neu starten</button>
      </div>
    </div>`;
  }
  $("#quizBody").addEventListener("click", (e) => {
    const a = e.target.closest("[data-ans]");
    if (a) { const q = QUESTIONS[quizStep]; answers[q.key] = q.opts[+a.dataset.ans].v; quizStep++; return renderQuiz(); }
    if (e.target.closest("[data-back]")) { quizStep = Math.max(0, quizStep - 1); return renderQuiz(); }
    if (e.target.closest("[data-restart]")) { quizStep = 0; answers = {}; return renderQuiz(); }
    const s = e.target.closest("[data-add-stack]");
    if (s) { const ids = s.dataset.addStack.split(","); ids.forEach((id) => addToCart(id, null, 1, true)); toast(`✓ ${ids.length} Produkte im Warenkorb`); openCart(); }
  });

  /* ---------- Newsletter ---------- */
  $("#newsletter").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    toast("🏆 Willkommen in der Top G Family!");
  });

  /* ---------- Header / Navigation ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger"), nav = $("#nav");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", open);
    nav.classList.toggle("is-open", open);
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", () => { burger.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }));

  const sections = $$("main section[id]");
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) $$("a", nav).forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObs.observe(s));

  /* ---------- Reveal & Counter ---------- */
  function countUp(el) {
    const end = +el.dataset.count, suf = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1600;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("is-visible");
      $$("[data-count]", el).forEach(countUp);
      if (el.classList.contains("stock")) {
        $("#stockBar").style.width = "23%";
      }
      revObs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  /* ---------- 3D-Tilt ---------- */
  function bindTilt(el) {
    if (!finePointer) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", x * 100 + "%");
      el.style.setProperty("--my", y * 100 + "%");
      el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  }

  /* ---------- Magnetische Buttons & Cursor ---------- */
  function bindMagnetic(el) {
    if (!finePointer) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  }
  if (finePointer && !reduced) {
    const cur = $("#cursor");
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; cur.classList.add("is-active"); }, { passive: true });
    document.addEventListener("mouseleave", () => cur.classList.remove("is-active"));
    document.addEventListener("mouseover", (e) => cur.classList.toggle("is-hover", !!e.target.closest("a, button, [role=button], .card")));
    (function loop() { cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18; cur.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); })();
  }

  /* ---------- Partikel ---------- */
  function particles() {
    const c = $("#particles");
    if (!c || reduced) return;
    const ctx = c.getContext("2d");
    let w, h, dots;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = c.offsetWidth; h = c.offsetHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: Math.round((w * h) / 16000) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + 0.3, s: Math.random() * 0.4 + 0.1, a: Math.random() * 0.6 + 0.2 }));
    };
    resize();
    window.addEventListener("resize", resize);
    let visible = true;
    new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(c);
    (function draw() {
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        for (const d of dots) {
          d.y -= d.s; if (d.y < -5) { d.y = h + 5; d.x = Math.random() * w; }
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230, 190, 100, ${d.a})`; ctx.fill();
        }
      }
      requestAnimationFrame(draw);
    })();
  }

  /* ---------- Init ---------- */
  renderProducts();
  renderCart();
  renderQuiz();
  setHero(0, false);
  restartHeroTimer();
  particles();
  $$(".reveal, .stock").forEach((el) => revObs.observe(el));
  $$(".hero__stats").forEach((el) => revObs.observe(el));
  $$(".tilt").forEach(bindTilt);
  $$(".magnetic").forEach(bindMagnetic);
  $("#year").textContent = new Date().getFullYear();

  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").classList.add("is-done");
      document.documentElement.classList.add("is-loaded");
    }, 900);
  });
  // Fallback, falls "load" verzögert ist (z. B. Fonts)
  setTimeout(() => { $("#preloader").classList.add("is-done"); document.documentElement.classList.add("is-loaded"); }, 3000);
})();
