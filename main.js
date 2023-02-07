var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#rickroll"
})
  .setClassToggle("#rickroll", "show")
  .addTo(controller);
