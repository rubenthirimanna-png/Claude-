/* =========================================================
   TOP G NUTRITION – Interaktionen
   ---------------------------------------------------------
   Alle Produktdaten stehen zentral in PRODUCTS (Preise in Cent).
   Produktbilder liegen in assets/img/products/ und werden pro
   Variante über `img` zugeordnet. Zum Austauschen einfach die
   Datei ersetzen (freigestelltes PNG/WebP) und ggf. w/h anpassen.
   ========================================================= */
(() => {
  "use strict";

  const FREE_SHIPPING = 5900; // Cent
  const IMG = "assets/img/products/";
  const POST = "assets/img/posts/";

  const PRODUCTS = [
    {
      id: "clear",
      name: "Clear Whey Protein",
      category: "Protein",
      filters: ["protein"],
      size: "1000 g",
      price: 3990,
      scale: 1,
      wide: true,
      variantLabel: "Geschmack",
      tags: [{ t: "2 Sorten", c: "gold" }],
      variants: [
        { id: "apple-rings", name: "Apple Rings", word: "APPLE", emoji: "🍏", color: "#6fbf3a", img: "clear-whey-apple-rings.webp", w: 749, h: 1200 },
        { id: "fresh-cherry", name: "Fresh Cherry", word: "CHERRY", emoji: "🍒", color: "#b45fd2", img: "clear-whey-fresh-cherry.webp", w: 749, h: 1200 },
      ],
      short: "Ultra leicht, perfekt löslich und erfrischend wie ein Drink. So sollte Protein schmecken.",
      desc: "Kennst du diese klumpigen Shakes? Vergiss sie. Clear Whey Protein ist ultra leicht, perfekt löslich und erfrischend wie ein Drink – dein neuer Lieblings-Drink nach dem Training. High Protein, Muscle Support, Fast Recovery.",
      benefits: ["🥤 33 Portionen pro Dose", "💪 26 g Protein pro Portion", "🚫 Glutenfrei & laktosefrei", "💧 Klar & leicht wie ein Drink", "⚡ Fast Recovery", "🇩🇪 Made in Germany"],
      badges: ["🍏 Apple Rings", "💪 26 g Protein", "🥤 33 Portionen"],
    },
    {
      id: "eaa",
      name: "EAA+",
      category: "Aminosäuren",
      filters: ["aminos"],
      size: "300 g · 20 Portionen",
      price: 2490,
      scale: 0.8,
      variantLabel: "Geschmack",
      tags: [{ t: "Back in Stock", c: "hot" }],
      variants: [{ id: "cherry-fruit", name: "Cherry Fruit", emoji: "🍒", color: "#d23c9a", img: "eaa-cherry-fruit.webp", w: 851, h: 1000 }],
      short: "Alle 9 essentiellen Aminosäuren, 11 g Protein pro Shake. Der Geschmack? Brutal.",
      desc: "MORE REPS. MORE POWER. EAA+ liefert dir alle 9 essentiellen Aminosäuren und 11 g Protein pro Shake – mit intensivem Cherry-Fruit Geschmack. Glutenfrei, laktosefrei und perfekt für vor, während oder nach dem Training.",
      benefits: ["⚡️ 9 essentielle Aminosäuren", "💪 11 g Protein pro Shake", "🍒 Cherry-Fruit Geschmack", "🚫 Glutenfrei & laktosefrei", "🥤 20 Servings", "🇩🇪 Made in Germany"],
      badges: ["🍒 Cherry Fruit", "🚫 Gluten- & laktosefrei", "🥤 20 Servings"],
    },
    {
      id: "vegan",
      name: "Vegan Whey Protein",
      category: "Protein · Vegan",
      filters: ["protein", "vegan"],
      size: "1000 g",
      price: 3490,
      scale: 1,
      variantLabel: "Geschmack",
      tags: [{ t: "Vegan", c: "green" }],
      variants: [{ id: "vanille", name: "Vanille", emoji: "🌱", color: "#3f9a5a", img: "vegan-whey-vanille.webp", w: 749, h: 1200 }],
      short: "Vegan heißt nicht mehr trocken & klumpig. Smooth, leicht löslich und angenehm im Magen.",
      desc: "Keine Kompromisse – nur Performance. Unser Vegan Whey Protein in Vanille ist smooth, leicht löslich und angenehm im Magen. Pflanzlich und trotzdem mit Geschmack, der überzeugt.",
      benefits: ["🌱 100% pflanzlich", "🥤 33 Portionen pro Dose", "💪 24 g Protein pro Portion", "🚫 Glutenfrei & laktosefrei", "😌 Angenehm im Magen", "🇩🇪 Made in Germany"],
      badges: ["🌱 100% pflanzlich", "💪 24 g Protein", "🍦 Vanille"],
    },
    {
      id: "whey",
      name: "Whey Protein",
      category: "Protein",
      filters: ["protein"],
      size: "",
      price: 2990,
      scale: 1,
      variantLabel: "Geschmack",
      tags: [{ t: "Klassiker", c: "gold" }],
      variants: [{ id: "shoko-coco", name: "Shoko-Coco", emoji: "🍫", color: "#b98a4a", img: "whey-shoko-coco.webp", w: 748, h: 1200 }],
      short: "Der Klassiker für jeden Tag: cremiges Whey in Shoko-Coco. High Protein für Muskeln und Regeneration.",
      desc: "Whey Protein in Shoko-Coco – der Klassiker nach dem Training und für zwischendurch. Schokoladig mit einem Hauch Kokos. High Protein, Muscle Support, Fast Recovery.",
      benefits: ["🍫 Schoko trifft Kokos", "💪 High Protein", "🏋️ Muscle Support", "⚡ Fast Recovery", "🥤 Smooth & leicht löslich", "🇩🇪 Made in Germany"],
      badges: ["🍫 Shoko-Coco", "💪 High Protein", "⚡ Fast Recovery"],
    },
    {
      id: "gainer",
      name: "Mass Gainer",
      category: "Protein · Aufbau",
      filters: ["protein"],
      size: "",
      price: 3490,
      scale: 1,
      variantLabel: "Geschmack",
      tags: [{ t: "Bulk", c: "rose" }],
      variants: [{ id: "cookies-cream", name: "Cookies & Cream", emoji: "🍪", color: "#d2475f", img: "mass-gainer-cookies-cream.webp", w: 750, h: 1200 }],
      short: "Wer sagt, Masse aufbauen muss eklig sein? Cookies & Cream Vibes – keine Qual, nur Gains.",
      desc: "Wer sagt, Masse aufbauen muss eklig sein? Cookies & Cream Vibes – smooth & easy zu trinken. Für alle, die zulegen wollen, ohne sich durch jeden Shake quälen zu müssen. Keine Qual. Nur Gains.",
      benefits: ["🍪 Cookies & Cream", "📈 Für deine Aufbauphase", "🥤 Smooth & easy zu trinken", "💪 Keine Qual. Nur Gains.", "🏋️ Ideal im Bulk", "🇩🇪 Made in Germany"],
      badges: ["🍪 Cookies & Cream", "📈 Für die Aufbauphase", "💪 Nur Gains"],
    },
    {
      id: "multi",
      name: "Multi-Vitamin",
      category: "Vitamine",
      filters: ["aminos"],
      size: "",
      price: 1990,
      scale: 0.76,
      variantLabel: "Inhalt",
      tags: [{ t: "All in One", c: "violet" }],
      variants: [{ id: "120-kapseln", name: "120 Kapseln", emoji: "💊", color: "#8a5fd0", img: "multi-vitamin.webp", w: 685, h: 1100 }],
      short: "All in One. Supports Health. 120 Kapseln für deine tägliche Basis.",
      desc: "Wer hart trainiert, braucht eine starke Basis. Multi-Vitamin ist dein All-in-One für jeden Tag – 120 Kapseln pro Dose, Made in Germany.",
      benefits: ["💊 120 Kapseln pro Dose", "✅ All in One", "🛡️ Supports Health", "📅 Für deine tägliche Routine", "🇩🇪 Made in Germany"],
      badges: ["💊 120 Kapseln", "✅ All in One", "🛡️ Supports Health"],
    },
    {
      id: "shaker",
      name: "Top G Shaker",
      category: "Zubehör",
      filters: ["zubehoer"],
      size: "",
      price: 790,
      scale: 0.94,
      variantLabel: "Farbe",
      tags: [{ t: "Zubehör", c: "plain" }],
      variants: [{ id: "black-gold", name: "Black & Gold", emoji: "🥤", color: "#d6aa4f", img: "shaker.webp", w: 555, h: 1200 }],
      short: "Dein Shake, dein Statement. Schwarz mit goldenem Top-G-Logo.",
      desc: "Der Top G Shaker in Black & Gold: Schraubverschluss, Mess-Skala und das goldene Logo – für Shakes ohne Klumpen, im Gym und unterwegs.",
      benefits: ["🖤 Black & Gold Design", "🔒 Schraubverschluss", "📏 Mess-Skala", "🥤 Passt zu jedem Top G Shake"],
      badges: ["🖤 Black & Gold", "📏 Mess-Skala", "🔒 Schraubverschluss"],
    },
  ];

  /* Echte Instagram-Motive (aus den Beiträgen von @topg.nutrition) */
  const POSTS = [
    { url: "https://www.instagram.com/p/DWw3XFvjANV/", date: "05.04.2026", img: "clear-whey-apple.webp", w: 1080, h: 1080, color: "#6fbf3a", alt: "Clear Whey Protein Apple Rings: Fresh Apple Taste. Pure Power.", text: "Kennst du diese klumpigen Shakes? 😅 Vergiss sie. Ultra leicht, perfekt löslich und erfrischend wie ein Drink. So sollte Protein schmecken. 🍏💪" },
    { url: "https://www.instagram.com/p/DXB-lXKDAqU/", date: "12.04.2026", img: "eaa-back-in-stock.webp", w: 1080, h: 1349, color: "#d23c9a", alt: "EAA+ Cherry Fruit: More Reps. More Power.", text: "BACK IN STOCK 🚨🔥 MORE REPS. MORE POWER. Und ja… der Geschmack? BRUTAL. 🍒💥 EAA+ ist wieder da und stärker denn je." },
    { url: "https://www.instagram.com/p/DWw2SD9DOH_/", date: "05.04.2026", img: "your-goal-your-formula.webp", w: 1080, h: 1080, color: "#e2283c", alt: "Your Goal. Your Formula. Das Top G Nutrition Sortiment.", text: "Dein Ziel. Deine Formel. Kein Zufall, kein Shortcut – nur Fokus, Disziplin und der richtige Fuel. 🏆" },
  ];

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const byId = (id) => PRODUCTS.find((p) => p.id === id);
  const eur = (c) => (c / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Produktbild ---------- */
  function pimg(p, vi = 0, cls = "", eager = false) {
    const v = p.variants[vi] || p.variants[0];
    return `<img class="pimg ${cls}" src="${IMG}${v.img}" alt="${p.name} ${v.name}" width="${v.w}" height="${v.h}" style="--s:${p.scale}" ${eager ? "" : 'loading="lazy"'} decoding="async" draggable="false" />`;
  }
  function thumb(p, vi = 0) {
    const v = p.variants[vi] || p.variants[0];
    return `<img class="pimg" src="${IMG}${v.img.replace(".webp", "-thumb.webp")}" alt="${p.name} ${v.name}" width="${Math.round((v.w * 168) / v.h)}" height="168" loading="lazy" decoding="async" draggable="false" />`;
  }
  const subline = (p, vi = 0) => [p.variants[vi].name, p.size].filter(Boolean).join(" · ");

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
  const CART_KEY = "topg-cart-v2";
  let cart = store.get(CART_KEY, []).filter((l) => l && byId(l.id) && byId(l.id).variants[l.vi] && l.qty > 0);
  const keyOf = (id, vi) => `${id}::${vi}`;

  function addToCart(id, vi = 0, qty = 1, silent = false) {
    const p = byId(id);
    if (!p) return;
    vi = p.variants[vi] ? vi : 0;
    const key = keyOf(id, vi);
    const line = cart.find((l) => l.key === key);
    if (line) line.qty += qty;
    else cart.push({ key, id, vi, qty });
    saveCart();
    const btn = $("#cartOpen");
    btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
    if (!silent) toast(`✓ ${p.name} (${p.variants[vi].name}) im Warenkorb`);
  }
  function saveCart() { store.set(CART_KEY, cart); renderCart(); }

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
      return `<div class="ci" style="--c:${p.variants[l.vi].color}">
        <div class="ci__img">${thumb(p, l.vi)}</div>
        <div><b>${p.name}</b><small>${subline(p, l.vi)}</small>
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
  function closeCart() { drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); if (!modal.classList.contains("is-open")) document.body.classList.remove("lock"); }
  $("#cartOpen").addEventListener("click", openCart);
  drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close-cart]")) closeCart(); });
  $("#checkout").addEventListener("click", () => {
    if (!cart.length) return toast("Dein Warenkorb ist leer");
    toast("Checkout wird mit dem Shop-System verbunden (Shopify / Stripe)");
  });

  /* ---------- Produkte ---------- */
  function swatches(p) {
    if (p.variants.length < 2) {
      return `<span class="card__flavor"><i style="background:${p.variants[0].color}"></i>${subline(p)}</span>`;
    }
    return `<div class="swatches" role="group" aria-label="${p.variantLabel} wählen">${p.variants.map((v, i) =>
      `<button class="swatch ${i ? "" : "is-active"}" data-swatch="${i}" style="--sc:${v.color}" aria-pressed="${!i}"><i></i>${v.name}</button>`).join("")}${p.size ? `<span class="swatches__size">${p.size}</span>` : ""}</div>`;
  }

  function renderProducts() {
    $("#products").innerHTML = PRODUCTS.map((p) => `
      <article class="card reveal tilt ${p.wide ? "card--wide" : ""}" style="--c:${p.variants[0].color}" data-id="${p.id}" data-variant="0" data-filters="${p.filters.join(" ")}">
        <div class="card__tags">${p.tags.map((t) => `<span class="tag tag--${t.c}">${t.t}</span>`).join("")}</div>
        <div class="card__media" data-open="${p.id}" role="button" tabindex="0" aria-label="${p.name} ansehen">
          ${p.variants.length > 1 ? pimg(p, 1, "pimg--back") : ""}
          ${pimg(p, 0, "pimg--front")}
        </div>
        <div class="card__body">
          <span class="card__cat">${p.category}</span>
          <h3 class="card__title">${p.name}</h3>
          <p class="card__desc">${p.short}</p>
          ${swatches(p)}
          <div class="card__foot">
            <div class="price"><b>${eur(p.price)}</b><small>inkl. MwSt.</small></div>
            <button class="btn btn--ghost btn--sm" data-open="${p.id}">Details</button>
            <button class="add-btn" data-quick-add="${p.id}" aria-label="${p.name} in den Warenkorb">+</button>
          </div>
        </div>
      </article>`).join("");
  }

  // Sorte direkt auf der Karte wechseln
  function setCardVariant(card, vi) {
    const p = byId(card.dataset.id);
    const v = p.variants[vi];
    if (!v) return;
    card.dataset.variant = vi;
    card.style.setProperty("--c", v.color);
    const front = $(".pimg--front", card), back = $(".pimg--back", card);
    front.classList.add("is-swapping");
    setTimeout(() => {
      front.src = IMG + v.img; front.alt = `${p.name} ${v.name}`;
      if (back) { const o = p.variants[vi ? 0 : 1]; back.src = IMG + o.img; back.alt = `${p.name} ${o.name}`; }
      front.classList.remove("is-swapping");
    }, 180);
    $$(".swatch", card).forEach((s, i) => { s.classList.toggle("is-active", i === vi); s.setAttribute("aria-pressed", i === vi); });
  }

  function applyFilter(f) {
    $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === f));
    let n = 0;
    $$(".card").forEach((c) => {
      const show = f === "all" || c.dataset.filters.split(" ").includes(f);
      c.classList.toggle("is-hidden", !show);
      if (show) { c.classList.remove("pop"); void c.offsetWidth; c.style.animationDelay = n++ * 60 + "ms"; c.classList.remove("is-in"); c.classList.add("pop"); }
    });
  }
  $("#filters").addEventListener("click", (e) => { const b = e.target.closest(".filter"); if (b) applyFilter(b.dataset.filter); });
  $$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => applyFilter(a.dataset.filterLink)));

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let modalState = null;
  function openModal(id, vi = 0) {
    const p = byId(id);
    if (!p) return;
    vi = p.variants[vi] ? vi : 0;
    modalState = { id, vi, qty: 1 };
    const v = p.variants[vi];
    $("#modalContent").innerHTML = `
      <div class="pd" style="--c:${v.color}">
        <div class="pd__media">
          <div class="card__tags">${p.tags.map((t) => `<span class="tag tag--${t.c}">${t.t}</span>`).join("")}</div>
          ${pimg(p, vi, "", true)}
        </div>
        <div class="pd__info">
          <span class="card__cat">${[p.category, p.size].filter(Boolean).join(" · ")}</span>
          <h3 id="modalTitle">${p.name}</h3>
          <p>${p.desc}</p>
          <div class="pd__price"><b>${eur(p.price)}</b><small>inkl. MwSt., zzgl. Versand</small></div>
          <p class="pd__label">${p.variantLabel}</p>
          <div class="chips">${p.variants.map((x, i) => `<button class="chip ${i === vi ? "is-active" : ""}" data-vi="${i}" style="--sc:${x.color}"><i></i>${x.name}</button>`).join("")}</div>
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
    const chip = e.target.closest("[data-vi]");
    if (chip) {
      const p = byId(modalState.id);
      modalState.vi = +chip.dataset.vi;
      const v = p.variants[modalState.vi];
      $$(".chip", modal).forEach((c) => c.classList.toggle("is-active", c === chip));
      $(".pd", modal).style.setProperty("--c", v.color);
      const img = $(".pd__media .pimg", modal);
      img.classList.add("is-swapping");
      setTimeout(() => { img.src = IMG + v.img; img.alt = `${p.name} ${v.name}`; img.classList.remove("is-swapping"); }, 180);
    }
    const q = e.target.closest("[data-mq]");
    if (q) {
      modalState.qty = Math.max(1, Math.min(20, modalState.qty + +q.dataset.mq));
      $("#mQty").textContent = modalState.qty;
      $("#mPrice").textContent = eur(byId(modalState.id).price * modalState.qty);
    }
    if (e.target.closest("#mAdd")) { addToCart(modalState.id, modalState.vi, modalState.qty); closeModal(); }
  });

  /* ---------- Globale Klicks ---------- */
  const variantOf = (el) => { const h = el.closest("[data-variant]"); return h ? +h.dataset.variant : 0; };
  document.addEventListener("click", (e) => {
    const sw = e.target.closest("[data-swatch]");
    if (sw) return setCardVariant(sw.closest(".card"), +sw.dataset.swatch);
    const open = e.target.closest("[data-open]");
    if (open) return openModal(open.dataset.open, variantOf(open));
    const qa = e.target.closest("[data-quick-add]");
    if (qa) {
      addToCart(qa.dataset.quickAdd, variantOf(qa));
      if (qa.classList.contains("add-btn")) {
        qa.classList.add("added"); qa.textContent = "✓";
        setTimeout(() => { qa.classList.remove("added"); qa.textContent = "+"; }, 1400);
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeCart(); }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card__media")) { e.preventDefault(); openModal(e.target.dataset.open, variantOf(e.target)); }
  });

  /* ---------- Hero Produkt-Switch ---------- */
  let heroIdx = 0, heroTimer;
  function setHero(i, animate = true) {
    heroIdx = (i + PRODUCTS.length) % PRODUCTS.length;
    const p = PRODUCTS[heroIdx];
    const stage = $("#heroProduct");
    const swap = () => {
      stage.innerHTML = pimg(p, 0, "", true);
      if (animate) stage.firstElementChild.classList.add("swap-in");
      $$(".hero__badge").forEach((b, k) => (b.textContent = p.badges[k]));
    };
    const cur = stage.firstElementChild;
    if (cur && animate) { cur.classList.add("swap-out"); setTimeout(swap, 380); } else swap();
    $(".hero").style.setProperty("--accent", p.variants[0].color);
    $$("#heroSwitch button").forEach((b, k) => { b.classList.toggle("is-active", k === heroIdx); b.setAttribute("aria-selected", k === heroIdx); });
  }
  $("#heroSwitch").innerHTML = PRODUCTS.map((p) => `<button role="tab" aria-label="${p.name}" title="${p.name}" style="--c:${p.variants[0].color}"><img src="${IMG}${p.variants[0].img.replace(".webp", "-thumb.webp")}" alt="" width="${Math.round((p.variants[0].w * 168) / p.variants[0].h)}" height="168" decoding="async" /></button>`).join("");
  $("#heroSwitch").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setHero([...b.parentNode.children].indexOf(b));
    restartHeroTimer();
  });
  $("#heroProduct").addEventListener("click", () => openModal(PRODUCTS[heroIdx].id));
  function restartHeroTimer() { clearInterval(heroTimer); if (!reduced) heroTimer = setInterval(() => setHero(heroIdx + 1), 5000); }

  // Maus-Parallax im Hero
  const stageEl = $("#heroStage");
  if (finePointer) {
    stageEl.addEventListener("mousemove", (e) => {
      const r = stageEl.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      $("#heroProduct").style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 16}deg) translateZ(20px)`;
    });
    stageEl.addEventListener("mouseleave", () => ($("#heroProduct").style.transform = ""));
  }

  /* ---------- Clear Whey: Sorten-Wechsler ---------- */
  const flavorSec = $("#clear"), clearP = byId("clear");
  function setFlavor(vi, animate = true) {
    const v = clearP.variants[vi];
    flavorSec.dataset.variant = vi;
    flavorSec.style.setProperty("--fc", v.color);
    const tubBox = $("#flavorTub");
    const swap = () => { tubBox.innerHTML = pimg(clearP, vi); if (animate) tubBox.firstElementChild.classList.add("swap-in"); };
    const cur = tubBox.firstElementChild;
    if (cur && animate) { cur.classList.add("swap-out"); setTimeout(swap, 320); } else swap();
    const word = $("#flavorWord");
    if (animate) { word.classList.remove("flip"); void word.offsetWidth; word.classList.add("flip"); setTimeout(() => (word.textContent = v.word), 160); }
    else word.textContent = v.word;
    $$("#flavorToggle button").forEach((b, i) => { b.classList.toggle("is-active", i === vi); b.setAttribute("aria-selected", i === vi); });
  }
  $("#flavorToggle").innerHTML = clearP.variants.map((v, i) => `<button role="tab" data-flavor="${i}" style="--sc:${v.color}"><span>${v.emoji}</span>${v.name}</button>`).join("");
  $("#flavorToggle").addEventListener("click", (e) => { const b = e.target.closest("[data-flavor]"); if (b && +b.dataset.flavor !== +flavorSec.dataset.variant) setFlavor(+b.dataset.flavor); });
  $("#flavorAdd").addEventListener("click", () => addToCart("clear", +flavorSec.dataset.variant));

  /* ---------- EAA Spotlight ---------- */
  $("#spotlightProduct").innerHTML = pimg(byId("eaa"));

  /* ---------- Instagram ---------- */
  $("#insta").innerHTML = POSTS.map((po) => `
    <a class="post reveal" href="${po.url}" target="_blank" rel="noopener" style="--c:${po.color};--r:${(po.w / po.h).toFixed(3)}" aria-label="Instagram-Beitrag öffnen: ${po.alt}">
      <div class="post__img"><img src="${POST}${po.img}" alt="${po.alt}" width="${po.w}" height="${po.h}" loading="lazy" decoding="async" /></div>
      <div class="post__body">
        <p>${po.text}</p>
        <div class="post__meta"><span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9"/></svg>@topg.nutrition</span><span>${po.date}</span></div>
      </div>
    </a>`).join("");

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
    else if (diet === "lactose") stack = goal === "muskelaufbau" ? ["vegan", "eaa"] : ["clear", "eaa"];
    else if (diet === "light") stack = ["clear", "eaa"];
    else stack = { muskelaufbau: ["gainer", "whey"], definition: ["clear", "eaa"], performance: ["eaa", "whey"], allround: ["whey", "multi"] }[goal].slice();
    if (freq === 1) stack = stack.slice(0, 1);
    if (freq >= 3 && diet !== "vegan" && !stack.includes("eaa")) stack.push("eaa");
    if (freq === 4 && diet !== "vegan" && !stack.includes("multi")) stack.push("multi");
    if (stack.length === 1) stack.push("shaker");
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
      <p class="result__text">Basierend auf deinen Antworten passt dieser Stack zu dir. Different goals. Different fuel. Same champion mentality.</p>
      <div class="stack">${stack.map((id, i) => { const p = byId(id); return `<button class="stack__item" data-open="${p.id}" style="animation-delay:${i * 90}ms;--c:${p.variants[0].color}"><span class="stack__img">${thumb(p)}</span><span><b>${p.name}</b><small>${subline(p)}</small></span><span class="price"><b>${eur(p.price)}</b></span></button>`; }).join("")}</div>
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
    if (s) { const ids = s.dataset.addStack.split(","); ids.forEach((id) => addToCart(id, 0, 1, true)); toast(`✓ ${ids.length} Produkte im Warenkorb`); openCart(); }
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
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
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
      el.classList.add("is-in");
      $$("[data-count]", el).forEach(countUp);
      revObs.unobserve(el);
    });
  }, { threshold: 0, rootMargin: "0px 0px 120px 0px" }); // startet kurz bevor der Block sichtbar wird

  /* ---------- 3D-Tilt ---------- */
  function bindTilt(el) {
    if (!finePointer) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", x * 100 + "%");
      el.style.setProperty("--my", y * 100 + "%");
      const k = el.classList.contains("card--wide") ? 5 : 10;
      el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * k}deg) rotateX(${(0.5 - y) * k}deg) translateY(-4px)`;
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
  setFlavor(0, false);
  particles();
  $$(".reveal").forEach((el) => revObs.observe(el));
  $$(".tilt").forEach(bindTilt);
  $$(".magnetic").forEach(bindMagnetic);
  $("#year").textContent = new Date().getFullYear();

  const loaded = () => { $("#preloader").classList.add("is-done"); document.documentElement.classList.add("is-loaded"); };
  window.addEventListener("load", () => setTimeout(loaded, 700));
  setTimeout(loaded, 3000); // Fallback, falls "load" verzögert ist
})();
