new fullpage("#fullpage", {
  anchors: ["page1", "page2", "page3"],
  autoScrolling: true,
  scrollHorizontally: true,
  licenseKey: "DC9A7734-AD314ED3-9000B91C-F395EBC8",
  verticalCentered: false,
  lockAnchors: true
});

$(document).on("click", "#moveTo", function() {
  fullpage_api.moveTo("page2", 1);
});

$(document).on("click", "#moveToTwo", function() {
  fullpage_api.moveTo("page3", 1);
});
//methods
fullpage_api.setAllowScrolling(true);