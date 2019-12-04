# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import frappe
from frappe.utils.pdf import get_pdf
from frappe.utils.data import nowdate, add_years
import base64

@frappe.whitelist(allow_guest=True)
def vorschau(von='Kein von', fuer='Kein für', widmung='Keine Widmung', betrag=0):
	gutschein = frappe.get_doc("Gutschein", 'Gutschein-000001')
	gutschein.text_from = von
	gutschein.text_to = fuer
	gutschein.inscription = widmung.replace("\n", "<br>")
	gutschein.amount = betrag
	gutschein.selling_date = nowdate()
	gutschein.valid_date = add_years(nowdate(), 1)
	
	gutschein.save(ignore_permissions=True)
	
	return
	
@frappe.whitelist(allow_guest=True)
def download_vorschau_pdf():
	doctype="Gutschein"
	name='Gutschein-000001'
	format='Standard'
	doc=None
	no_letterhead=0
	html = frappe.get_print(doctype, name, format, doc=doc, no_letterhead=no_letterhead)
	frappe.local.response.filename = "{name}.pdf".format(name=name.replace(" ", "-").replace("/", "-"))
	frappe.local.response.filecontent = get_pdf(html)
	frappe.local.response.type = "download"
	
@frappe.whitelist(allow_guest=True)
def download_print_at_home_pdf(name):
	doctype="Gutschein"
	format='Standard'
	doc=None
	no_letterhead=0
	html = frappe.get_print(doctype, name, format, doc=doc, no_letterhead=no_letterhead)
	frappe.local.response.filename = "{name}.pdf".format(name=name.replace(" ", "-").replace("/", "-"))
	frappe.local.response.filecontent = get_pdf(html)
	frappe.local.response.type = "download"
	
@frappe.whitelist(allow_guest=True)
def create_gutschein(type='Klassisch', amount=0, valid_date='', barcode='', salutation='', company='', first_name='', last_name='', street='', plz='', city='', email='', phone='', text_from='', text_to='', inscription='', informationen='', motiv=''):
	barcode = barcode.replace("&lt;", "<")
	barcode = barcode.replace("&gt;", ">")
	barcode = barcode.replace("<svg-x", "<svg")
	barcode = barcode.replace("<g-x", "<g")
	barcode = barcode.replace("<rect-x>", "</rect>")
	barcode = barcode.replace("<rect-x ", "<rect ")
	barcode = barcode.replace("svg-x>", "svg>")
	barcode = barcode.replace("g-x>", "g>")
	barcode = barcode.replace("x-y=", "y=")
	barcode = barcode.replace("x-x=", "x=")
	barcode = barcode.replace("</rect-x>", "")
	barcode = barcode.replace('<text style="font: 20px monospace;">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[6] + ' text-anchor="middle">')
	barcode = barcode.replace('<text style="font: 20px monospace;" ' + barcode.split("!*!")[6] + ' text-anchor="middle">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[5] + ' text-anchor="middle">', 5)
	barcode = barcode.replace('<text style="font: 20px monospace;" ' + barcode.split("!*!")[5] + ' text-anchor="middle">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[4] + ' text-anchor="middle">', 4)
	barcode = barcode.replace('<text style="font: 20px monospace;" ' + barcode.split("!*!")[4] + ' text-anchor="middle">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[3] + ' text-anchor="middle">', 3)
	barcode = barcode.replace('<text style="font: 20px monospace;" ' + barcode.split("!*!")[3] + ' text-anchor="middle">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[2] + ' text-anchor="middle">', 2)
	barcode = barcode.replace('<text style="font: 20px monospace;" ' + barcode.split("!*!")[2] + ' text-anchor="middle">', '<text style="font: 20px monospace;" ' + barcode.split("!*!")[1] + ' text-anchor="start">', 1)
	barcode = barcode.split("!*!")[0]
	
	gutschein = frappe.get_doc({
		"doctype": "Gutschein",
		"type": type,
		"amount": amount,
		"selling_date": nowdate(),
		"valid_date": add_years(nowdate(), 1),
		"barcode": barcode,
		"salutation": salutation,
		"company": company,
		"first_name": first_name,
		"last_name": last_name,
		"street": street,
		"plz": plz,
		"city": city,
		"email": email,
		"phone": phone,
		"text_from": text_from,
		"text_to": text_to,
		"inscription": inscription,
		"informationen": informationen,
		"motiv": motiv
	})
	gutschein.insert(ignore_permissions=True)
	
	return gutschein.name
	
@frappe.whitelist(allow_guest=True)
def count_print_at_home():
	return frappe.db.sql("""SELECT COUNT(`name`) FROM `tabGutschein` WHERE `type` = 'print@home'""", as_list=True)[0][0]