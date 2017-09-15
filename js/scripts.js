$(function() {
  $("form#formone").submit(function(event) {
    $("#tri-Equi, #tri-Iso, #tri-Scal, #none").hide();
    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());

        if (sideA > 0 && sideB > 0 && sideC > 0) {
          if (sideA >= sideB + sideC || sideB >= sideC + sideA || sideC >= sideB + sideA) {
            $("#none").show();

          }
          else if (sideA === sideB && sideB === sideC && sideC === sideA) {
            $("#tri-Equi").show();

          }
          else if (sideA === sideB || sideB === sideC || sideC === sideA) {
            $("#tri-Iso").show();

          }
          else if (sideA != sideB && sideB != sideC && sideC != sideA) {
            $("#tri-Scal").show();
          }
      }
        else {
          alert("Enter valid values");

        }





    event.preventDefault();

});

});
