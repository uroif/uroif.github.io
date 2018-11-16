// Add slideDown animation to Bootstrap dropdown when expanding.
$(".dropdown").on("show.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown(500);
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$(".dropdown").on("hide.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp(5000);
});
