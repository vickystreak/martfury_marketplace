# Copyright (c) 2024, vignesh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Sales(Document):
    pass


@frappe.whitelist()
def update_sales():
    # Query Orders doctype to get the total orders, revenue, and earnings
    orders = frappe.get_all(
        "Orders", filters={}, fields=["name", "product", "quantity"]
    )
    total_orders = len(orders)
    total_revenue = 0
    total_earnings = 0

    for order in orders:
        
        product = frappe.get_doc("Products", order.product)
        product_mrp_rate = product.mrp_rate
        product_rate = product.rate

        # Calculate total price for the order based on MRP rate
        total_price = order.quantity * product_mrp_rate
     
        total_revenue += total_price
        print('Total Revenue',total_revenue)
        # Calculate earnings based on rate and MRP rate
        earnings_per_order = (product_mrp_rate - product_rate) * order.quantity
        total_earnings += earnings_per_order

    # Check if a Sales document already exists
    existing_sales = frappe.get_all("Sales", filters={}, fields=["name"])
    if existing_sales:
        # If a Sales document exists, update its fields
        sales = frappe.get_doc("Sales", existing_sales[0].name)
        sales.total_orders = total_orders
        sales.amount = total_revenue
        sales.earnings = total_earnings
        # Update other fields as needed
        # sales.taxes = 
        sales.save()
    else:
        # If no Sales document exists, create a new one
        sales = frappe.new_doc("Sales")
        sales.total_orders = total_orders
        sales.amount = total_revenue
        sales.earnings = total_earnings
        # Set other fields as needed
        # sales.taxes = 
        sales.insert()

# Run the update_sales function
update_sales()



