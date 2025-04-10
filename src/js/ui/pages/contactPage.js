import contactData from "../../mockData/contactData.js";
import contactTemplate from "../templates/contactTemplate.js";

const contactPage = () => {
  const content = document.getElementById("content");
  content.innerHTML = contactTemplate(contactData);
};

export default contactPage;
