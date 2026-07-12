let languageData = {};
let currentLanguage = localStorage.getItem("language") || "en";
async function loadLanguage(lang) {
    try {
        const response = await fetch(`assets/lang/${lang}.json`);
        const data = await response.json();
        languageData = data;
typingTexts = [
    data.typing1,
    data.typing2,
    data.typing3,
    data.typing4
];
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.dataset.lang;
            if (data[key]) {
              element.textContent = data[key];
            }
        });
        document.querySelectorAll("[data-placeholder]").forEach(element => {
            const key = element.dataset.placeholder;
            if (data[key]) {
                element.placeholder = data[key];
            }
        });
        document.getElementById("trBtn").classList.remove("active");
        document.getElementById("enBtn").classList.remove("active");
        if (lang === "tr") {
            document.getElementById("trBtn").classList.add("active");
            document.documentElement.lang = "tr";
        } else {
            document.getElementById("enBtn").classList.add("active");
            document.documentElement.lang = "en";
        }
        currentLanguage = lang;
        localStorage.setItem("language", lang);
textIndex = 0;
charIndex = 0;
deleting = false;
typing.textContent = "";
    }
    catch (error) {
        console.error("Language could not be loaded.", error);
    }
}
document.getElementById("trBtn").addEventListener("click", () => {
    loadLanguage("tr");
});
document.getElementById("enBtn").addEventListener("click", () => {
    loadLanguage("en");
});
window.addEventListener("DOMContentLoaded", async ()=>{
  await loadLanguage(currentLanguage);
    typeEffect();
});