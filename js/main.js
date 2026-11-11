/*
 * content.js 의 문구를 읽어 화면을 그리는 파일입니다.
 * 문구만 바꿀 때는 이 파일을 고칠 필요가 없습니다.
 */
(function () {
  const STORAGE_KEY = "portfolio-lang";
  const $ = (id) => document.getElementById(id);

  // 글자를 안전하게 넣기 위한 함수 (HTML 태그로 해석되지 않도록)
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const list = (items) => `<ul class="bullets">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const tags = (items) => `<div class="tags">${items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>`;
  const sectionHead = (label, title) =>
    `<p class="section-label">${esc(label)}</p><h2 class="section-title">${esc(title)}</h2>`;
  const toggle = (openText, closeText) =>
    `<summary><span class="when-closed">${esc(openText)}</span><span class="when-open">${esc(closeText)}</span></summary>`;

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
    $("site-nav").innerHTML = ["about", "experience", "projects", "now", "notes", "contact"]
      .filter((k) => k !== "notes" || t.notes.items.length > 0)
      .map((k) => `<a href="#${k}">${esc(n[k])}</a>`)
      .join("");

    $("lang-switch").innerHTML = SITE.languages
      .map((l) => `<button type="button" data-lang="${l.code}" aria-pressed="${l.code === lang}">${esc(l.label)}</button>`)
      .join("");
    $("lang-switch").querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
  }

  function renderHero(t) {
    const h = t.hero;
    const photo = SITE.profile.photo;
    $("profile-photo").innerHTML = photo
      ? `<img src="${esc(photo)}" alt="${esc(h.name)}" />`
      : `<span>${esc(h.photo)}</span>`;
    $("hero-eyebrow").textContent = h.eyebrow;
    $("hero-name").textContent = h.name;
    $("hero-headline").textContent = h.headline;
    $("hero-intro").textContent = h.intro;
    // 국제정치경제는 첫 화면용 짧은 명칭, 통상 분야는 Now의 기존 항목을 사용합니다.
    $("hero-interests").innerHTML = tags([h.politicalEconomyInterest, t.now.interests[2]]);
    $("cta-projects").textContent = h.ctaProjects;
    $("cta-contact").textContent = h.ctaContact;

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
      ${sectionHead(a.label, a.title)}
      <div class="about-body">${a.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <details class="more">${toggle(a.moreOpen, a.moreClose)}
        <div class="about-grid" style="margin-top:18px">
          <div class="card span-2"><h3>${esc(a.educationTitle)}</h3>${edu}</div>
          <div class="card"><h3>${esc(a.languagesTitle)}</h3>${list(a.languages)}
            <h3 style="margin-top:18px">${esc(a.certsTitle)}</h3>${list(a.certs)}</div>
          <div class="card"><h3>${esc(a.toolsTitle)}</h3>${tools}</div>
          <div class="card span-2"><h3>${esc(a.hobbiesTitle)}</h3>${tags(a.hobbies)}</div>
        </div>
      </details>
    </div>`;
  }

  function renderExperience(t) {
    const x = t.experience;
    const items = x.items
      .map(
        (e) => `<article class="card">
          <div class="exp-head"><h3>${esc(e.org)}</h3><span class="meta">${esc(e.role)} | ${esc(e.period)}</span></div>
          <p class="meta">${esc(e.events)}</p>
          <p class="sub-title">${esc(x.dutiesTitle)}</p>${list(e.duties)}
          <div class="case-box"><p class="sub-title" style="margin-top:0">${esc(x.caseTitle)}</p><p>${esc(e.caseText)}</p></div>
          <p class="sub-title">${esc(x.skillsTitle)}</p>${tags(e.skills)}
        </article>`
      )
      .join("");
    $("experience").innerHTML = `<div class="container">${sectionHead(x.label, x.title)}${items}</div>`;
  }

  function renderProjects(t) {
    const p = t.projects;
    const L = p.labels;
    const cards = p.items
      .map((it, i) => {
        const url = (SITE.links.projects || {})[it.id];
        const reportUrl = (SITE.links.reports || {})[it.id];
        const reportType = /\.pdf(?:[?#]|$)/i.test(reportUrl || "") ? "application/pdf" : "text/html";
        const result = it.result ? `<p class="sub-title">${esc(L.result)}</p><p class="body">${esc(it.result)}</p>` : "";
        const note = it.note ? `<p class="note">${esc(it.note)}</p>` : "";
        const caseStudy = ["workflow", "designIntent", "aiUse", "artifactReview", "limits", "nextSteps"]
          .filter((key) => it.caseStudy && it.caseStudy[key])
          .map((key) => `<p class="sub-title">${esc(L[key])}</p><p class="body">${esc(it.caseStudy[key])}</p>`)
          .join("");
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
          <span class="kicker">${esc(p.kicker)} ${String.fromCharCode(65 + i)}</span>
          <h3>${esc(it.name)}</h3>
          <p class="summary">${esc(it.summary)}</p>
          ${it.question ? `<p class="sub-title">${esc(L.question)}</p><p class="body">${esc(it.question)}</p>` : ""}
          <dl class="project-meta">
            <dt>${esc(L.period)}</dt><dd>${esc(it.period)}</dd>
            <dt>${esc(L.type)}</dt><dd>${esc(it.type)}</dd>
            <dt>${esc(L.status)}</dt><dd>${esc(it.status)}</dd>
          </dl>
          <details class="more">${toggle(L.moreOpen, L.moreClose)}
            ${it.contribution ? `<p class="sub-title">${esc(L.contribution)}</p><p class="body">${esc(it.contribution)}</p>` : ""}
            <p class="sub-title">${esc(L.problem)}</p><p class="body">${esc(it.problem)}</p>
            ${result}
            ${caseStudy}
            <p class="sub-title">${esc(L.role)}</p>${list(it.role)}
            <p class="sub-title">${esc(L.focus)}</p>${list(it.focus)}
            ${note}
            ${materialLinks}
          </details>
          ${link}
        </article>`;
      })
      .join("");

    const extra = p.extra
      .map(
        (e) => `<div class="extra-item"><strong>${esc(e.name)}</strong>
          <p class="meta">${esc(e.meta)}</p><p class="tool-item">${esc(e.desc)}</p></div>`
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
      <div class="now-grid">
        <div class="card"><p class="meta">${esc(n.asOf)}</p><p class="statement" style="margin-top:8px">${esc(n.statement)}</p>
          <p class="sub-title">${esc(n.doingTitle)}</p>${list(n.doing)}</div>
        <div class="card"><p class="sub-title" style="margin-top:0">${esc(n.interestsTitle)}</p>${tags(n.interests)}</div>
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
    // 주소가 비어 있는 링크는 버튼을 만들지 않습니다.
    const buttons = [
      L.email ? `<a class="btn btn-primary" href="mailto:${esc(L.email)}">${esc(c.email)}</a>` : "",
      L.linkedin ? `<a class="btn btn-outline" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${esc(c.linkedin)}</a>` : "",
      L.github ? `<a class="btn btn-outline" href="${esc(L.github)}" target="_blank" rel="noopener">${esc(c.github)}</a>` : ""
    ].join("");
    $("contact").innerHTML = `<div class="container">
      ${sectionHead(c.label, c.title)}
      <div class="card contact-card">
        <p>${esc(c.text)}</p>
        <div class="contact-links">${buttons}</div>
        ${L.email ? `<p class="email-text">${esc(L.email)}</p>` : ""}
      </div>
    </div>`;
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
