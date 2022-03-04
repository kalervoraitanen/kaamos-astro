/*
 * Kaamos Astro Demo #4 Scripts File
*/

// Wait till the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {

  // Start of Masonry grid layout scripts
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  
  var grids = _toConsumableArray(document.querySelectorAll('.grid-layout main'));
  
  if (grids.length && getComputedStyle(grids[0]).gridTemplateRows !== 'masonry') {
    var layout = function layout() {
      grids.forEach(function (grid) {
        /* get the post relayout number of columns */
        var ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;
        grid.items.forEach(function (c) {
          var new_h = c.getBoundingClientRect().height;
  
          if (new_h !== +c.dataset.h) {
            c.dataset.h = new_h;
            grid.mod++;
          }
        });
        /* if the number of columns has changed */
  
        if (grid.ncol !== ncol || grid.mod) {
          /* update number of columns */
          grid.ncol = ncol;
          /* revert to initial positioning, no margin */
  
          grid.items.forEach(function (c) {
            return c.style.removeProperty('margin-top');
          });
          /* if we have more than one column */
  
          if (grid.ncol > 1) {
            grid.items.slice(ncol).forEach(function (c, i) {
              var prev_fin = grid.items[i].getBoundingClientRect().bottom
              /* bottom edge of item above */
              ,
                  curr_ini = c.getBoundingClientRect().top
              /* top edge of current item */
              ;
              c.style.marginTop = "".concat(prev_fin + grid.gap - curr_ini, "px");
            });
          }
  
          grid.mod = 0;
        }
      });
    };
  
    grids = grids.map(function (grid) {
      return {
        _el: grid,
        gap: parseFloat(getComputedStyle(grid).gridRowGap),
        items: _toConsumableArray(grid.childNodes).filter(function (c) {
          return c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1;
        }),
        ncol: 0,
        mod: 0
      };
    });
    addEventListener('load', function (e) {
      layout();
      /* initial load */
  
      addEventListener('resize', layout, false);
      /* on resize */
    }, false);
  }
  // End of Masonry grid layout scripts 


  // Toggle .menu-open class when menu button is clicked.
  document.querySelector(".nav-button").addEventListener('click', function(){
    document.querySelector(".site-header").classList.toggle("menu-open");
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector(".nav-button").classList.toggle("close");
    document.querySelector("body").classList.toggle("no-scroll");
  });     

}); // End of Wait till the DOM is fully loaded
