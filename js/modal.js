$(function(){

   $('.search').click(function(event){
	  event.preventDefault();
	  $('.modal-search').slideToggle(500);
   });
   /*-----При клике на блок входа всплывает модальное окно личного кабинета----*/
  
   $('.enter').click(function(event){
      event.preventDefault();
	  $('.enter>.login').css('background-color','rgba(255, 255, 255, 1)').css('color','#323232');
	  $('.enter .login::before').css('background','url(../img/icon-enter-rev.png)');
	  $('.modal-user').slideToggle(500);
   });
   
    
   $('.address > .btn').click(function(event){
	   event.preventDefault();
	  $('.feedback').slideToggle(500);
   });
   
   $('.modal-content-close').click(function(e){
	  $('.feedback').css('display','none');
   });
   
   /*$(document).click( function(event){
      if( $(event.target).closest(".modal-content").length ) 
        return;
      $(".modal-content").fadeOut("slow");
      event.stopPropagation();
    });*/
  
   
  /* $('body').click(function(e) {

    if($(e.target).closest('.modal-content-map').length==0) {
	$('.modal-content-map').css('display','none');
   }
});*/
 
});