//burger
var burger = document.querySelector('.burger-menu');

document.querySelector('.burgerBtn').addEventListener('click', () => {
	burger.classList.add('burger-active');
})

document.querySelector('.close').addEventListener('click', () => {
	burger.classList.remove('burger-active');
})



//button scroll to top
$('.btn').on('click', function() {
  $('body, html').animate({ scrollTop:0 },800);
  return false;
});


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});
