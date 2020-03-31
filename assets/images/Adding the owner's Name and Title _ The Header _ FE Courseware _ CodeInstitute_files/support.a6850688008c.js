// /* global $ */
// $(document).ready(function(){
//     // switch between pages
//     $(".btn-page").click(function(e){
//       e.preventDefault();

//       var id = $(this).attr("href");
//       var pageToShow = $(id);

//       $(".subpage").not(pageToShow).hide();
//       $(pageToShow).show();
//     });

//     $(".btn-back").click(function(e){
//        e.preventDefault();
//        $(".subpage").not(".main-page").hide();
//        $("#main-page").show();
//     });

//     window.onpopstate = function(e) {
//         e.preventDefault();
//         $(".subpage").not(".main-page").hide();
//         $("#main-page").show();
//     }

//      // scroll to top when accordion panel is open
//     $('#accordiontroubleshoot').on('shown.bs.collapse', function () {
//         var offset = $(".collapse.show").offset().top - $(".card-header").outerHeight();
//         $('html,body').animate({
//             scrollTop: $(".collapse.show").offset().top - $(".card-header").outerHeight()
//         }, 500);
//     });
// });