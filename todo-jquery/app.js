$(function() {
  $("input[type='button']").on("click", function () {
    console.log($("input[type='text']").val());
  });
});
