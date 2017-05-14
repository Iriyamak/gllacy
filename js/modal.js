jQuery.noConflict();
jQuery(document).ready(function($){
/*-----При клике на блок поиска всплывает модальное окно поиска----*/
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
   //Закрываем модальное окно popup-search кликом по клавише "Esc" 
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup-search').removeClass('is-visible');
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
   
   //close popup-user
   $('.popup-user').on('click', function(event){
	  if( $(event.target).is('.popup-user')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$('.enter>.login').removeClass('enter-active').css('background-color','rgba(255, 255, 255, 0.2)').css('color','#fff');
	  }
   });
   
   //Закрываем модальное окно popup-user кликом по клавише "Esc" 
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup-user').removeClass('is-visible');
			$('.enter>.login').removeClass('enter-active').css('background-color','rgba(255, 255, 255, 0.2)').css('color','#fff');
	    }
    });
	
	/*-----При клике на кнопку обратной связи всплывает модальное окно формы связи----*/
   /*$('.address > .btn').click(function(event){
	   event.preventDefault();
	  $('.feedback').slideToggle(500);
   });
   
   $('.modal-content-close').click(function(e){
	  $('.feedback').css('display','none');
   });*/
   
   
   /*-----При клике на блок корзины появляется модальное окно корзины с товарами (пример, т.к. на самом деле товары в корзину добавляются со страницы конкретного товара методом ajax)----*/
  //open popup-cart
   $('.cart').on('click', function(event){
      event.preventDefault();
	  $('.cart').css('display','none');
	  $('.cart-full').css('display','block');
	  $('.popup-cart').addClass('is-visible');
   });
   
   //close popup-user
   $('.popup-cart').on('click', function(event){
	  if( $(event.target).is('.popup-cart')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			 $('.cart-full').css('display','none');
			 $('.cart').css('display','block');
	  }
   });
 
});

 