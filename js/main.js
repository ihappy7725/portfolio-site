/*
 * content.js 의 문구를 읽어 화면을 그리는 파일입니다.
 * 문구만 바꿀 때는 이 파일을 고칠 필요가 없습니다.
 */
(function () {
  const STORAGE_KEY = "portfolio-lang";
  // 언어를 바꿔도 작성 중인 내용은 현재 탭에서 유지합니다.
  const contactDraft = { name: "", email: "", message: "" };
  const $ = (id) => document.getElementById(id);

  // 글자를 안전하게 넣기 위한 함수 (HTML 태그로 해석되지 않도록)
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const list = (items) => `<ul class="bullets">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const tags = (items) => `<div class="tags">${items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>`;
  const sectionHead = (label, title, breakAfter = "") => {
    const breakAt = breakAfter && title.startsWith(breakAfter) ? breakAfter.length : 0;
    const heading = breakAt
      ? `<span class="title-line">${esc(title.slice(0, breakAt))}</span><span class="title-line">${esc(title.slice(breakAt))}</span>`
      : esc(title);
    return `<p class="section-label">${esc(label)}</p><h2 class="section-title">${heading}</h2>`;
  };
  const toggle = (openText, closeText) =>
    `<summary><span class="when-closed">${esc(openText)}</span><span class="when-open">${esc(closeText)}</span></summary>`;

  // 원문을 바꾸지 않고 완성된 문장마다 읽기 쉬운 줄을 만듭니다.
  function sentences(text, lang) {
    if (typeof Intl.Segmenter !== "function") return esc(text);
    const parts = new Intl.Segmenter(lang, { granularity: "sentence" }).segment(text);
    return [...parts].map(({ segment }) => `<span class="sentence">${esc(segment)}</span>`).join("");
  }

  function getLang() {
    const codes = SITE.languages.map((l) => l.code);
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (codes.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (codes.includes(saved)) return saved;
    } catch (e) { /* 저장소를 쓸 수 없는 환경이면 기본 언어 사용 */ }
    return SITE.defaultLang;
  }

  function renderHeader(t, lang) {
    const n = t.nav;
    $("header-name").textContent = SITE.profile.headerName;
    $("site-nav").setAttribute("aria-label", t.header.navigationLabel);
    $("site-nav").innerHTML = ["about", "projects", "experience", "now", "notes", "contact"]
      .filter((k) => k !== "notes" || t.notes.items.length > 0)
      .map((k) => `<a href="#${k}">${esc(n[k])}</a>`)
      .join("");

    const picker = $("lang-switch");
    const current = SITE.languages.find((l) => l.code === lang);
    picker.setAttribute("aria-label", t.header.languageLabel);
    picker.innerHTML = `<button type="button" class="language-toggle" aria-expanded="false" aria-controls="language-menu" aria-label="${esc(t.header.languageLabel)}: ${esc(current.label)}">
        <span>${esc(current.label)}</span><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="m3 4.5 3 3 3-3" /></svg>
      </button>
      <div class="language-menu" id="language-menu" hidden>
        <ul class="language-options">${SITE.languages.map((l) => `<li><button type="button" data-lang="${l.code}" aria-pressed="${l.code === lang}" lang="${l.code}">${esc(l.label)}</button></li>`).join("")}</ul>
      </div>`;
    const trigger = picker.querySelector(".language-toggle");
    const menu = $("language-menu");
    const options = [...menu.querySelectorAll("button")];
    function openMenu(open) {
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", String(open));
    }
    trigger.onclick = () => openMenu(menu.hidden);
    picker.onpointerenter = (event) => {
      if (event.pointerType !== "touch") openMenu(true);
    };
    picker.onpointerleave = () => {
      if (!picker.contains(document.activeElement)) openMenu(false);
    };
    picker.onfocusout = (event) => {
      if (!picker.contains(event.relatedTarget)) openMenu(false);
    };
    picker.onkeydown = (event) => {
      if (event.key === "Escape") {
        openMenu(false);
        trigger.focus();
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openMenu(true);
        const index = options.indexOf(document.activeElement);
        const next = index < 0 ? (event.key === "ArrowDown" ? 0 : options.length - 1)
          : (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
        options[next].focus();
      }
    };
    options.forEach((button) => {
      button.onclick = () => {
        setLang(button.dataset.lang);
        picker.querySelector(".language-toggle").focus();
      };
    });
  }

  document.addEventListener("pointerdown", (event) => {
    if (!$("lang-switch").contains(event.target)) {
      $("language-menu").hidden = true;
      $("lang-switch").querySelector(".language-toggle").setAttribute("aria-expanded", "false");
    }
  });

  function renderHero(t) {
    const h = t.hero;
    $("hero-eyebrow").textContent = h.eyebrow;
    $("hero-name").textContent = h.name;
    const breakAfter = h.headlineBreakAfter || "";
    const breakIndex = breakAfter ? h.headline.indexOf(breakAfter) : -1;
    const breakAt = breakIndex >= 0 ? breakIndex + breakAfter.length : 0;
    const headlineTail = h.headline.slice(breakAt);
    const headlineGap = headlineTail.match(/^\s*/)[0];
    $("hero-headline").innerHTML = breakAt > 0
      ? `<span class="headline-phrase">${esc(h.headline.slice(0, breakAt))}</span>${esc(headlineGap)}<wbr><span class="headline-phrase">${esc(headlineTail.slice(headlineGap.length))}</span>`
      : esc(h.headline);
    $("hero-intro").innerHTML = sentences(h.intro, t.htmlLang);
    // 국제정치경제는 첫 화면용 짧은 명칭, 통상 분야는 Now의 기존 항목을 사용합니다.
    $("hero-interests").innerHTML = tags([h.politicalEconomyInterest, t.now.interests[2]]);

    $("strengths-title").textContent = t.strengths.title;
    $("strengths").innerHTML = t.strengths.items
      .map(
        (s, i) => `<article class="strength">
          <span class="num">${String(i + 1).padStart(2, "0")}</span>
          <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></article>`
      )
      .join("");
  }

  function renderAbout(t) {
    const a = t.about;
    const edu = a.education
      .map(
        (e) => `<div class="edu-item"><strong>${esc(e.name)}</strong>
          <p class="meta">${esc(e.period)}</p>${list(e.lines)}</div>`
      )
      .join("");
    const tools = a.tools
      .map((x) => `<p class="tool-item"><strong>${esc(x.name)}</strong>: ${esc(x.desc)}</p>`)
      .join("");

    $("about").innerHTML = `<div class="container">
      ${sectionHead(a.label, a.title, a.titleBreakAfter)}
      <div class="about-body">${a.body.map((p) => `<p>${sentences(p, t.htmlLang)}</p>`).join("")}</div>
      <div class="about-accordions">
        <details class="disclosure about-panel">
          <summary>${esc(a.educationTitle)}</summary>
          <div class="disclosure-body">${edu}</div>
        </details>
        <details class="disclosure about-panel">
          <summary>${esc(a.languagesTitle)} / ${esc(a.certsTitle)}</summary>
          <div class="disclosure-body">
            <h3>${esc(a.languagesTitle)}</h3>${list(a.languages)}
            <h3>${esc(a.certsTitle)}</h3>${list(a.certs)}
          </div>
        </details>
        <details class="disclosure about-panel">
          <summary>${esc(a.toolsTitle)}</summary>
          <div class="disclosure-body">${tools}</div>
        </details>
      </div>
    </div>`;
  }

  function renderExperience(t) {
    const x = t.experience;
    const items = x.items
      .map(
        (e) => `<article class="card experience-card">
          <div class="exp-head"><h3>${esc(e.org)} <span class="exp-role">${esc(e.role)}</span></h3><p class="exp-period">${esc(e.period)}</p></div>
          <p class="meta">${esc(e.events)}</p>
          <p class="experience-summary">${esc(e.summary)}</p>
          <div class="experience-skills"><p class="sr-only">${esc(x.skillsTitle)}</p>${tags(e.skills)}</div>
          <div class="experience-details">
            <details class="disclosure">
              <summary>${esc(x.dutiesTitle)}</summary><div class="disclosure-body">${list(e.duties)}</div>
            </details>
            <details class="disclosure">
              <summary>${esc(x.caseTitle)}</summary><div class="disclosure-body"><p>${esc(e.caseText)}</p></div>
            </details>
          </div>
        </article>`
      )
      .join("");
    $("experience").innerHTML = `<div class="container">${sectionHead(x.label, x.title)}${items}</div>`;
  }

  function renderProjects(t) {
    const p = t.projects;
    const L = p.labels;
    const cards = p.items
      .map((it) => {
        const url = (SITE.links.projects || {})[it.id];
        const reportUrl = (SITE.links.reports || {})[it.id];
        const reportType = /\.pdf(?:[?#]|$)/i.test(reportUrl || "") ? "application/pdf" : "text/html";
        const note = it.note ? `<p class="note">${esc(it.note)}</p>` : "";
        const cs = it.caseStudy || {};
        const block = (key) => cs[key] ? `<p class="sub-title">${esc(L[key])}</p><p class="body">${esc(cs[key])}</p>` : "";
        // AI 활용은 "AI에게 맡긴 일"과 "직접 정하고 확인한 일"을 나눠 보여줍니다.
        const ai = cs.ai
          ? `<p class="sub-title">${esc(L.aiUse)}</p>
            <dl class="ai-split">
              <div><dt>${esc(L.aiDelegated)}</dt><dd>${esc(cs.ai.delegated)}</dd></div>
              <div><dt>${esc(L.aiOwn)}</dt><dd>${esc(cs.ai.own)}</dd></div>
            </dl>`
          : "";
        // 학습실 목록: 프로젝트 주소 뒤에 #learn-아이디 를 붙여 해당 학습실로 바로 이동합니다.
        const rooms = url && (it.rooms || []).length
          ? `<p class="sub-title">${esc(L.rooms)} <span class="count">${it.rooms.length}</span></p>
            <ol class="room-list">${it.rooms.map((r) => `<li><a href="${esc(url.replace(/#.*$/, "") + "#learn-" + r.id)}" target="_blank" rel="noopener">${esc(r.title)}</a><span class="meta">${esc(r.tool)}</span></li>`).join("")}</ol>`
          : "";
        const caseStudy = block("process") + ai + block("outcome") + rooms + block("limits");
        const materialUrls = (SITE.links.projectMaterials || {})[it.id] || {};
        const materials = (it.materials || []).map((material) => {
          const materialUrl = materialUrls[material.id];
          if (!materialUrl) return "";
          const type = /\.mp4(?:[?#]|$)/i.test(materialUrl) ? ' type="video/mp4"' : "";
          return `<a class="btn btn-outline" href="${esc(materialUrl)}" target="_blank" rel="noopener"${type}>${esc(material.label)}</a>`;
        }).join("");
        const materialLinks = materials
          ? `<p class="sub-title">${esc(L.materials)}</p><div class="link-row">${materials}</div>`
          : "";
        const buttons = [
          url ? `<a class="btn btn-outline" href="${esc(url)}" target="_blank" rel="noopener">${esc(L.link)}</a>` : "",
          reportUrl ? `<a class="btn btn-outline" href="${esc(reportUrl)}" target="_blank" rel="noopener" type="${reportType}" hreflang="ko">${esc(L.report)}</a>` : ""
        ].join("");
        const link = buttons ? `<div class="link-row">${buttons}</div>` : "";
        return `<article class="card project">
          <div class="project-topline">
            <dl class="project-meta">
              <div><dt class="sr-only">${esc(L.type)}</dt><dd>${esc(it.type)}</dd></div>
              <div><dt class="sr-only">${esc(L.period)}</dt><dd>${esc(it.period)}</dd></div>
            </dl>
          </div>
          <h3>${esc(it.name)}</h3>
          <p class="summary">${esc(it.summary)}</p>
          <div class="project-overview">
            <div>
              ${it.question ? `<h4 class="sub-title">${esc(L.question)}</h4><p class="body">${esc(it.question)}</p>` : ""}
              <h4 class="sub-title">${esc(L.problem)}</h4><p class="body">${esc(it.problem)}</p>
            </div>
            <div>
              ${it.contribution ? `<h4 class="sub-title">${esc(L.contribution)}</h4><p class="body">${esc(it.contribution)}</p>` : ""}
            </div>
          </div>
          <details class="more project-details">${toggle(L.moreOpen, L.moreClose)}
            <div class="project-details-body">
              <dl class="project-status"><dt>${esc(L.status)}</dt><dd>${esc(it.status)}</dd></dl>
              <p class="sub-title">${esc(L.role)}</p>${list(it.role)}
              ${caseStudy}
              ${materialLinks}
              ${note}
            </div>
          </details>
          ${link}
        </article>`;
      })
      .join("");

    const extra = p.extra
      .map(
        (e) => `<div class="extra-item"><strong>${esc(e.name)}</strong>
          ${e.meta ? `<p class="meta">${esc(e.meta)}</p>` : ""}<p class="tool-item">${esc(e.desc)}</p></div>`
      )
      .join("");

    $("projects").innerHTML = `<div class="container">
      ${sectionHead(p.label, p.title)}
      <p class="lead">${esc(p.intro)}</p>
      <div class="projects-grid" style="margin-top:20px">${cards}</div>
      <div class="card extra">
        <details class="more" style="margin-top:0;border-top:0;padding-top:0">
          <summary><span>${esc(p.extraTitle)}</span></summary>
          <div class="extra-list">${extra}</div>
        </details>
      </div>
    </div>`;
  }

  function renderNow(t) {
    const n = t.now;
    $("now").innerHTML = `<div class="container">
      ${sectionHead(n.label, n.title)}
      <p class="now-as-of">${esc(n.asOf)}</p>
      <div class="now-statement"><p class="statement">${esc(n.statement)}</p></div>
      <div class="now-grid">
        <div><h3>${esc(n.doingTitle)}</h3>${list(n.doing)}</div>
        <div><h3>${esc(n.interestsTitle)}</h3>${tags(n.interests)}</div>
      </div>
    </div>`;
  }

  function renderNotes(t) {
    const n = t.notes;
    const section = $("notes");
    section.hidden = n.items.length === 0;
    if (section.hidden) {
      section.innerHTML = "";
      return;
    }

    // YYYY-MM-DD 형식의 날짜를 기준으로 최신 글부터 표시합니다.
    const items = [...n.items].sort((a, b) => b.date.localeCompare(a.date));
    const cards = items.map((item) => {
      let url = "";
      if (item.link) {
        try {
          const target = new URL(item.link, location.href);
          if (["http:", "https:"].includes(target.protocol)) url = target.href;
        } catch (e) { /* 유효하지 않은 주소는 링크 없이 제목만 표시 */ }
      }
      const title = url ? `<a href="${esc(url)}">${esc(item.title)}</a>` : esc(item.title);
      return `<li class="card note-card">
        <time class="meta" datetime="${esc(item.date)}">${esc(item.date)}</time>
        <h3>${title}</h3>
        <p class="note-summary">${esc(item.summary)}</p>
        ${tags(item.tags)}
      </li>`;
    }).join("");

    section.innerHTML = `<div class="container">
      ${sectionHead(n.label, n.title)}
      <ul class="notes-list">${cards}</ul>
    </div>`;
  }

  function renderContact(t) {
    const c = t.contact;
    const L = SITE.links;
    const f = c.form;
    // 주소가 비어 있는 링크는 버튼을 만들지 않습니다.
    const buttons = [
      L.linkedin ? `<a class="btn btn-outline" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${esc(c.linkedin)}</a>` : "",
      L.github ? `<a class="btn btn-outline" href="${esc(L.github)}" target="_blank" rel="noopener">${esc(c.github)}</a>` : ""
    ].join("");
    $("contact").innerHTML = `<div class="container">
      ${sectionHead(c.label, c.title)}
      <div class="contact-grid">
        <div class="contact-intro">
          <p class="lead">${esc(c.text)}</p>
          ${L.email ? `<a class="contact-address" href="mailto:${esc(L.email)}" aria-label="${esc(c.email)}: ${esc(L.email)}">${esc(L.email)}</a>` : ""}
          ${buttons ? `<div class="contact-links">${buttons}</div>` : ""}
        </div>
        ${L.email ? `<form class="card contact-form" id="contact-form" action="mailto:${esc(L.email)}">
          <div class="form-field"><label for="contact-name">${esc(f.nameLabel)}</label><input id="contact-name" name="name" autocomplete="name" required value="${esc(contactDraft.name)}" /></div>
          <div class="form-field"><label for="contact-email">${esc(f.emailLabel)}</label><input id="contact-email" name="email" type="email" autocomplete="email" required value="${esc(contactDraft.email)}" /></div>
          <div class="form-field"><label for="contact-message">${esc(f.messageLabel)}</label><textarea id="contact-message" name="message" rows="6" required>${esc(contactDraft.message)}</textarea></div>
          <button class="btn btn-primary" type="submit" aria-describedby="contact-form-hint">${esc(f.submitLabel)}</button>
          <p class="form-hint" id="contact-form-hint">${esc(f.hint)}</p>
          <a id="contact-draft-link" hidden></a>
        </form>` : ""}
      </div>
    </div>`;
    const form = $("contact-form");
    if (form) {
      $("contact-message").value = contactDraft.message;
      function readDraft() {
        const data = new FormData(form);
        Object.keys(contactDraft).forEach((key) => { contactDraft[key] = String(data.get(key) || ""); });
      }
      form.oninput = readDraft;
      form.onsubmit = (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        readDraft();
        const name = contactDraft.name.trim();
        const body = `${f.nameLabel}: ${name}\r\n${f.emailLabel}: ${contactDraft.email.trim()}\r\n\r\n${contactDraft.message}`;
        const draftLink = $("contact-draft-link");
        draftLink.href = `mailto:${L.email}?subject=${encodeURIComponent(`${f.subject} | ${name}`)}&body=${encodeURIComponent(body)}`;
        draftLink.click();
      };
    }
    $("footer").textContent = t.footer;
  }

  function render(lang) {
    const t = SITE.i18n[lang] || SITE.i18n[SITE.defaultLang];
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", `${t.hero.headline} ${t.meta.description}`);
    renderHeader(t, lang);
    renderHero(t);
    renderAbout(t);
    renderExperience(t);
    renderProjects(t);
    renderNow(t);
    renderNotes(t);
    renderContact(t);
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 무시 */ }
    render(lang);
  }

  render(getLang());
})();
