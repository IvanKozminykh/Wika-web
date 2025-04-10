const scheduleTemplate = (data) => {
    return `
      <h2>Расписание занятий</h2>
      <div class="schedule-tree">
        ${data.map((faculty, i) => `
          <div class="faculty">
            <input type="checkbox" class="toggle-faculty" id="faculty-${i}">
            <label for="faculty-${i}" class="faculty-name">${faculty.faculty}</label>
            <ul class="faculty-list">
              ${faculty.groups.map((group, j) => `
                <li class="group">
                  <input type="checkbox" class="toggle-group" id="group-${i}-${j}">
                  <label for="group-${i}-${j}" class="group-name">${group.name}</label>
                  <ul class="group-list">
                    ${group.subgroups.map((subgroup, k) => `
                      <li class="subgroup">
                        <input type="checkbox" class="toggle-subgroup" id="subgroup-${i}-${j}-${k}">
                        <label for="subgroup-${i}-${j}-${k}" class="subgroup-name">${subgroup.name}</label>
                        <ul class="subgroup-list">
                          ${subgroup.periods.map(period => `
                            <li class="period">
                              <a class="period-link" href="${period.link}" target="_blank" rel="noopener noreferrer">
                                ${period.name}
                              </a>
                            </li>
                          `).join('')}
                        </ul>
                      </li>
                    `).join('')}
                  </ul>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
  };
  
  export default scheduleTemplate;
  