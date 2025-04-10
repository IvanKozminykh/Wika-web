const gtoTemplate = (data) => {
    return `
      <h2>ГТО</h2>
      <div class="gto-section">
        ${data.map(discipline => `
          <div class="gto-discipline">
            <h3>${discipline.name}</h3>
            <ul class="gto-standards">
              ${discipline.standards.map(standard => `
                <li>${standard}</li>
              `).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;
  };
  
  export default gtoTemplate;
  