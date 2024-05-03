// форма добавления
$(document).ready(function() {
    $('.popup-btn').click(function(e) {
      $('.popup-wrap').fadeIn(500);
      $('.popup-box').removeClass('transform-out').addClass('transform-in');
  
      e.preventDefault();
    });
  
    $('.popup-close').click(function(e) {
      $('.popup-wrap').fadeOut(500);
      $('.popup-box').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
  });
//выбор поиска
  $(document).ready(function() {
    $('.popup-btnn').click(function(e) {
      $('.popup-wrapp').fadeIn(500);
      $('.popup-boxx').removeClass('transform-out').addClass('transform-in');
  
      e.preventDefault();
    });
  
    $('.popup-close').click(function(e) {
      $('.popup-wrapp').fadeOut(500);
      $('.popup-boxx').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });

    $('.Ras-Search-btn').click(function(e) {
      $('.popup-wrapp').fadeOut(500);
      $('.popup-boxx').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
    $('.uzk-search-btn').click(function(e) {
      $('.popup-wrapp').fadeOut(500);
      $('.popup-boxx').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
  });
  
//форма расширенного поиска
  $(document).ready(function() {
    $('.Ras-Search-btn').click(function(e) {
      $('.Ras-Search-wrap').fadeIn(500);
      $('.Ras-Search-box').removeClass('transform-out').addClass('transform-in');
  
      e.preventDefault();
    });
  
    $('.popup-close').click(function(e) {
      $('.Ras-Search-wrap').fadeOut(500);
      $('.Ras-Search-box').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
  });

//форма сокращенного поиска
  $(document).ready(function() {
    $('.uzk-search-btn').click(function(e) {
      $('.uzk-search-wrap').fadeIn(500);
      $('.uzk-search-box').removeClass('transform-out').addClass('transform-in');
  
      e.preventDefault();
    });
  
    $('.popup-close').click(function(e) {
      $('.uzk-search-wrap').fadeOut(500);
      $('.uzk-search-box').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
  });



  $(document).ready(function() {
    $('.deleate').click(function(e) {
      $('.popup-deleate-card-wrap').fadeIn(500);
      $('.popup-deleate-card-box').removeClass('transform-out').addClass('transform-in');
  
      e.preventDefault();
    });
  
    $('.cancel').click(function(e) {
      $('.popup-deleate-card-wrap').fadeOut(500);
      $('.popup-deleate-card-box').removeClass('transform-in').addClass('transform-out');
  
      e.preventDefault();
    });
    $('.DELEATE').click(function(e) {

      $('.popup-deleate-card-wrap').fadeOut(500);
      $('.popup-deleate-card-box').removeClass('transform-in').addClass('transform-out');


    });
  });