/*const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger menu and nav elements
    const hamMenu = document.querySelector('.ham-menu');
    const navMenu = document.querySelector('nav');

    // Add a click event listener to the hamburger menu
    hamMenu.addEventListener('click', function () {
        // Toggle the visibility of the nav menu
        navMenu.classList.toggle('d-block');
    });
});

*/

document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const sideNav = document.querySelector('.side-nav');
    const closeBtn = document.querySelector('.side-nav .close-btn');

    // Open the side navigation when the hamburger menu is clicked
    hamMenu.addEventListener('click', function () {
        sideNav.classList.toggle('open');
    });

    // Close the side navigation when the close button is clicked
    closeBtn.addEventListener('click', function () {
        sideNav.classList.remove('open');
    });

    // Optional: Close the side navigation when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!sideNav.contains(event.target) && !hamMenu.contains(event.target)) {
            sideNav.classList.remove('open');
        }
    });
});
