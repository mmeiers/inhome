var RiseVision = RiseVision || {};
RiseVision.Todo = {};

RiseVision.Todo = (function() {
  "use strict";

  var rows = [];
  var counter = 0;
  var $mainContainer = $("#main-container")
  var $todoList = $(".todo__list")

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
    var individualRow = {};

    individualRow.c1 = getCell(index, cells);

    return individualRow;
  }

  /* Add each event to the events array. */
  function addList(cells) {
    counter = 0;
    rows = [];
    var numCols = getNumColumns(cells),
      len = cells.length,
      individualRow;

    // Skip header and start at first cell of data.
    for (var i = numCols; i < len; i += numCols) {
      individualRow = getRow(i, numCols, cells);
      rows.push(individualRow);
    }
  }

  /* Display the List. */
  function displayList() {

    var rowEntry = null,
      c1 = null,

      eventSlides = null,
      numEvents = rows.length;

        $todoList.empty();

      for (var i = 0; i < numEvents; i++) {

        rowEntry = document.createElement("div");
        rowEntry.className = "todo__row clearfix";
        c1 = document.getElementsByClassName("columnTodo");
        
        c1.textContent = rows[i].c1;

        
        
        /* Details Card. */
        function setCardAttributes(el, attrs) {
          for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
          }
        }

        rowEntry.innerHTML = "<ul class='individualRow'>" + "<li class='columnTodo'>" + c1.textContent + "</li>" + "</ul>"

        $todoList.append(rowEntry);

        $( "li:contains('---')" ).css( "display", "none" );
      }
    }

  /*
   *  Public Methods
   */
  function init() {
    var googleSheetTodo = document.getElementById("googleSheetTodo");
    googleSheetTodo.addEventListener("rise-google-sheet-response", function(e) {
      addList(e.detail.cells);
      displayList();
      // _getScrollEl();
    });
    googleSheetTodo.go();
  }
// alert('test');


  return {
    "init": init
  };
})();