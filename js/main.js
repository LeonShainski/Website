
jQuery(document).ready(function($) {

  var bgImage = $(".background-image"),
      frImage =$(".front-pic"),
      scrollLine=$(".scroll-line"),
      scrollDown=$(".scrolldown"),
      titleMain=$(".title-main")

//Animate in
  /*var tlLoader = new TimelineMax();
    tlLoader
    .from(titleMain,50,{autoAlpha:0})
    .from(scrollLine, 0.5, {scaleY:0, transformOrigin:"center top", ease:Power1.easeOut}, '-=2')
    .from(bgimage,2,{autoAlpha:0,scale: 1.5, ease:Power1.easeOut}, '-=2')*/

 var tlLoader = new TimelineMax();
  tlLoader
  //"The title is gonna take one second to come from an opacity of 0
  .from(titleMain, 2,{autoAlpha:0})
  .from(scrollLine, 0.5,{scaleY:0, transformOrigin:"center top", ease:Power1.easeOut}, '-=2')
  .from(bgImage, 2, {autoAlpha:0, scale: 1.5,ease:Power1.easeOut}, '-=2')
  .from (frImage, 2, {autoAlpha:0, scale:1.5, ease:Power1.easeOut}, '-=1.5')

 //Scroll Starts

  var controller = new ScrollMagic.Controller();

  var tlMainScroll = new TimelineMax()
  .add([
    TweenMax.to(frImage,4,{scale:2, y: 150, x:"-45%", ease:Power1.easeInOut}),
    TweenMax.to(titleMain,4,{autoAlpha:0}),
    TweenMax.to(bgImage,4,{scale:2, ease:Power1.easeInOut}),

 ]);

 //pin the scene
  var tweenHome = new ScrollMagic.Scene({
    triggerElement: '.pin-scene',
    triggerHook: 0,
    duration: '130%'})

 .setTween(tlMainScroll)
 .setPin('.pin-scene')
 .addTo(controller);




var tlMainScrollOut = new TimelineMax()
  .add([
      TweenMax.to(bgImage,8,{autoAlpha:0}),
      TweenMax.from('section2',4,{autoAlpha:0}),
      TweenMax.to(frImage,8, {autoAlpha:0}),
    ]);

 var section2 = new ScrollMagic.Scene({
    triggerElement:'.section2',
    triggerHook:0,
    duration: '40%'})

  .setTween(tlMainScrollOut)
  .setPin('.section2')
  .addTo(controller);





});

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });



  anime.timeline({loop: true})
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 3],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100
    }).add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.ml8 .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 1200,
      offset: '-=550'
    }).add({
      targets: '.ml8 .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.ml8',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 14000
    });

  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });

//Back to top button animation

  const button = document.querySelector('.btn');
  const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

  button.addEventListener('click', () => {
    // use anime.js
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  });
