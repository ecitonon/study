$(function() {
  $("input[type='button']").on("click", function () {
    var text = $("input[type='text']").val();

    $("<li>").text(text).appendTo("ul");
  });
});
