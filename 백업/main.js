// window.onload = function() {} => js 문법
// $(document).evt((function)() {}) => jquery 문법
// 이 문장들은 모든 css, html이 다 랜더링 된 이후에 js를 쓰겠다. 라는 기본 문장이다
// main.js를 헤드태그에 연결한 경우 요소 생성 전이라 js가 실행되지 않는다

// 요새는 main.js를 헤드태그에서 연결한 경우 script 태그 안에 defer 붙혀주면 되긴 한다.
/* popup */
$('#popup').draggable();

$('#popup').hide(); //걸기적 거리니까 삭제하지만 문서 완성 후 지우기

$('.btn_popup_close').click(function(){
   $('#popup').hide();
})

/* header language*/
$('.lang_wrap button').click(function(){

   /*  $('.lang_wrap ul').css({
      'display' : 'flex',
      'opacity' : 1
   });
   */

   /*css 사용시 '속성', '밸류값' 넣어준다 */

   /* {'속성' : '밸류값'} 한 문장에 여러개를 사용할 때는 이렇게도 가능하다
      {'속성' : '밸류' , '속성' : '밸류'} */


   /* $('.lang_wrap button i').css({'transform' : 'rotate(180deg)'}) */


   //자기자신이니 this 써도 된다
   //근데 두개의 선택자를 한번에 적용할때는 쓰면 안됨
   // '선택자, 선택자'
   $('.lang_wrap button, .lang_wrap ul').toggleClass('open')
})


/* 전체 메뉴 */

$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'});
   $('html, body').css({'overflow' : 'hidden'})
})
$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide();
   $('html, body').css({'overflow' : 'auto'})
})

/* 헤더 스타일 추가 */
$('header .btn_search_open').click(function() {
   /* 헤더에 클래스 추가 / 제거 */
   $('header').toggleClass('on');
   /* search_popup */
   $('header .search_popup').toggle();
})


/* gnb .dep1의 직접 자손 li에게 마우스가 오버 ,아웃 되었을 때 */
/* $('#gnb .dep1>li').mouseover(function() {

   $('#gnb .dep2').show();
})
$('#gnb .dep1>li').mouseout(function() {

   $('#gnb .dep2').hide();
}) */
// method(parameter,parameter,parameter)...
// hover()  <<- jquery 이벤트 메소드 : mouseover와 mouseout을 동시에 쓰는 방법
// hover(function() {}, function() {}) 이런 식으로 사용한다
// click(function() {}), mouseover(function() {})

$('#gnb .dep1>li').hover(function() { //over
   /* $(this).children('.dep2_wrap').stop().slideDown()  *//* 각자의 자손 것만 내려오게 하기 */
   $(this).children('.dep2_wrap').stop().show()
   $('header').addClass('on')
}, function() { //out
   $('#gnb .dep2_wrap').stop().slideUp()
   $('header').removeClass('on')
})

/* footer */

let s = false;
$('.family_wrap>button').click(function() {
//$('.family_wrap>ul').toggle(500)
   if(s==false) {
      $('.family_wrap>ul').animate({'height' : '11.5em'})
      s = true;
   }
   else{
      $('.family_wrap>ul').animate({'height' : '0'})
      s = false;
   }

   console.log(s)
}) /* 패밀리 사이트 버튼(family_wrap>button)을 클릭하면 이벤트 발생 */
   /* 패밀리 리스트가 보였다 안보였다 하게 -> toggle() */
   //위쪽으로 늘었다가 줄어들었다가 애니메이션 줘야함 -> animate({}) 이건 css문법이다
   //css({prop:val , prop:val,})
const mainVisualSwiper = new Swiper('.main_swiper', {
   effect: 'fade',
   loop: true,
   autoplay: {
      delay: 2000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
   prevEl: '.swiper-button-prev',
   nextEl: '.swiper-button-next',
   },
})
//faculty
const facultySwiper = new Swiper('.faculty_swiper', {
   spaceBetween: 40,
   slidesPerView: 'auto',
   autoplay: {
      delay: 0,
   },
   speed: 4000,
   loop: true,
})

   
$('.main_visual .auto-play').click(function(){
   $(this).hide();
   $('.main_visual .auto-stop').show();
   mainVisualSwiper.autoplay.start();
})

$('.main_visual .auto-stop').click(function(){
   $(this).hide();
   $('.main_visual .auto-play').show();
   mainVisualSwiper.autoplay.stop();
})

// news

//** News
//1. tabs의 li를 클릭했을 때, active 클래스값을 가진 요소
//2. 해당 li의 속성(attribute) 중 'data-news' 속성의 값을 get
//3. content_box 중 가져온 'data-news' 속성의 값과 동일한 값을 가진 요소를 찾아서
//4. 찾은 그 박스를 보여주고, 나머지 박스는 안 보임

$('.news_wrap .tabs li').click(function() {

   $('.news_wrap .tabs li').not(this).removeClass('active')
   $(this).addClass('active');
 
   //* data-news 속성을 이용
   //$(this).attr('data-news')//이벤트발생한 요소의 'data-news' 속성을 get
   const tabName = $(this).attr('data-news');
   console.log(tabName)
 
   const i = $(this).index(); //0~4 (인덱스는 0부터 시작)
   // window.alert(i)
 
   // $('.news_wrap .content_box').hide();
   // $('.news_wrap .content_box').eq(i).show()
 
 })
