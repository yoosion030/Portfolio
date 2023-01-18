$(document).ready(function () {
  $("#fullpage").fullpage();
});
// 모든 a 태그 속성을 target = "_blank"로 적용
var a = document.getElementsByTagName("a");

for (var i = 0; i < a.length; i++) {
  a[i].target = "_blank";
}
