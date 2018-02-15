// TODO: Define your variables
// TODO: Add event listeners
// TODO: Set the size of the cross stitch canvas

$(document).ready(function() {

  $('#submit').click(function(e) {
     event.preventDefault();
     makeGrid();
  });

  function makeGrid() {

    // Select value
    let grid = $('#pixelCanvas');
    let colorPicker = $('#colorPicker');
    let inputHeight = $('#inputHeight').val();
    let inputWidth = $('#inputWidth').val();

    // Create grid 
    for (let row = 1; row <= inputHeight; row++) {
      let makeRow = $('<tr></tr>');
      for (let col = 1; col <= inputWidth; col++) {
        makeRow.append($('<td></td>'))
      }
      grid.append(makeRow);
    }
  }

});
