
// Выполняем действия после загрузки структуры страницы (DOMContentLoaded)
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    let tab = document.querySelectorAll(".info-header-tab"), // Получаем все табы-кнопки
        info = document.querySelector(".info-header"), //Получаем родителя с табами-кнопками
        tabContent = document.querySelectorAll(".info-tabcontent"); //Получаем весь таб-контент



// Цикл, который проходит по табам с индексом от 1 до 4 и меняет классы.
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1); // Передаем 1, чтоб таб с индексом 0 отображался на странице

    // Передаем индекс таба, чтоб сменить класс
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0); // Скрываем 0 таб, который отображается по умолчанию
                    showTabContent(i); //Отображаем таб
                    break;
                }
            }
        }
    });

});