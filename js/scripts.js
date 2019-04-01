
$(document).ready(function() {
 $("form#quiz").submit(function(event){
    event.preventDefault();
    $(#display).text(answer);
    var Q1 = $("input:radio[name=Q1]:checked").val();
    var Q2 = $("input:radio[name=Q2]:checked").val();
    var Q3 = $("input:radio[name=Q3]:checked").val();
    var Q4 = $("input:radio[name=Q4]:checked").val();
    var Q5 = $("input:radio[name=Q5]:checked").val();
    var Q6 = $("input:radio[name=Q6]:checked").val();
  
    var answer = parseInt(Q1)+parseInt(Q2)+parseInt(Q3)+parseInt(Q4)+parseInt(Q5)+parseInt(Q6);
    $("#input").text("HI THERE! HERE'S WHAT YOU SCORED: " +answer+ "%");
       
       if (answer > 40){
           $(#display).text("pass");
           $(#display).text("pass")
       }else{
        $(#display).text("fail") 
       }
        
    });
  });
   //==== user Interface ====//
   $(document). ready(function(){
       $("p").click(function(){

       });
   });