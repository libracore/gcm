# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import frappe
from frappe.utils.pdf import get_pdf
from frappe.utils.data import nowdate, add_years

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