$(function(){
	//open popup-search
   $('.search').click(function(event){
	  event.preventDefault();
	  $(this).css('background-color','#fff')
	  $('.popup-search').addClass('is-visible');
	  $('.search img').addClass('search-invert');
   });
   //close popup-search
	 $('.popup-search').on('click', function(event){
	  if( $(event.target).is('.popup-search')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$('.search img').removeClass('search-invert');
			$('.search').css('background-color','rgba(255, 255, 255, 0.2)');
	  }
   });
   /*-----При клике на блок входа всплывает модальное окно личного кабинета----*/
  //open popup-user
   $('.enter').on('click', function(event){
      event.preventDefault();
	  $('.popup-user').addClass('is-visible');
	  
	  $('.enter>.login').addClass('enter-active').css('background-color','#fff').css('color','#323232');
	 /* $('.enter .login::before').css('background','url(../img/icon-enter-rev.png)');
	  $('.modal-user').slideToggle(500);*/
   });
   
   //close popup-search
   $('.popup-user').on('click', function(event){
	  if( $(event.target).is('.popup-user')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$('.enter>.login').removeClass('enter-active').css('background-color','rgba(255, 255, 255, 0.2)').css('color','#fff');
	  }
   });
   
   //close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup').removeClass('is-visible');
			$('.enter>.login').removeClass('enter-active').css('background-color','rgba(255, 255, 255, 0.2)').css('color','#fff');
	    }
    });
	
   $('.address > .btn').click(function(event){
	   event.preventDefault();
	  $('.feedback').slideToggle(500);
   });
   
   $('.modal-content-close').click(function(e){
	  $('.feedback').css('display','none');
   });
 
});