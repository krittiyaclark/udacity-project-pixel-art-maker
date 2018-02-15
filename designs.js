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

      // Fill color
      $('#pixelCanvas').on('click', 'td', function() {
        $(this).css('background-color', colorPicker.val());
      });
  }


});
