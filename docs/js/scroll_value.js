//参考　https://www.yoheim.net/labo/tips/getSeveralValue.html
window.addEventListener("load", function () {

 // Window上のマウス座標を取得する
 window.onmousemove = function (e) {
   var mouseX, mouseY;
    // マルチブラウザ対応のため、引数eventが指定されないブラウザは、
    // グローバルなeventオブジェクトを利用する。
    if (e) {
     mouseX = e.pageX;
     mouseY = e.pageY;
    } else {
     mouseX = event.pageX + document.body.scrollLeft;
     mouseY = event.pageY + document.body.scrollTop;
    }
  // 取得した値を表示する
  document.getElementById("mouseX").value = mouseX;
  document.getElementById("mouseY").value = mouseY;
 }

 // ページスクロール量を取得する
 window.onscroll = function () {
  // マルチブラウザ対応のため、
  // ２種類のプロパティから設定されている値を取得する
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  // 取得した値を画面に表示する
  document.getElementById("scrollX").value = scrollX;
  document.getElementById("scrollY").value = scrollY;
 }

 // 特定のDIV要素内でのマウス位置を取得する
 document.getElementById("targetDiv").onmousemove = function (e) {
  var mouseX, mouseY, offsetX=0, offsetY=0;
  var element = this;

  // まずは、対象DIV要素が
  // 画面上のどの位置にあるかを取得する
  while (element) {
   offsetX += element.offsetLeft;
   offsetY += element.offsetTop;
   element = element.offsetParent;
  }

  // DIV位置を考慮して、
  // X,Y座標を計算する
  if (e) {
   mouseX = e.pageX - offsetX;
   mouseY = e.pageY - offsetY;
  } else {
   mouseX = event.pageX + document.body.scrollLeft - offsetX;
   mouseY = event.pageY + document.body.scrollTop  - offsetY;
  }
  // 取得した値を表示する
  document.getElementById("divMouseX").value = mouseX;
  document.getElementById("divMouseY").value = mouseY;
 }

 // Windowサイズを取得する
 // 画面表示時に取得するのと、
 // 画面サイズが変わった時に、ウインドウサイズを再取得する
 document.getElementById("windowW").value = window.innerWidth;
 document.getElementById("windowH").value = window.innerHeight;

 window.onresize = function (e) {
  var w = window.innerWidth;
  var h = window.innerHeight;
  document.getElementById("windowW").value = w;
  document.getElementById("windowH").value = h;
 }
}
