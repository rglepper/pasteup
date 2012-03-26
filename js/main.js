require(["detect/detect"], function(detect) {

	function doDetect() {
		document.querySelector('[data-feature="layout"]').innerHTML = detect.getLayoutMode();
		document.querySelector('[data-feature="bandwidth"]').innerHTML = detect.getConnectionSpeed();
		document.querySelector('[data-feature="battery"]').innerHTML = (detect.getBatteryLevel() === 1) ? "full" : detect.getBatteryLevel();
		document.querySelector('[data-feature="retina"]').innerHTML = (detect.getPixelRatio() === 2) ? "true" : "false";
	}

	window.addEventListener("resize", function() {
		doDetect();
	}, false);

	doDetect();

});