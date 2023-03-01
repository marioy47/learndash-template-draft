'use strict';

const [...tabs] = document.querySelectorAll('.ld-main-content__navitem');
const materials = document.querySelector('.ld-course-info__materials');
tabs.map( tab => {
    tab.addEventListener('click', ev => {
        ev.preventDefault();
        if ( 'materials' === ev.target.dataset.displayTarget) {
            materials.style.setProperty('--displayed', 1);
        } else {
            materials.style.setProperty('--displayed', 0);
        }
    });
})
