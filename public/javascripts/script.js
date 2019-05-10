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
$(document).ready(function(){
  $('#stuff-landing').pinterest_grid({
    no_columns: 4,
    padding_x:10,
    padding_y:10,
    margin_bottom:50,
    single_column_breakpoint:700,
  });
});

// new AnimOnScroll( document.getElementById( 'grid' ), {
//   minDuration : 0.4,
//   maxDuration : 0.7,
//   viewportFactor : 0.2
// } );


// var animateHTML = function() {
//   var elems;
//   var windowHeight;
//   function init() {
//     elems = document.querySelectorAll('.hidden');
//     windowHeight = window.innerHeight;
//     addEventHandlers();
//     //checkPosition();
//   }
//   function addEventHandlers() {
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
//   }
//   function checkPosition() {
//     for (var i = 0; i < elems.length; i++) {
//       //elems[i].style.setProperty('display', '');
//     //  var positionFromTop = Number(elems[i].style.top.replace('px',''))
//       //console.log(positionFromTop - windowHeight <= 0, i)
//       //myElement.getBoundingClientRect().top + window.scrollY;
//       var positionFromTop = elems[i].getBoundingClientRect().top  + window.scrollY;
//       console.log(positionFromTop, windowHeight, scrollY)

//       if (positionFromTop - windowHeight <= 0) {
//         console.log('replace ',i)
//         elems[i].className = elems[i].className.replace(
//           'hidden',
//           'fade-in-element'
//         );
//       }
//     }
//   }
//   return {
//     init: init
//   };
// };

// //$('body').ready( function(){
//   animateHTML().init();

// //})

// n = 0; 
// $(window).scroll(function(){
//   // This is then function used to detect if the element is scrolled into view
//   function elementScrolled(elem)
//   {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     //console.log($(elem).removeClass('hidden'))
//     return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
//   }

//   // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
//   if(elementScrolled('.dashpanel.hidden')) {

//       $(`.dashpanel.hidden:nth-child(${n})`).removeClass('hidden')
//       n++; 
//     console.log(this)
//   // Your function here

//   }
// });

// <script>

