const historyTemplate = (historyData) => {
    return `
      <h2>История</h2>
      ${historyData.map(paragraph => `<p>${paragraph}</p>`).join("")}
    `;
  };
  
  export default historyTemplate;
  