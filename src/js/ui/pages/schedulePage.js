import scheduleData from "../../mockData/scheduleData.js";
import scheduleTemplate from "../templates/scheduleTemplate.js";

const schedulePage = () => {
  const content = document.getElementById("content");
  content.innerHTML = scheduleTemplate(scheduleData);
};

export default schedulePage;
