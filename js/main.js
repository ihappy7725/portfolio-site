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
    const segmenter = typeof Intl.Segmenter === "function"
      ? new Intl.Segmenter(lang, { granularity: "sentence" }) : null;
    return String(text ?? "").split(/\r?\n/).map((paragraph) => {
      const parts = segmenter ? [...segmenter.segment(paragraph)].map(({ segment }) => segment) : [paragraph];
      return parts.map((part) => `<span class="sentence">${esc(part)}</span>`).join("");
    }).join("\n");
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
    $("hero-name").textContent = h.name;
    const breakAfter = h.headlineBreakAfter || "";
    const breakIndex = breakAfter ? h.headline.indexOf(breakAfter) : -1;
    const breakAt = breakIndex >= 0 ? breakIndex + breakAfter.length : 0;
    const headlineTail = h.headline.slice(breakAt);
    const headlineGap = headlineTail.match(/^\s*/)[0];
    $("hero-headline").innerHTML = breakAt > 0
      ? `<span class="headline-phrase">${esc(h.headline.slice(0, breakAt))}</span>${esc(headlineGap)}<wbr><span class="headline-phrase">${esc(headlineTail.slice(headlineGap.length))}</span>`
      : esc(h.headline);
    // 국제정치경제는 첫 화면용 짧은 명칭, 통상 분야는 Now의 기존 항목을 사용합니다.
    $("hero-interests").innerHTML = tags([h.politicalEconomyInterest, t.now.interests[2]]);

    $("strengths").innerHTML = t.strengths.items
      .map(
        (s, i) => `<article class="strength">
          <span class="num">${String(i + 1).padStart(2, "0")}</span>
          <h3>${esc(s.title)}</h3><p>${sentences(s.desc, t.htmlLang)}</p></article>`
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
    const renderCase = (item) => {
      const comparison = item.comparison ? `<div class="comparison-scroll"><table class="comparison-table">
        <caption class="sr-only">${esc(item.title)}</caption>
        <thead><tr>${item.comparison.headers.map((heading) => `<th scope="col">${esc(heading)}</th>`).join("")}</tr></thead>
        <tbody>${item.comparison.rows.map((row) => `<tr>${row.map((cell, index) => index === 0
          ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : "";
      return `<article class="experience-case">
        <h4>${esc(item.title)}</h4><p>${sentences(item.summary, t.htmlLang)}</p>
        <ol class="workflow">${(item.workflow || []).map((step, index) => `<li><span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>${esc(step)}</li>`).join("")}</ol>
        ${comparison}
        ${item.caption ? `<p class="evidence-caption">${sentences(item.caption, t.htmlLang)}</p>` : ""}
      </article>`;
    };
    const items = x.items
      .map(
        (e) => `<article class="card experience-card">
          <div class="exp-head"><h3>${esc(e.org)} <span class="exp-role">${esc(e.role)}</span></h3><p class="exp-period">${esc(e.period)}</p></div>
          <p class="meta">${esc(e.events)}</p>
          <p class="experience-summary">${sentences(e.summary, t.htmlLang)}</p>
          <div class="experience-skills"><p class="sr-only">${esc(x.skillsTitle)}</p>${tags(e.skills)}</div>
          <div class="experience-details">
            <details class="disclosure">
              <summary>${esc(x.dutiesTitle)}</summary><div class="disclosure-body">${list(e.duties)}</div>
            </details>
            <details class="disclosure">
              <summary>${esc(e.cases?.length ? x.casesTitle : x.caseTitle)}</summary>
              <div class="disclosure-body">${e.cases?.length ? e.cases.map(renderCase).join("") : `<p>${sentences(e.caseText, t.htmlLang)}</p>`}</div>
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
    const cards = p.items.map((it) => {
      const view = it.presentation || it;
      const guide = view.guide;
      const url = (SITE.links.projects || {})[it.id];
      // 서비스 묶음에는 실제로 동작하는 서비스의 주소만 연결합니다.
      const serviceLinks = (it.components || [])
        .filter((component) => component.status === "working" && SITE.links.projectComponents?.[component.id])
        .map((component) => ({ name: component.name, url: SITE.links.projectComponents[component.id] }));
      const links = serviceLinks.length
        ? serviceLinks.map((service) => `<a class="btn btn-outline" href="${esc(service.url)}" target="_blank" rel="noopener" aria-label="${esc(service.name)}: ${esc(L.dashboard)}">${esc(service.name)} <span aria-hidden="true">↗</span></a>`).join("")
        : url ? `<a class="btn btn-outline" href="${esc(url)}" target="_blank" rel="noopener">${esc(L.dashboard)} <span aria-hidden="true">↗</span></a>` : "";
      const details = guide ? `<details class="more project-details">
        ${toggle(L.moreOpen, L.moreClose)}
        <div class="project-details-body">
          <section class="guide-process" aria-labelledby="${esc(it.id)}-process-title">
            <h4 id="${esc(it.id)}-process-title">${esc(L.processTitle)}</h4>
            <ol class="project-process">${guide.process.map((step, index) => `<li><span class="step-count" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><p>${sentences(step, t.htmlLang)}</p>${index < guide.process.length - 1 ? '<span class="process-arrow" aria-hidden="true">→</span>' : ""}</li>`).join("")}</ol>
          </section>
          <section class="guide-ai" aria-labelledby="${esc(it.id)}-ai-title">
            <h4 id="${esc(it.id)}-ai-title">${esc(L.aiTitle)}</h4>
            <p class="guide-tools">${guide.ai.tools.map(esc).join(", ")}</p>
            <dl class="guide-ai-duties">
              <div><dt>${esc(L.aiAssisted)}</dt><dd>${sentences(guide.ai.assisted, t.htmlLang)}</dd></div>
              <div><dt>${esc(L.aiOwned)}</dt><dd>${sentences(guide.ai.owned, t.htmlLang)}</dd></div>
            </dl>
          </section>
        </div>
      </details>` : "";
      return `<article class="card project" id="project-${esc(it.id)}">
        <div class="project-topline"><p class="project-type">${esc(view.type)}</p><p class="project-period">${esc(it.period)}</p></div>
        <h3>${esc(view.title || it.name)}</h3>
        ${guide ? `<p class="guide-summary">${sentences(guide.summary, t.htmlLang)}</p><p class="guide-role"><span>${esc(L.roleTitle)}</span>${esc(guide.role)}</p>` : ""}
        <dl class="project-story">${[
          [guide ? L.problemTitle : L.storyProblem, guide ? guide.problem : view.problem],
          ...(guide ? [] : [[L.storyAction, view.action]]),
          [guide ? L.resultTitle : L.storyChange, guide ? guide.result : view.change]
        ].map(([label, text]) => `<div><dt>${esc(label)}</dt><dd>${sentences(text, t.htmlLang)}</dd></div>`).join("")}</dl>
        ${links ? `<div class="link-row"${serviceLinks.length ? ` role="group" aria-label="${esc(L.workingServices)}"` : ""}>${links}</div>` : ""}
        ${details}
      </article>`;
    }).join("");

    const extra = p.extra.map((e) => {
      const url = (SITE.links.activities || {})[e.linkKey || e.id];
      const meta = [e.period, e.meta].filter(Boolean);
      return `<div class="extra-item"><strong>${esc(e.name)}</strong>
        ${meta.length ? `<p class="meta extra-meta">${meta.map((part) => `<span>${esc(part)}</span>`).join("")}</p>` : ""}
        <p class="tool-item">${sentences(e.desc, t.htmlLang)}</p>
        ${url && e.dashboardLabel ? `<a class="btn btn-outline activity-link" href="${esc(url)}" target="_blank" rel="noopener">${esc(e.dashboardLabel)} <span aria-hidden="true">↗</span></a>` : ""}
      </div>`;
    }).join("");

    $("projects").innerHTML = `<div class="container">
      ${sectionHead(p.label, p.title)}
      <div class="projects-grid">${cards}</div>
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
      <div class="now-statement"><p class="statement">${sentences(n.statement, t.htmlLang)}</p></div>
      <div class="now-grid">
        <div class="now-plan-groups">
          <section class="now-plan-group"><h3>${esc(n.doingTitle)}</h3>${list(n.doing)}</section>
          ${n.goals.map((goal) => `<section class="now-plan-group">
            <h3 class="now-plan-title"><span class="now-plan-period">${esc(goal.period)}</span>${esc(goal.title)}</h3>
            ${list(goal.items)}
          </section>`).join("")}
        </div>
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
        <p class="note-summary">${sentences(item.summary, t.htmlLang)}</p>
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
          <p class="lead">${sentences(c.text, t.htmlLang)}</p>
          ${L.email ? `<a class="contact-address" href="mailto:${esc(L.email)}" aria-label="${esc(c.email)}: ${esc(L.email)}">${esc(L.email)}</a>` : ""}
          ${buttons ? `<div class="contact-links">${buttons}</div>` : ""}
        </div>
        ${L.email ? `<form class="card contact-form" id="contact-form" action="mailto:${esc(L.email)}">
          <div class="form-field"><label for="contact-name">${esc(f.nameLabel)}</label><input id="contact-name" name="name" autocomplete="name" required value="${esc(contactDraft.name)}" /></div>
          <div class="form-field"><label for="contact-email">${esc(f.emailLabel)}</label><input id="contact-email" name="email" type="email" autocomplete="email" required value="${esc(contactDraft.email)}" /></div>
          <div class="form-field form-field-message"><label for="contact-message">${esc(f.messageLabel)}</label><textarea id="contact-message" name="message" rows="4" required>${esc(contactDraft.message)}</textarea></div>
          <button class="btn btn-primary" type="submit">${esc(f.submitLabel)}</button>
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
