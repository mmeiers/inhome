var RiseVision = RiseVision || {};
RiseVision.Directory = {};

RiseVision.Directory = (function() {
  "use strict";

  var rows = [];
  var counter = 0;
  var $mainContainer = $("#main-container")
  var $directoryList = $(".directory__list")

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
    individualRow.c2 = getCell(++index, cells);
    individualRow.c3 = getCell(++index, cells);
    individualRow.c4 = getCell(++index, cells);
    individualRow.c5 = getCell(++index, cells);
    individualRow.c6 = getCell(++index, cells);
    individualRow.c7 = getCell(++index, cells);

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
      c2 = null,
      c3 = null,
      c4 = null,
      c5 = null,
      c6 = null,
      c7 = null,
        
      eventSlides = null,
      numEvents = rows.length;

        $directoryList.empty();

      for (var i = 0; i < numEvents; i++) {

        rowEntry = document.createElement("div");
        rowEntry.className = "directory__row clearfix";
        c1 = document.getElementsByClassName("column1");
        c2 = document.getElementsByClassName("column2");
        c3 = document.getElementsByClassName("column3");
        c4 = document.getElementsByClassName("column4");
        c5 = document.getElementsByClassName("column5");
        c6 = document.getElementsByClassName("column6");
        c7 = document.getElementsByClassName("column7");
        c1.textContent = rows[i].c1;
        c2.textContent = rows[i].c2;
        c3.textContent = rows[i].c3;
        c4.textContent = rows[i].c4;
        c5.textContent = rows[i].c5;
        c6.textContent = rows[i].c6;
        c7.textContent = rows[i].c7;
        
        
        /* Details Card. */
        function setCardAttributes(el, attrs) {
          for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
          }
        }

        setCardAttributes(rowEntry,{"detailColumn1":c1.textContent,"detailColumn2":c2.textContent,"detailColumn3":c3.textContent,"detailColumn4":c4.textContent,"detailColumn5":c5.textContent});

        rowEntry.innerHTML = "<div class='default-image'>"+"</div>" + "<div class='individualRow'>" + "<span class = 'column1'>" + c1.textContent + "</span>" + "<span class='column2'>" + c2.textContent + "</span>" + "<span class = 'column3'>" + c3.textContent + "</span>" + "<span class='column4'>"+ c4.textContent +" - </span>" + "<span class='column5'>"+ c5.textContent +"</span>" +
        "</div>"

        $directoryList.append(rowEntry);

        $( "li:contains('---')" ).css( "display", "none" );
      }
    }

  /*
   *  Public Methods
   */
  function init() {
    var googleSheet = document.getElementById("googleSheet");
    googleSheet.addEventListener("rise-google-sheet-response", function(e) {
      addList(e.detail.cells);
      displayList();
      // _getScrollEl();
    });
    googleSheet.go();
  }
// alert('test');


  return {
    "init": init
  };
})();