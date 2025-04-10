const contactTemplate = (data) => {
    return `
      <h2>Контакты</h2>
      <div class="contacts-container">
        ${data.map(contact => `
          <div class="contact-card">
            <h3 class="contact-name">${contact.name}</h3>
            <p class="contact-position">${contact.position}</p>
            <p class="contact-phone">Телефон: <a href="tel:${contact.phone.replace(/\D/g, '')}">${contact.phone}</a></p>
            <p class="contact-email">Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
          </div>
        `).join("")}
      </div>
    `;
  };
  
  export default contactTemplate;
  