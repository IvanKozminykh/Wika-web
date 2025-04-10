import homeTemplate from "../templates/homeTemplate.js";
import homeData from "../../mockData/homeData.js";

const homePage = () => {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = homeTemplate(homeData);
};

export default homePage;
