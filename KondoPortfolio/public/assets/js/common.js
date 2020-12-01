
let start = Date.now(); // 開始時間を覚える

let timer = setInterval(function() {
  // 開始からの経過時間は？
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // 2秒後にアニメーションが終了
    return;
  }

  // timePassed 時点のアニメーションを描画
  draw(timePassed);

}, 20);

// timePassed は 0 から 2000 まで進む
// なので、left は 0px から 400px になります
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}
