const staffTemplate = (staffData) => {
    return `
      <h2>Сотрудники</h2>
      <div class="staff-list">
        ${staffData.map(staff => `
          <div class="staff-card">
            <div class="staff-info">
                <h3>${staff.name}</h3>
                <p><strong>Образование:</strong> ${staff.education}</p>
                <p><strong>Специализация:</strong> ${staff.specialization}</p>
                <p><strong>Стаж работы:</strong> ${staff.start_year}</p>
                <p><strong>Должность:</strong> ${staff.post}</p>
                <p><strong>Вид спорта:</strong> ${staff.sport}</p>
                <p><strong>Телефон:</strong> ${staff.number_phone}</p>
                <p><strong>Email:</strong> <a href="mailto:${staff.email.trim()}">${staff.email.trim()}</a></p>
            </div>
            <img src="${staff.photo}" alt="${staff.name}" class="staff-photo">
          </div>
        `).join('')}
      </div>
    `;
};

export default staffTemplate;
