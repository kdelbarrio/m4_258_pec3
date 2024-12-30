/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


    const menuToggle = document.getElementById('menu-toggle');
    const navbarNav = document.getElementById('navbarNav');

    menuToggle.addEventListener('click', () => {
        navbarNav.classList.toggle('hidden');
    });

