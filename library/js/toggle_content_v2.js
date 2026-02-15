document.addEventListener("DOMContentLoaded", function () {

    const wellcome = document.getElementById("wellcome");
    const message = document.getElementById("message");
    const moments = document.getElementById("moments");
    const finale = document.getElementById("finale");

    const nextMessage = document.getElementById("next-message");
    const nextMoments = document.getElementById("next-moments");
    const nextFinale = document.getElementById("next-finale");

    const backWellcome = document.getElementById("back-wellcome");
    const backMessage = document.getElementById("back-message");
    const backMoments = document.getElementById("back-moments");

    const sections = [wellcome, message, moments, finale];

    function showSection(sectionToShow) {
        // скрываем все секции
        sections.forEach(section => {
            section.classList.add("close-content");
        });

        // показываем нужную секцию
        sectionToShow.classList.remove("close-content");
    }

    nextMessage.addEventListener("click", function () {
        showSection(message);
    });

    nextMoments.addEventListener("click", function () {
        showSection(moments);
    });

    nextFinale.addEventListener("click", function () {
        showSection(finale);
    });

    backWellcome.addEventListener("click", function () {
        showSection(wellcome);
    });

    backMessage.addEventListener("click", function () {
        showSection(message);
    });

    backMoments.addEventListener("click", function () {
        showSection(moments);
    });

});