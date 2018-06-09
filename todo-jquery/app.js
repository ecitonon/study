$(function() {
  $("input[type='button']").on("click", function () {
    var text = $("input[type='text']").val();

    $("<li><label><input type='checkbox'>" + text + "</label></li>").appendTo("ul");
  });
});
