const ICONS = {
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>',
  wechat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.55 3.5C5.58 3.5 2.4 6.36 2.4 9.88c0 1.98 1.14 3.76 2.92 4.9L4.55 18l2.95-1.56c.64.14 1.3.22 1.98.22.24 0 .47-.01.7-.03A5.04 5.04 0 0 1 9.6 14.4c-3.18 0-5.76-2.34-5.76-5.22S6.42 3.96 9.6 3.96c.24 0 .47.01.7.03-.25-.3-.5-.49-.75-.49zM15.28 10.2c-3.28 0-5.94 2.4-5.94 5.36 0 1.76 1.04 3.34 2.64 4.34l-.66 2.24 2.56-1.36c.58.12 1.18.18 1.8.18 3.28 0 5.94-2.4 5.94-5.36s-2.66-5.4-6.34-5.4zm-2.2 4.08a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.36 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM8.12 7.62a.84.84 0 1 1 0-1.68.84.84 0 0 1 0 1.68zm3.76 0a.84.84 0 1 1 0-1.68.84.84 0 0 1 0 1.68z"/></svg>'
};

function renderMedia(media) {
  if (!media || !media.length) return "";
  return `<div class="media-rail">${media.map((m) => {
    const caption = m.caption ? `<figcaption>${m.caption}</figcaption>` : "";
    if (m.type === "video") {
      return `<figure class="media-card"><video controls preload="metadata" playsinline ${m.poster ? `poster="${m.poster}"` : ""} src="${m.src}"></video>${caption}</figure>`;
    }
    if (m.type === "embed") {
      return `<figure class="media-card media-embed"><iframe src="${m.src}" allowfullscreen loading="lazy" title="${m.caption || ""}"></iframe>${caption}</figure>`;
    }
    return `<figure class="media-card"><img src="${m.src}" alt="${m.caption || ""}">${caption}</figure>`;
  }).join("")}</div>`;
}

function renderPoints(points) {
  return `<ul>${points.map((p) => `<li>${p}</li>`).join("")}</ul>`;
}

function renderCopy(html) {
  return `<div class="entry-copy">${html}</div>`;
}

function renderSplit(copyHtml, media) {
  if (!media || !media.length) return renderCopy(copyHtml);
  return `<div class="entry-split">${renderCopy(copyHtml)}${renderMedia(media)}</div>`;
}

function renderEntries(container, list) {
  container.innerHTML = list.map((item) => {
    const body = item.sections
      ? item.sections.map((s) => renderSplit(
          `<h4 class="entry-sub">${s.title}</h4>${renderPoints(s.points)}`,
          s.media
        )).join("")
      : renderSplit(renderPoints(item.points), item.media);
    return `
      <article class="entry">
        <h3>${item.title}</h3>
        <div class="entry-meta">${item.meta}</div>
        ${body}
        ${item.stack ? `<div class="stack">${item.stack.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
      </article>
    `;
  }).join("");

  container.querySelectorAll(".media-card img, .media-card video").forEach((el) => {
    el.addEventListener("error", () => {
      const rail = el.closest(".media-rail");
      const split = el.closest(".entry-split");
      el.closest("figure")?.remove();
      if (rail && !rail.children.length) {
        rail.remove();
        if (split) split.classList.remove("entry-split");
      }
    });
  });
}

function renderLinks(links) {
  const linksEl = document.getElementById("links");
  linksEl.innerHTML = links.map((l) => {
    if (l.type === "wechat") {
      return `<button type="button" class="social-btn" data-copy="${l.copy}" aria-label="${l.label}" title="${l.label}：${l.copy}">${ICONS.wechat}</button>`;
    }
    const extra = l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : "";
    return `<a href="${l.href}" aria-label="${l.label}" title="${l.label}" ${extra}>${ICONS[l.type] || ""}</a>`;
  }).join("");

  linksEl.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        window.prompt("微信", text);
      }
      showToast(document.documentElement.lang.startsWith("zh") ? "已复制微信号" : "WeChat ID copied");
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById("copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1600);
}

function loadLang(lang) {
  const data = lang === "en" ? window.CONTENT_EN : window.CONTENT_ZH;

  document.getElementById("name").textContent = data.name;
  document.getElementById("avatar").alt = data.name;
  document.title = `${data.name} | ${lang === "en" ? "方龙骏" : "Longjun Fang"}`;

  const titlesEl = document.getElementById("titles");
  titlesEl.innerHTML = data.titles.map((t) => `<p>${t}</p>`).join("");
  renderLinks(data.links);

  document.getElementById("bio").innerHTML = data.bio.map((p) => `<p>${p}</p>`).join("");

  document.querySelector("#projects .block-title").textContent = data.projects.title;
  renderEntries(document.querySelector("#projects .entry-list"), data.projects.list);

  document.querySelector("#internships .block-title").textContent = data.internships.title;
  renderEntries(document.querySelector("#internships .entry-list"), data.internships.list);

  document.querySelector("#skills .block-title").textContent = data.skills.title;
  document.querySelector("#skills .skill-list").innerHTML = data.skills.groups.map((g) =>
    `<div class="row"><div class="label">${g.name}</div><div class="items">${g.items.join("  ·  ")}</div></div>`
  ).join("");

  document.querySelector("#honors .block-title").textContent = data.honors.title;
  document.querySelector("#honors .honor-list").innerHTML = data.honors.groups.map((g) =>
    `<div class="row"><div class="label">${g.name}</div><div class="items">${g.items.join("<br>")}</div></div>`
  ).join("");

  document.querySelector("#campus .block-title").textContent = data.campus.title;
  renderEntries(document.querySelector("#campus .entry-list"), data.campus.list);

  document.getElementById("footer").textContent = data.footer;
  document.getElementById("lang-btn").textContent = lang === "zh" ? "EN" : "中文";
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  localStorage.setItem("lang", lang);
}

function toggleLang() {
  const cur = localStorage.getItem("lang") || "zh";
  loadLang(cur === "zh" ? "en" : "zh");
}

window.addEventListener("DOMContentLoaded", () => {
  loadLang(localStorage.getItem("lang") || "zh");
  document.getElementById("lang-btn").addEventListener("click", toggleLang);

  const avatar = document.getElementById("avatar");
  const fallback = document.getElementById("avatar-fallback");
  avatar.addEventListener("error", () => avatar.classList.add("is-hidden"));
  avatar.addEventListener("load", () => {
    avatar.classList.remove("is-hidden");
    fallback.style.display = "none";
  });
  avatar.src = "assets/20260913-140437.jpg";
});
