$(document).ready(function(){

  $('[data-toggle="popover"]').popover({
    title:'Формирование цены',
    content: '<p class="popover-text">Забор груза: Бесплатно</p>'+
             '<p class="popover-text">Тариф: 229 рублей</p>'+
             '<p class="popover-text no-wrap-text">Гарантийный сбор (мин. 10 руб.): 10 рублей</p>'+
             '<p class="popover-text">Дополнительные услуги: 0 рублей</p>'+
             '<p class="popover-text">Итого доставка: 274 рубля</p>',
    html: true
  });

  function parseFieldPhone(value){
    return  value.replace(/[^-+()0-9\s]/gi,'');
  }

  function parseFieldDateTime(value){
    return  value.replace(/[^-0-9\s:\.]/gi,'');
  }

  $('.phone').keyup(function(){
    $(this).val(parseFieldPhone($(this).val()));
  });

  $('.time').keyup(function(){
    $(this).val(parseFieldDateTime($(this).val()));
  });

  var count = 0;

  $('.kurierchikof-rs-form-order').on('click', function(){

    var popover = $('.popover');
    if(popover.length === 1 && count === 1){
      count = 0;
      $('.popover').popover('hide');
    }else if(popover.length === 1 && count === 0){
      count++;
    }
    

  });

  

})