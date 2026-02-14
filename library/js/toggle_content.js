const sections = document.querySelectorAll('.main-content__content-section');
const buttons = document.querySelectorAll('button[id^="next-"], button[id^="back-"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // находим текущую секцию
        const currentSection = button.closest('.main-content__content-section');

        // получаем имя секции из id (next-message → message)
        const targetName = button.id.replace('next-', '').replace('back-', '');

        // находим нужную секцию
        const targetSection = document.querySelector(`.main-content__content-section.${targetName}`);

        if (!currentSection || !targetSection) return;

        // скрываем текущую
        currentSection.classList.add('close-content');

        // показываем нужную
        targetSection.classList.remove('close-content');
    });
});