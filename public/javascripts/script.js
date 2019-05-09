document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


$(document).ready(function(){
  $('#blog-landing').pinterest_grid({
    no_columns: 4,
    padding_x:10,
    padding_y:10,
    margin_bottom:50,
    single_column_breakpoint:700,
  });
});

$(document).ready(function(){
  $('#dashboard-landing').pinterest_grid({
    no_columns: 4,
    padding_x:10,
    padding_y:10,
    margin_bottom:50,
    single_column_breakpoint:700,
  });
});