function getCurrentLanguage() {
  const selector = document.getElementById("langSelector");
  return selector ? selector.value : "fr";
}

function changeLanguage(languageCode) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(function (elem) {
    const tag = elem.tagName.toLowerCase();
    if (elem.getAttribute("data-lang") === languageCode) {
      elem.style.display = tag === "span" ? "inline" : "block";
    } else {
      elem.style.display = "none";
    }
  });

  // Mise à jour du meta et du titre
  const titleEl = document.querySelector("title");
  const descEl = document.querySelector("#meta-desc");
  if (languageCode === "en") {
    if (titleEl) titleEl.textContent = "Okbots Expedition";
    if (descEl)
      descEl.setAttribute(
        "content",
        "Okbots Expedition is a narrative platformer game project produced on Unreal Engine 5."
      );
  } else if (languageCode === "fr") {
    if (titleEl) titleEl.textContent = "Okbots Expedition";
    if (descEl)
      descEl.setAttribute(
        "content",
        "Okbots Expedition est un jeu de plateforme narratif produit sur Unreal Engine 5."
      );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("langSelector");
  if (!selector) return;

  selector.addEventListener("change", function () {
    changeLanguage(this.value);
  });

  const userLang = navigator.language || "en";
  const startLang = userLang.startsWith("fr") ? "fr" : "en";
  selector.value = startLang;
  changeLanguage(startLang);
});
