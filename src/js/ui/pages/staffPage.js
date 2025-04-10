import staffData from "../../mockData/staffData.js";
import staffTemplate from "../templates/staffTemplate.js";

const staffPage = () => {
    const content = document.getElementById("content");
    content.innerHTML = staffTemplate(staffData);
  };
  
  export default staffPage;