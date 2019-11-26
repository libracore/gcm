$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});
function toggle_klassisch() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", false);
	ec.classList.toggle("hidden", true);
	print_at_home.classList.toggle("hidden", true);
	print_at_home_adresse.classList.toggle("hidden", true);
}
function toggle_ec() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", true);
	ec.classList.toggle("hidden", false);
	print_at_home.classList.toggle("hidden", true);
	print_at_home_adresse.classList.toggle("hidden", true);
}
function toggle_print_at_home() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", true);
	ec.classList.toggle("hidden", true);
	print_at_home.classList.toggle("hidden", false);
	print_at_home_adresse.classList.toggle("hidden", true);
}
function toggle_print_at_home_adresse() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", true);
	ec.classList.toggle("hidden", true);
	print_at_home.classList.toggle("hidden", true);
	print_at_home_adresse.classList.toggle("hidden", false);
}

function betrag() {
	var auswahl = document.getElementById("sel1");
	var betragfeld = document.getElementById("betrag_gruppe");
	if (auswahl.value == 'Eigener Betrag') {
		betragfeld.classList.remove("hidden");
	} else {
		if (betragfeld.classList.contains("hidden")) {} else {
			betragfeld.classList.add("hidden");
		}
	}
}

function count() {
	var feld = document.getElementById("comment");
	var rest = 160 - feld.value.length;
	var anzahl_zeichen = document.getElementById("anzahlzeichen");
	anzahl_zeichen.innerHTML = rest.toString() + " Zeichen übrig";
}

function vorschau() {
	var von = document.getElementById("of").value;
	var fuer = document.getElementById("for").value;
	var widmung = document.getElementById("comment").value;
	var betrag = document.getElementById("sel1").value;
	if (betrag != 'Eigener Betrag') {
		betrag = betrag.split(" ")[1]
	} else {
		betrag = parseFloat(document.getElementById("betrag").value);
	}
	if (!betrag || betrag < 20 || betrag > 3000) {
		frappe.msgprint("Bitte geben Sie einen korrekten Betrag zwischen CHF 20.00 und CHF 3'000 ein.", "Betrag fehlerhaft");
	}
	frappe.call({
		method: 'gcm.www.gutscheine.vorschau',
		args: {
			"von": von,
			"fuer": fuer,
			"widmung": widmung,
			"betrag": betrag
		},
		callback: function(r) {
			var url = 'http://localhost/api/method/gcm.www.gutscheine.download_vorschau_pdf?';
			var win = window.open(url, '_blank');
			win.focus();
		}
	});
}

function tbd() {
	frappe.msgprint("Dies muss zuerst noch programmiert werden...", "Noch nicht Programmiert");
}