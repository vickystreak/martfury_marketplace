// Copyright (c) 2024, vignesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orders', {
	// refresh: function(frm) {

	// }
	after_save: function(frm) {
	
		console.log("after submit trigerred");
		frappe.msgprint('After Submit Event Triggered');
        // Call a server-side function to update the Sales doctype
        frappe.call({
            method: 'martfury.martfury.doctype.sales.sales.update_sales',
            args: {
                order_name: frm.doc.name
            },
            callback: function(response) {
                // Handle callback if needed
                frappe.msgprint('Sales data updated successfully.');
            }
        });
		console.log(
			'triggerd'
		);
    },
	quantity : function(frm){
		let amount = frm.doc.amount;
		let quantity = frm.doc.quantity;
		let total = amount * quantity;
		
		frm.set_value({
			total_amount:total
		})
	},

	
	
});

