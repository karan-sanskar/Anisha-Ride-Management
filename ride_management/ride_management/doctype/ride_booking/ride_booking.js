// Copyright (c) 2024, ranisha@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        var total = 0
        $.each(frm.doc.services, function(key, value) {
            total += value.amount
        });

        frm.doc.total_amount = (frm.doc.price_per_km * frm.doc.estimated_km)  + total

	},
});
