import homePage from "./ui/pages/homePage.js";
import historyPage from "./ui/pages/historyPage.js";
import staffPage from "./ui/pages/staffPage.js";
import manualPage from "./ui/pages/manualPage.js";
import schedulePage from "./ui/pages/schedulePage.js";
import contactPage from "./ui/pages/contactPage.js";
import gtoPage from "./ui/pages/gtoPage.js";

const routes = {
  "#home": homePage,
  "#history": historyPage,
  "#staff" : staffPage,
  "#manuals" : manualPage,
  "#schedule" : schedulePage,
  "#contacts" : contactPage,
  "#gto" : gtoPage,
};

const loadPage = () => {
    const hash = window.location.hash || "#home"; // по умолчанию Главная
    const pageFunction = routes[hash] || homePage;
    // Обновляем только содержимое контейнера с id="content"
    pageFunction();
  };

window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);

export default loadPage;
