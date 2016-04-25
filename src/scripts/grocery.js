var RiseVision = RiseVision || {};
RiseVision.Grocery = {};

RiseVision.Grocery = (function() {
  "use strict";

  var rows = [];
  var counter = 0;
  var $mainContainer = $("#main-container")
  var $groceryList = $(".grocery__list")

  /*
   *  Private Methods
   */

  /* Return total number of columns in data. */
  function getNumColumns(cells) {
    var len = cells.length,
      currentRow = 0,
      previousRow = 0,
      totalCols = 0;

    for (var i = 0; i <= len; i++) {
      currentRow = parseInt(cells[i].gs$cell.row, 10);

      if (i === 0) {
        previousRow = currentRow;
      }

      if (currentRow === previousRow) {
        totalCols++;
      }
      else {
        break;
      }
    }

    return totalCols;
  }

  /* Return a single cell of data. */
  function getCell(index, cells) {
    return cells[index] ? cells[index].gs$cell.$t : "";
  }

  /* Return an individual event as an object. */
  function getRow(index, numCols, cells) {
    var groceryRow = {};

    groceryRow.groceryItem = getCell(index, cells);

    return groceryRow;
  }

  /* Add each event to the events array. */
  function addGrocery(cells) {
    counter = 0;
    rows = [];
    var numCols = getNumColumns(cells),
      len = cells.length,
      groceryRow;

    // Skip header and start at first cell of data.
    for (var i = numCols; i < len; i += numCols) {
      groceryRow = getRow(i, numCols, cells);
      rows.push(groceryRow);
    }
  }

  /* Display the Grocery. */
  function displayGrocery() {

    var groceryEntry = null,
      groceryItem = null,

      eventSlides = null,
      numEvents = rows.length;

        $groceryList.empty();

      for (var i = 0; i < numEvents; i++) {

        groceryEntry = document.createElement("div");
        groceryEntry.className = "grocery__row clearfix";
        groceryItem = document.getElementsByClassName("columnGrocery");
        
        groceryItem.textContent = rows[i].groceryItem;

        
        
        /* Details Card. */
        function setCardAttributes(el, attrs) {
          for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
          }
        }

        groceryEntry.innerHTML = "<ul class='groceryRow'>" + "<li class='columnGrocery'>" + groceryItem.textContent + "</li>" + "</ul>"

        $groceryList.append(groceryEntry);

        $( "li:contains('---')" ).css( "display", "none" );
      }
    }

  /*
   *  Public Methods
   */
  function init() {
    var googleSheet = document.getElementById("googleSheet");
    googleSheet.addEventListener("rise-google-sheet-response", function(e) {
      addGrocery(e.detail.cells);
      displayGrocery();
      // _getScrollEl();
    });
    googleSheet.go();
  }
// alert('test');


  return {
    "init": init
  };
})();