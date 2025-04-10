import gtoTemplate from "../templates/gtoTemplate.js";
import gtoData from "../../mockData/gtoData.js";

const gtoPage = () => {
  const content = document.getElementById("content");
  content.innerHTML = gtoTemplate(gtoData);
};

export default gtoPage;
