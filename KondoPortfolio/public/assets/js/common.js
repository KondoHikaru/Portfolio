
var isOpenMenu = false;

$("#hoge").click(function(){
  //クリック後の処理
  //$("#hoge").hide();
  if(!isOpenMenu){
    $('#hoge').attr('src', 'assets/img/top/frame_hamburger_out.png');
    var elem = document.getElementById('menuitem');
    anime({
      targets: elem,
      translateX: 250
    })
    isOpenMenu = true;
  }
  else if(isOpenMenu){
    $('#hoge').attr('src', 'assets/img/top/frame_hamburger.png');
    var elem = document.getElementById('menuitem');
    anime({
      targets: elem,
      translateX: -250
    })
    isOpenMenu = false;
  }
});

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
