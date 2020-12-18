
var isOpenMenu = false;

$("#hoge").click(function(){
  //クリック後の処理
  //$("#hoge").hide();
  if(!isOpenMenu){
    $('#hoge').attr('src', '../img/top/frame_hamburger_out.png');
    var elem = document.getElementById('menu');
    anime({
      targets: elem,
      translateX: 250,
      easing:'easeOutCubic',
      duration:500
    })
    isOpenMenu = true;
  }
  else if(isOpenMenu){
    $('#hoge').attr('src', '../img/top/frame_hamburger.png');
    var elem = document.getElementById('menu');
    anime({
      targets: elem,
      translateX: 0,
      easing:'easeOutCubic',
      duration:500
    })
    isOpenMenu = false;
  }
});
var elem = document.getElementById('maintitle');
anime({
  targets: elem,
  translateX: -200,
  opacity: 1,
  easing:'easeOutCubic'
})

var elem = document.getElementById('icon');
anime({
  targets: elem,
  opacity: 1,
  duration: 1
})

// var elem = document.getElementById('hoge');
// anime({
//   targets: elem,
//   translateX: 250
// })

function MenuControl(test){

}

// var elem = document.getElementById('menuitem');
// anime({
//   targets: elem,
//   translateX: 250
// })
