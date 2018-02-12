// TODO: Define your variables
// TODO: Add event listeners
// TODO: Set the size of the cross stitch canvas

const grid = $('#pixelCanvas');
const colorPicker = $('#colorPicker');
const inputHeight = $('#inputHeight').val();
const inputWidth = $('#inputWidth').val();

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(w, h) {
  for (var row = 0; row <= w; row++) {
    const row = $('<tr class="row"></tr>');
    for (var col = 0; col <= h; col++) {
      row.append($('<td class="column"></td>'))
    }
    grid.append(row);
  }
}

  $('#submit').click(function(e) {
    e.preventDefault();
    makeGrid(inputHeight, inputWidth);
  });


$(makeGrid);
