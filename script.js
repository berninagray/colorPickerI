window.onload = function () {
	initColorPicker();
}
function initColorPicker() {
	let colorbox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
	rgb.red.addEventListener('change', () => {
		console.log("Red value: ", rgb.red.value);
		setColorBox (colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.green.addEventListener('change', () => {
		console.log("Green value: ", rgb.green.value);
		setColorBox (colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.blue.addEventListener('change', () => {
		console.log("blue value: ", rgb.blue.value);
		setColorBox (colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
}

function setBoxBGColor(colorBox, red, green, blue) {
	rgbVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}