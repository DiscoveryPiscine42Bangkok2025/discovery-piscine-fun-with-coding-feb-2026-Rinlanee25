$(document).ready(function () {
  let size = 200;
  let colors = ["red", "green", "blue"];
  let i = 0;

  $("#balloon").click(function () {
    size += 10;
    i = (i + 1) % 3;

    if (size > 420) size = 200;

    $(this).css({
      width: size + "px",
      height: size + "px",
      backgroundColor: colors[i]
    });
  });
});
