$(function(){
  var url = $("a[rel=index]").attr("href");
  $("#links").load(url + " #links div", function(){
    $(document).trigger("onNavigationLoaded");
  });
});
