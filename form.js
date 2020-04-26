
$(".thanks").hide();
console.log("thanks");



$(".contacting").on("click", function(e) {
 
    e.preventDefault();
    $(".appForm").hide();
    $(".help").hide();
    $(".thanks").show();

   
  
   
       const name= $("#name").val();
       const email= $("#email").val();
 
       const zip= $('#zip').val();
       const issues= $('#issues').val();
        
        const VarData= 'name' + name + '&email' + email + '&zip' + zip + '&issues' + issues;
        console.log(VarData);
        $.ajax({
          type: "POST",
          url: "email.php",
          data: VarData,
          success: function(){
          $('.success').fadeIn(1000);
          }
      });

      return false;
 
      
});



  

$("#back").on("click", function(e){
  console.log("worked");
    e.preventDefault();
     $(".appForm").show();
     $(".help").show();
     $(".thanks").hide();
     $('#name',).val("");
     $('#email').val("");
     
  
     $('#zip').val("");
     $('#issues').val("");
   })

  
