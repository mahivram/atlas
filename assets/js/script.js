(function () {
  // Keep the content here so the homepage and full listings stay in sync.
  var posts = [
    {
      title: "Example: Notes from a project",
      date: "2026-11-26",
      category: "Build log",
      summary: "Replace this sample with a short introduction to your latest blog post."
    },
    {
      title: "Example: Something I learned",
      date: "2026-11-12",
      category: "Notes",
      summary: "Share an idea, discovery, or lesson from your recent work."
    }
  ];

  var projects = [
    {
      title: "Target Detection",
      status: "In progress",
      summary: "A computer-vision experiment for detecting visual targets, with Python tooling and a small browser-based game.",
      tags: ["Python", "YOLO", "OpenCV", "JavaScript"]
    },
    {
      title: "Your next project",
      status: "Project template",
      summary: "Replace this card with the goal of your project, how you built it, and what you learned.",
      tags: ["Add", "your", "tools"]
    }
  ];

  var root = document.documentElement;
  var themeButton = document.querySelector("[data-theme-toggle]");

  function getSavedTheme() {
    try {
      return localStorage.getItem("atlas-theme");
    } catch (error) {
      console.warn("Could not read the saved theme preference.", error);
      return null;
    }
  }

  function setTheme(theme, save) {
    root.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
    if (save) {
      try {
        localStorage.setItem("atlas-theme", theme);
      } catch (error) {
        console.warn("Could not save the theme preference.", error);
      }
    }
  }

  var savedTheme = getSavedTheme();
  var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"), false);
  themeButton.addEventListener("click", function () {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  function makeCard(title, summary, meta, tags) {
    var card = document.createElement("article");
    card.className = "content-card";

    var metadata = document.createElement("div");
    metadata.className = "card-meta";
    meta.forEach(function (value) {
      var item = document.createElement("span");
      item.textContent = value;
      metadata.appendChild(item);
    });

    var heading = document.createElement("h3");
    heading.className = "card-title";
    heading.textContent = title;

    var description = document.createElement("p");
    description.className = "card-summary";
    description.textContent = summary;

    card.appendChild(metadata);
    card.appendChild(heading);
    card.appendChild(description);

    if (tags && tags.length) {
      var list = document.createElement("ul");
      list.className = "tag-list";
      list.setAttribute("aria-label", "Technologies");
      tags.forEach(function (tag) {
        var item = document.createElement("li");
        item.className = "tag";
        item.textContent = tag;
        list.appendChild(item);
      });
      card.appendChild(list);
    }

    return card;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(date + "T12:00:00"));
  }

  function renderPosts(container, entries) {
    entries.forEach(function (post) {
      var card = makeCard(post.title, post.summary, [formatDate(post.date), post.category]);
      card.classList.add("post-card");
      container.appendChild(card);
    });
  }

  function renderProjects(container, entries) {
    entries.forEach(function (project) {
      var card = makeCard(project.title, project.summary, [project.status], project.tags);
      card.querySelector(".card-meta span").classList.add("project-status");
      container.appendChild(card);
    });
  }

  var recentPosts = document.getElementById("recent-posts");
  var allPosts = document.getElementById("all-posts");
  var recentProjects = document.getElementById("recent-projects");
  var allProjects = document.getElementById("all-projects");

  if (recentPosts) renderPosts(recentPosts, posts.slice(0, 2));
  if (allPosts) renderPosts(allPosts, posts);
  if (recentProjects) renderProjects(recentProjects, projects.slice(0, 2));
  if (allProjects) renderProjects(allProjects, projects);

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();
