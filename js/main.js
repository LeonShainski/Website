jQuery(document).ready(function($) {

  var bgImage = $(".background-image"),
      frImage =$("front-pic"),
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
 .from(titleMain, 2,{autoAlpha:0})
 .from(scrollLine, 0.5,{scaleY:0, transformOrigin:"center top", ease:Power1.easeOut}, '-=2')
 .from(bgImage, 2, {autoAlpha:0, scale: 1.5,ease:Power1.easeOut}, '-=2')
 .from (frImage, 2, {autoAlpha:0, scale:1.5, ease:Power1.easeOut}, '-=1.5')
});
//"The title is gonna take one second to come from an opacity of 0
