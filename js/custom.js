// JavaScript Document
new WOW().init();

	 $(document).ready(function(){
      
		 $(".nav-toggle").click(function(){
			 $(".menu").slideToggle()
		 })
        
	 })


$('.myproject').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
//default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

var typed = new Typed('.element1', {
               	strings: ["About Me", "Sơ Yếu Lý Lịch"],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
var typed = new Typed('.element2', {
               	strings: ["Skill", "Kinh Nghiệm"],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
var typed = new Typed('.element3', {
               	strings: ["Gallery", "Thư Viện"],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
var typed = new Typed('.element4', {
               	strings: ["Project", "Dự Án"],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
var typed = new Typed('.element5', {
               	strings: ["Contact Me", "Giao Lưu"],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
var typed = new Typed('.element6', {
               	strings: ["Xin chào, là tôi đây. Là một nhà thiết kế tự do, tôi luôn liên tục đi tìm kiếm và khám phá những điều ẩn sâu trong chính bản thân tôi. Thiết kế với tôi là nơi tôi được thỏa mãn sở thích cũng như tính cách bản thân. Và thật hoan nghênh chào đón các bạn đã đến với thế giới sắc màu của riêng tôi."],
       	 	typeSpeed:40,
        		backSpeed:50,
        		});