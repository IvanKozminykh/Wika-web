import historyData from "../../mockData/historyData.js";
import historyTemplate from "../templates/historyTemplate.js";

const historyPage = () => {
  const content = document.getElementById("content");
  content.innerHTML = historyTemplate(historyData);
};

export default historyPage;
