import manualData from "../../mockData/manualData.js";
import manualTemplate from "../templates/manualTemplate.js";

const manualPage = () => {
    const content = document.getElementById("content");
    content.innerHTML = manualTemplate(manualData);
  };
  
  export default manualPage;