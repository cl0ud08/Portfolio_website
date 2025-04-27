function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.classList.add('active');
        } else {
            section.classList.remove('active');
            section.classList.add('hidden');
        }
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu-item:nth-child(${['home', 'about', 'skills', 'projects'].indexOf(sectionId) + 1})`).classList.add('active');
}

