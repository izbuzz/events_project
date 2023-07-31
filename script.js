const display = document.getElementById("color-display");

const buttons = [
	document.getElementById("aqua"),
	document.getElementById("teal"),
	document.getElementById("pink"),
	document.getElementById("purple"),
	document.getElementById("colorless")
];

for (const button of buttons) {
	button.addEventListener("click", event => {
		display.style["background-color"] = getColor(button.innerText);
		display.innerText = button.innerText;
	});
}

const hide_button = document.getElementById("hide");
hide_button.addEventListener("click", event => {
	if (hide_button.innerText === "hide") {
		hide_button.innerText = "show";
		display.style.display = "none";
	} else if (hide_button.innerText === "show") {
		hide_button.innerText = "hide";
		display.style.display = "flex";
	}
});

const random_buton = document.getElementById("random");
random_buton.addEventListener("click", event => {
		const btn = buttons[Math.ceil(Math.random() * buttons.length)];
		display.style["background-color"] = getColor(btn.innerText);
		display.innerText = btn.innerText;
});

function getColor(color) {
	return (color === "colorless") ? "white" : color;
}
