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
