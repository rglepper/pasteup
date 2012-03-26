require(["detect/detect", "detect/images"], function(detect, images) {

	// Display a bunch of things we could detect.
	document.querySelector('[data-feature="layout"]').innerHTML = detect.getLayoutMode();
	document.querySelector('[data-feature="bandwidth"]').innerHTML = detect.getConnectionSpeed();
	document.querySelector('[data-feature="battery"]').innerHTML = (detect.getBatteryLevel() === 1) ? "full" : detect.getBatteryLevel();
	document.querySelector('[data-feature="retina"]').innerHTML = (detect.getPixelRatio() === 2) ? "true" : "false";

	// Listen for resize to redetect layout mode. You might not do this in real life.
	window.addEventListener("resize", function() {
		document.querySelector('[data-feature="layout"]').innerHTML = detect.getLayoutMode();
	}, false);

	// Upgrade the images.
	images.upgrade();

});