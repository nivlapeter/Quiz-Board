
$(document).ready(function() {
 $("form#quiz").submit(function(event){
    event.preventDefault();
    $(#display).text(answer);
    var Q1 = $(parseInt("input:radio[name=Q1]:checked")).val();
    var Q2 = $(parseInt("input:radio[name=Q2]:checked")).val();
    var Q3 = $(parseInt("input:radio[name=Q3]:checked")).val();
    var Q4 = $(parseInt("input:radio[name=Q4]:checked")).val();
    var Q5 = $(parseInt("input:radio[name=Q5]:checked")).val();
    var Q6 = $(parseInt("input:radio[name=Q6]:checked")).val();
  
    var answer = (Q1)+(Q2)+parseInt(Q3)+(Q4)+(Q5)+(Q6);
    $("#input").text("HI THERE! HERE'S WHAT YOU SCORED: " +answer+ "%");
       
       if (answer === 40){
           $(#display).text("pass");
}
       else if (result >=40||<=70 ){
        $(#display).text("average")
       }
       else if (result >=70||<=120)
       $(#display).text("great") 
       }
       else{
        $(#display).text("fail") 
       }
        
    });
  });
   //==== user Interface ====//
   $(document). ready(function(){
       $("p").click(function(){

       });
   });