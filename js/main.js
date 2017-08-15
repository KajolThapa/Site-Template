$(document).ready(function(){
  $(".heading-title").hover(function(event){
    console.log('Im over the title');
    console.log(event.type);
    if(event.type === "mouseenter"){
      // fadeIn
      $(".bio-info").fadeIn();

    } else {
      // fadeOut
      $(".bio-info").fadeOut({duration:5000});
    }
  });
});
