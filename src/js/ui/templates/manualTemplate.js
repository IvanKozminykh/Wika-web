const manualTemplate = (manualData) => {
    return `
      <h2>Методические пособия</h2>
      <ul class="manual-list">
        ${manualData.map(item => `
          <li class="manual-item">
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">
              ${item.text}
            </a>
          </li>
        `).join('')}
      </ul>
    `;
  };
  
  export default manualTemplate;
  