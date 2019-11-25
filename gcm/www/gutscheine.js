function toggle_klassisch() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	klassisch.classList.toggle("hidden", false);
	ec.classList.toggle("hidden", true);
}
function toggle_ec() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	klassisch.classList.toggle("hidden", true);
	ec.classList.toggle("hidden", false);
}