$(document).ready(function () {
  $("#btn-submit").click(function () {
    $("#quiz").fadeOut(function() {
      
      var Q1 = parseInt($("input:radio[name='Q1']:checked").val());
      var Q2 = parseInt($("input:radio[name='Q2']:checked").val());
      var Q3 = parseInt($("input:radio[name='Q3']:checked").val());
      var Q4 = parseInt($("input:radio[name='Q4']:checked").val());
      var Q5 = parseInt($("input:radio[name='Q5']:checked").val());
  
      var results = parseInt(Q1 + Q2 + Q3 + Q4 + Q5);

      if(results >= 80) {
        $("#percentage").show(function() {
          $(".score").text(results);
        $(".condition").text("Passed Excellently!");
        })
        
      }else if(results >= 50) {
        $("#percentage").show(function() {
          $(".score").text(results);
        $(".condition").text("Passed fairly!");
        })
        
      }else {
        $("#percentage").show(function() {
          $(".score").text(results);
        $(".condition").text("You have failed! Retake the quiz!");
        })
        
      }
    
    });


  })





















})