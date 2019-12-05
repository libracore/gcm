function toggle_auswahl() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", true);
	ec.classList.toggle("hidden", true);
	print_at_home.classList.toggle("hidden", true);
	print_at_home_adresse.classList.toggle("hidden", true);
	
	var klassisch_img = document.getElementById("klassisch_img");
	var ec_img = document.getElementById("ec_img");
	var print_img = document.getElementById("print_img");
	ec_img.classList.toggle("hidden", false);
	print_img.classList.toggle("hidden", false);
	klassisch_img.classList.toggle("hidden", false);
	
	var zuruck_btn1  = document.getElementById("auswahl1");
	zuruck_btn1.classList.toggle("hidden", true);
	var zuruck_btn2  = document.getElementById("auswahl2");
	zuruck_btn2.classList.toggle("hidden", true);
	var zuruck_btn3  = document.getElementById("auswahl3");
	zuruck_btn3.classList.toggle("hidden", true);
}
function toggle_klassisch() {
	var klassisch = document.getElementById("sektion_klassisch");
	var ec = document.getElementById("sektion_ec");
	var print_at_home = document.getElementById("sektion_print_at_home");
	var print_at_home_adresse = document.getElementById("sektion_print_at_home_adresse");
	klassisch.classList.toggle("hidden", false);
	ec.classList.toggle("hidden", true);
	print_at_home.classList.toggle("hidden", true);
	print_at_home_adresse.classList.toggle("hidden", true);
	
	var klassisch_img = document.getElementById("klassisch_img");
	var ec_img = document.getElementById("ec_img");
	var print_img = document.getElementById("print_img");
	ec_img.classList.toggle("hidden", true);
	print_img.classList.toggle("hidden", true);
	klassisch_img.classList.toggle("hidden", false);
	
	var zuruck_btn1  = document.getElementById("auswahl1");
	zuruck_btn1.classList.toggle("hidden", false);
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
	
	var klassisch_img = document.getElementById("klassisch_img");
	var ec_img = document.getElementById("ec_img");
	var print_img = document.getElementById("print_img");
	ec_img.classList.toggle("hidden", false);
	print_img.classList.toggle("hidden", true);
	klassisch_img.classList.toggle("hidden", true);
	
	var zuruck_btn2  = document.getElementById("auswahl2");
	zuruck_btn2.classList.toggle("hidden", false);
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
	
	var klassisch_img = document.getElementById("klassisch_img");
	var ec_img = document.getElementById("ec_img");
	var print_img = document.getElementById("print_img");
	ec_img.classList.toggle("hidden", true);
	print_img.classList.toggle("hidden", false);
	klassisch_img.classList.toggle("hidden", true);
	
	var zuruck_btn3  = document.getElementById("auswahl3");
	zuruck_btn3.classList.toggle("hidden", false);
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
function change_img() {
	var img = document.getElementById("motiv_auswahl").value;
	var all_img = document.getElementsByClassName("img-rounded");
	var i;
	for (i=0; i < all_img.length; i++) {
		all_img[i].classList.toggle("hidden", true);
	}
	document.getElementById(img).classList.toggle("hidden", false);
}

function betrag() {
	var auswahl = document.getElementById("sel1");
	var betragfeld = document.getElementById("betrag_gruppe");
	if (auswahl.value == 'custom') {
		betragfeld.classList.remove("hidden");
	} else {
		if (betragfeld.classList.contains("hidden")) {} else {
			betragfeld.classList.add("hidden");
		}
	}
}

function betrag2() {
	var auswahl = document.getElementById("sel2");
	var betragfeld = document.getElementById("betrag_gruppe2");
	if (auswahl.value == 'custom') {
		betragfeld.classList.remove("hidden");
	} else {
		if (betragfeld.classList.contains("hidden")) {} else {
			betragfeld.classList.add("hidden");
		}
	}
}

function betrag3() {
	var auswahl = document.getElementById("sel3");
	var betragfeld = document.getElementById("betrag_gruppe3");
	if (auswahl.value == 'custom') {
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
	var motiv = document.getElementById("motiv_auswahl").value;
	if (betrag == 'custom') {
		betrag = parseFloat(document.getElementById("betrag").value);
	}
	if (!betrag || betrag < 25 || betrag > 3000) {
		frappe.msgprint("Bitte geben Sie einen korrekten Betrag zwischen CHF 25.00 und CHF 3'000 ein.", "Betrag fehlerhaft");
	}
	frappe.call({
		method: 'gcm.www.gutscheine.vorschau',
		args: {
			"von": von,
			"fuer": fuer,
			"widmung": widmung,
			"betrag": betrag,
			"motiv": motiv
		},
		callback: function(r) {
			var url = '/api/method/gcm.www.gutscheine.download_vorschau_pdf?';
			var win = window.open(url, '_blank');
			win.focus();
		}
	});
}

function show_print_at_home_pdf(name) {
	frappe.call({
		method: 'gcm.www.gutscheine.download_print_at_home_pdf',
		args: {
			"name": name
		},
		callback: function(r) {
			var url = '/api/method/gcm.www.gutscheine.download_print_at_home_pdf?name=' + name;
			var win = window.open(url, '_blank');
			win.focus();
		}
	});
}
function tbd() {
	frappe.msgprint("Dies muss zuerst noch programmiert werden...", "Noch nicht Programmiert");
}

var go_format = '';
var salutation = '';
var company = '';
var first_name = '';
var last_name = '';
var street = '';
var second_adressline = '';
var plz = '';
var city = '';
var email = '';
var phone = '';
var amount = 25;
var von = '';
var fuer = '';
var widmung = '';
var comment = '';
var motiv = '';
function bestellung(format, go) {
	if (format == 'Klassisch') {
		company = document.getElementById("k_firma").value;
		if (document.getElementById("k_herr").checked) {
			salutation = 'Herr';
		} else if (document.getElementById("k_frau").checked) {
			salutation = 'Frau';
		} else {
			salutation = 'Herr';
		}
		first_name = document.getElementById("k_vorname").value;
		last_name = document.getElementById("k_nachname").value;
		street = document.getElementById("k_strasse").value;
		second_adressline = '';
		plz = document.getElementById("k_plz").value;
		city = document.getElementById("k_ort").value;
		email = document.getElementById("k_email").value;
		phone = document.getElementById("k_tel").value;
		comment = document.getElementById("k_comment").value;
		amount = document.getElementById("sel2").value;
		if (amount == "custom") {
			amount = parseFloat(document.getElementById("betrag2").value);
		}
		if (!amount || amount < 25 || amount > 3000) {
			frappe.msgprint("Bitte geben Sie einen korrekten Betrag zwischen CHF 25.00 und CHF 3'000 ein.", "Betrag fehlerhaft");
			return false
		}
	} else if (format == 'EC-Format') {
		company = document.getElementById("ec_firma").value;
		if (document.getElementById("ec_herr").checked) {
			salutation = 'Herr';
		} else if (document.getElementById("ec_frau").checked) {
			salutation = 'Frau';
		} else {
			salutation = 'Herr';
		}
		first_name = document.getElementById("ec_vorname").value;
		last_name = document.getElementById("ec_nachname").value;
		street = document.getElementById("ec_strasse").value;
		second_adressline = '';
		plz = document.getElementById("ec_plz").value;
		city = document.getElementById("ec_ort").value;
		email = document.getElementById("ec_email").value;
		phone = document.getElementById("ec_tel").value;
		comment = document.getElementById("ec_comment").value;
		amount = document.getElementById("sel3").value;
		if (amount == "custom") {
			amount = parseFloat(document.getElementById("betrag3").value);
		}
		if (!amount || amount < 25 || amount > 3000) {
			frappe.msgprint("Bitte geben Sie einen korrekten Betrag zwischen CHF 25.00 und CHF 3'000 ein.", "Betrag fehlerhaft");
			return false
		}
	} else if (format == 'print@home') {
		company = document.getElementById("ph_firma").value;
		if (document.getElementById("ph_herr").checked) {
			salutation = 'Herr';
		} else if (document.getElementById("ph_frau").checked) {
			salutation = 'Frau';
		} else {
			salutation = 'Herr';
		}
		first_name = document.getElementById("ph_vorname").value;
		last_name = document.getElementById("ph_nachname").value;
		street = document.getElementById("ph_strasse").value;
		second_adressline = '';
		plz = document.getElementById("ph_plz").value;
		city = document.getElementById("ph_ort").value;
		email = document.getElementById("ph_email").value;
		phone = document.getElementById("ph_tel").value;
		von = document.getElementById("of").value;
		fuer = document.getElementById("for").value;
		widmung = document.getElementById("comment").value;
		comment = document.getElementById("ph_comment").value;
		motiv = document.getElementById("motiv_auswahl").value;
		amount = document.getElementById("sel1").value;
		if (amount == "custom") {
			amount = parseFloat(document.getElementById("betrag").value);
		}
		if (!amount || amount < 25 || amount > 3000) {
			frappe.msgprint("Bitte geben Sie einen korrekten Betrag zwischen Fr. 25.00 und Fr. 3'000 ein.", "Betrag fehlerhaft");
			return false
		}
	}
	if (!first_name || !last_name || !street || !plz || !city) {
		frappe.msgprint("Bitte geben Sie mindestens Vorname, Nachname, Strasse, Postleitzahl und Ort an.", "Fehlende Angaben");
		return false
	}
	if (!go) {
		if (format == 'print@home') {
			if (company) {
				document.getElementById("modal_preview").innerHTML = "<h2>Ihr Gutschein</h2><p>" + format + "<br>Betrag: Fr. " + amount + ".-<br>Motiv: " + motiv + "</p><h2>Ihre Kontaktdaten</h2><p>" + company + "<br>" + salutation + "<br>" + first_name + " " + last_name + "<br>" + street + "<br>" + plz + " " + city + "<br>" + phone + "<br>" + email + "</p><p>Zusätzliche Informationen:<br>" + comment + "</p>";
			} else {
				document.getElementById("modal_preview").innerHTML = "<h2>Ihr Gutschein</h2><p>" + format + "<br>Betrag: Fr. " + amount + ".-<br>Motiv: " + motiv + "</p><h2>Ihre Kontaktdaten</h2><p>" + salutation + "<br>" + first_name + " " + last_name + "<br>" + street + "<br>" + plz + " " + city + "<br>" + phone + "<br>" + email + "</p><p>Zusätzliche Informationen:<br>" + comment + "</p>";
			}
		} else {
			if (company) {
				document.getElementById("modal_preview").innerHTML = "<h2>Ihr Gutschein</h2><p>" + format + "<br>Betrag: Fr. " + amount + ".-</p><h2>Ihre Kontaktdaten</h2><p>" + company + "<br>" + salutation + "<br>" + first_name + " " + last_name + "<br>" + street + "<br>" + plz + " " + city + "<br>" + phone + "<br>" + email + "</p><p>Zusätzliche Informationen:<br>" + comment + "</p>";
			} else {
				document.getElementById("modal_preview").innerHTML = "<h2>Ihr Gutschein</h2><p>" + format + "<br>Betrag: Fr. " + amount + ".-</p><h2>Ihre Kontaktdaten</h2><p>" + salutation + "<br>" + first_name + " " + last_name + "<br>" + street + "<br>" + plz + " " + city + "<br>" + phone + "<br>" + email + "</p><p>Zusätzliche Informationen:<br>" + comment + "</p>";
			}
		}
		go_format = format;
		$("#myModal").modal();
	} else {
		$("#myModal").modal('hide');
		frappe.show_message("Bitte warten, Ihr Gutschein wird erstellt");
		get_barcode(go_format, amount, salutation, company, first_name, last_name, street, plz, city, email, phone, comment, motiv);
	}
}

function get_barcode(go_format, amount, salutation, company, first_name, last_name, street, plz, city, email, phone, comment, motiv) {
	frappe.require("assets/frappe/js/lib/JsBarcode.all.min.js");
	if (go_format == 'print@home') {
		frappe.call({
			method: 'gcm.www.gutscheine.count_print_at_home',
			async: false,
			callback: function(r) {
				console.log(r.message);
				var nummer = r.message;
				var standard = "263105";
				var add_zero = 6 - nummer.toString().length;
				var y;
				for (y=0; y < add_zero; y++) {
					nummer = '0' + nummer.toString();
				}
				var summe_standard = 0;
				standard = standard + nummer.toString();
				
				//******************************************************************
				//prüfziffer berechnung (macht jsbarcode auch)
				/* var i;
				for (i=0; i < standard.split("").length; i++) {
					if (i == 0) {
						summe_standard = summe_standard + (parseInt(standard.split("")[0]));
					} else {
						if (i%2 == 0) {
							summe_standard = summe_standard + (parseInt(standard.split("")[i]));
						} else {
							summe_standard = summe_standard + (parseInt(standard.split("")[i]) * 3);
						}
					}
				}
				var pz = summe_standard%10;
				if (pz > 0) {
					pz = 10 - pz;
				} */
				
				//barcode mit prüfziffer = standard + pz
				//******************************************************************
				
				var value = standard;
				JsBarcode('#barcode', value, {height: 40, format: 'EAN13', textAlign: "center", textPosition: "bottom"})
				$('#barcode').attr('data-barcode-value', value);
				
				var svg_as_string = $('#barcode').prop('outerHTML');
				svg_as_string = svg_as_string.replace(/\x=/g, 'x-x=');
				svg_as_string = svg_as_string.replace(/\y=/g, 'x-y=');
				svg_as_string = svg_as_string.replace(/\<svg/g, "<svg-x");
				svg_as_string = svg_as_string.replace(/\<g/g, "<g-x");
				svg_as_string = svg_as_string.replace(/\<rect/g, "<rect-x");
				svg_as_string = svg_as_string.replace(/\svg>/g, "svg-x>");
				svg_as_string = svg_as_string.replace(/\g>/g, "g-x>");
				svg_as_string = svg_as_string.replace(/\/rect>/g, "rect-x>");
				
				var barcode = svg_as_string + '!*!x="' + $('#barcode > g > text')[0].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[0].attributes.y.nodeValue + '"';
				barcode = barcode + '!*!x="' + $('#barcode > g > text')[1].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[1].attributes.y.nodeValue + '"';
				barcode = barcode + '!*!x="' + $('#barcode > g > text')[2].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[2].attributes.y.nodeValue + '"';
				barcode = barcode + '!*!x="' + $('#barcode > g > text')[3].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[3].attributes.y.nodeValue + '"';
				barcode = barcode + '!*!x="' + $('#barcode > g > text')[4].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[4].attributes.y.nodeValue + '"';
				barcode = barcode + '!*!x="' + $('#barcode > g > text')[5].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[5].attributes.y.nodeValue + '"';
				
				frappe.call({
					method: 'gcm.www.gutscheine.create_gutschein',
					args: {
						"type": go_format,
						"amount": amount,
						"salutation": salutation,
						"company": company,
						"first_name": first_name,
						"last_name": last_name,
						"street": street,
						"plz": plz,
						"city": city,
						"email": email,
						"phone": phone,
						"barcode": barcode,
						"inscription": widmung,
						"text_to": fuer,
						"text_from": von,
						"informationen": comment,
						"motiv": motiv
					},
					callback: function(r) {
						frappe.hide_message();
						frappe.msgprint('Ihr Print@Home-Gutschein wurde als "' + r.message +'" eröffnet. Sie können Ihn direkt speichern und ausdrucken, Sie erhalten Ihn ebenfalls in den nächsten Minuten als E-Mail', "Vielen Dank");
						show_print_at_home_pdf(r.message);
					}
				});
			}
		});
	} else {
		var value = '000000000000';
		JsBarcode('#barcode', value, {height: 40, format: 'EAN13', textAlign: "center", textPosition: "bottom"})
		$('#barcode').attr('data-barcode-value', value);
		
		var svg_as_string = $('#barcode').prop('outerHTML');
		svg_as_string = svg_as_string.replace(/\x=/g, 'x-x=');
		svg_as_string = svg_as_string.replace(/\y=/g, 'x-y=');
		svg_as_string = svg_as_string.replace(/\<svg/g, "<svg-x");
		svg_as_string = svg_as_string.replace(/\<g/g, "<g-x");
		svg_as_string = svg_as_string.replace(/\<rect/g, "<rect-x");
		svg_as_string = svg_as_string.replace(/\svg>/g, "svg-x>");
		svg_as_string = svg_as_string.replace(/\g>/g, "g-x>");
		svg_as_string = svg_as_string.replace(/\/rect>/g, "rect-x>");
		
		var barcode = svg_as_string + '!*!x="' + $('#barcode > g > text')[0].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[0].attributes.y.nodeValue + '"';
		barcode = barcode + '!*!x="' + $('#barcode > g > text')[1].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[1].attributes.y.nodeValue + '"';
		barcode = barcode + '!*!x="' + $('#barcode > g > text')[2].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[2].attributes.y.nodeValue + '"';
		barcode = barcode + '!*!x="' + $('#barcode > g > text')[3].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[3].attributes.y.nodeValue + '"';
		barcode = barcode + '!*!x="' + $('#barcode > g > text')[4].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[4].attributes.y.nodeValue + '"';
		barcode = barcode + '!*!x="' + $('#barcode > g > text')[5].attributes.x.nodeValue + '" y="' + $('#barcode > g > text')[5].attributes.y.nodeValue + '"';
		
		frappe.call({
			method: 'gcm.www.gutscheine.create_gutschein',
			args: {
				"type": go_format,
				"amount": amount,
				"salutation": salutation,
				"company": company,
				"first_name": first_name,
				"last_name": last_name,
				"street": street,
				"plz": plz,
				"city": city,
				"email": email,
				"phone": phone,
				"barcode": barcode,
				"informationen": comment
			},
			callback: function(r) {
				frappe.hide_message();
				if (go_format == 'Klassisch') {
					frappe.msgprint('Ihr Gutschein wurde als "' + r.message +'" eröffnet. Sie erhalten ihn in den nächsten Tagen per Post.', "Vielen Dank");
				} else {
					frappe.msgprint('Ihre Geschenkkarte wurde als "' + r.message +'" eröffnet. Sie erhalten sie in den nächsten Tagen per Post.', "Vielen Dank");
				}
			}
		});
	}
}