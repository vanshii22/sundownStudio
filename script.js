const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC=document.querySelector(".elem-container");
var fix=document.querySelector("#fixed")
elemC.addEventListener("mouseenter",function(){
     fix.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fix.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-img")
        fix.style.backgroundImage = `url(${image})`
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       
        601: {
            slidesPerView: 2, 
            spaceBetween: 20, 
          },
          1025: {
            slidesPerView: 2, 
            spaceBetween: 20, 
          },
          1026: {
            slidesPerView: 3, 
            spaceBetween: 30, 
          }
    }
  });


  function loaderAnimation() {
    
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()


var navbar=document.querySelector("nav h3")
var navItems=document.querySelector("nav .nav-items")
var fullscr=document.querySelector("#full-scr")
var navImg=document.querySelector("nav img")
var flag=0
navbar.addEventListener("click",function(){
    if(flag==0){
    
        fullscr.style.top=0
        navImg.style.opacity=0
        navItems.style.top=0
        flag=1
    }
    else{
        fullscr.style.top="-100%"
        navImg.style.opacity=1
        fullscr.style.top='-100%'
        flag=0
    }
})