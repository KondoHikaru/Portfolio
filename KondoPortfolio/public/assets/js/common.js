
document.write("<p>common.js</p>");


var elem = document.getElementById('elem');
anime({
  targets: elem,
  translateX: 250
  easing: 'easeOutCubic'
})

var test = document.getElementById('test');
anime({
  targets: test,
  translateX: 250
})
