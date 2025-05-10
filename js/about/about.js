// ✅ 스크롤 위치 감지해서 nav 색상 변경
window.addEventListener("load", function() {
  updateActiveTab();
});

window.addEventListener("scroll", function() {
  updateActiveTab();
});

document.querySelectorAll(".scroll-nav ul li a").forEach(function(tab) {
  tab.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = tab.getAttribute("href").substring(1); // #greeting, #vision 등
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

function updateActiveTab() {
  const sections = document.querySelectorAll("section");
  let currentSectionId = "";

  sections.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  document.querySelectorAll(".scroll-nav ul li a").forEach(function(tab) {
    tab.classList.remove("active");
  });

  const activeTab = document.querySelector(`.scroll-nav ul li a[href="#${currentSectionId}"]`);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}
