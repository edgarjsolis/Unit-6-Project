$(".left-button").click(function(){
$(".Part-Two-Yes").show();
$(".title").hide();
$(".h1").hide();
$(".firstImage").hide();    
$(".left-button").hide();
$(".right-button").hide();
});

$(".right-button").click(function(){
$(".Part-Two-No").show();
$(".title").hide();
$(".h1").hide();
$(".firstImage").hide();    
$(".left-button").hide();
$(".right-button").hide();
});

$(".scraggy").dblclick(function() {
$(".Story-Ending-Yes").show();
$(".Part-Two-Yes").hide();       
});   

$(".pickachu").dblclick(function() {
$(".Story-Ending-No").show();
$(".Part-Two-No").hide();    

}); 

$(".left-button1").click(function() {
$(".Part-Two-Yes1").show();                         
$(".Story-Ending-Yes").hide();
}); 

$(".right-button1").click(function() {
$(".Part-Two-Yes2").show();
$(".Story-Ending-Yes").hide();    
});

$(".left-button2").click(function() {
$(".Part-Two-No1").show();
$(".Story-Ending-No").hide();
});

$(".right-button2").click(function() {
$(".Part-Two-No2").show();
$(".Story-Ending-No").hide();
});

$(".reset").click(function(){
$(".title").show();
$(".h1").show();
$(".firstImage").show(); 
$(".left-button").show();
$(".right-button").show();
$(".Part-Two-Yes1").hide();
$(".Part-Two-Yes2").hide();
$(".Part-Two-No1").hide();  
$(".Part-Two-No2").hide();  
});

$(".firstImage").hover(function() {
$(".pokemon").hide();   
});

$(".firstImage").mouseenter(function() {
$(".pokemon").show();
});    