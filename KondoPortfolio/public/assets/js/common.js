
document.write("<p>common.js</p>");


var elem = document.getElementById('menu');
anime({
  targets: elem,
  translateX: 250
})

var test = document.getElementById('menuitem');
anime({
  targets: test,
  translateX: 250
})
