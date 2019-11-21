from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
	{
		"label": _("Voucher"),
		"icon": "fa fa-bookmark",
		"items": [
			{
			   "type": "doctype",
			   "name": "Gutschein",
			   "label": _("Voucher"),
			   "description": _("Voucher")
		   }
		]
	}
]