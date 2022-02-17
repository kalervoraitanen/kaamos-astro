/*
 * Kaamos Astro Demo #1 Scripts File
*/

// Wait till the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {

  // Toggle .menu-open class when menu button is clicked.
  document.querySelector(".nav-button").addEventListener('click', function(){
    document.querySelector(".site-header").classList.toggle("menu-open");
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector(".nav-button").classList.toggle("close");
    document.querySelector("body").classList.toggle("no-scroll");
  });     

}); // End of Wait till the DOM is fully loaded
