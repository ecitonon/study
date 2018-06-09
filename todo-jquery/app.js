$(function() {
  $("input[type='button']").on("click", function () {
    $("<li>" + $("input[type='text']").val() + "</li>").appendTo("ul");
  });
});
