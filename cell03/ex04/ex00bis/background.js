$(document).ready(function () {
  $("#change").click(function () {

    // สุ่มสี
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // เปลี่ยนสีพื้นหลัง
    $("body").css("background-color", `rgb(${r}, ${g}, ${b})`);
  });
});
