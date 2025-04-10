export const createLogoTemplate = ({ alt, src}) => {
  const template = `
    <div class="header_logo">
        <img class="link_name" src="${src}" alt="${alt}" />
    </div>
  `;

  return template;
};

export const createMenuTemplate = (menuData) => {
  const template = `
    <nav class="menu">
      <ul class="menu__list">
        ${menuData
          .map(({ title, href }) => {
            if (title === "Студенту") {
              return `
                <li class="menu__item dropdown">
                  <button class="menu__btn">${title}</button>
                  <ul class="dropdown__menu">
                    <li><a href="#" class="menu__link">Расписание занятий</a></li>
                    <li><a href="#" class="menu__link">Портал дистанционного обучения</a></li>
                    <li><a href="#" class="menu__link">Личный кабинет студента</a></li>
                    <li><a href="#" class="menu__link">Методические пособия</a></li>
                    <li><a href="#" class="menu__link">ГТО</a></li>
                  </ul>
                </li>
              `;
            } else {
              return `
                <li class="menu__item">
                  <button class="menu__btn" onclick="location.href='${href}'">${title}</button>
                </li>
              `;
            }
          })
          .join("")}
      </ul>
    </nav>
  `;

  return template;
}

export const headerTemplate = ({ logoData, menuData }) => {
  // вызываются функции создания шаблона для создания соответствующих шаблонов
  const logoItemsTemplate = createLogoTemplate(logoData);

  const menuItemsTemplate = createMenuTemplate(menuData);

  return logoItemsTemplate + menuItemsTemplate;
};
