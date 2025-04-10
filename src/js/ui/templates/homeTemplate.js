const homeTemplate = (data) => {
    return `
      <h2>Главная страница</h2>
      <div class="home-grid">
        ${data.map(item => `
          <a href="${item.link}" class="hk-gridunit-imglink">
            <div class="tile">
              <img src="${item.img}" alt="${item.title}" class="tile-img" />
              <div class="tile-text">${item.title}</div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  };
  
  export default homeTemplate;
  