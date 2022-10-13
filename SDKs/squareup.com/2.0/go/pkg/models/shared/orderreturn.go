package shared

type OrderReturn struct {
	ReturnAmounts        *OrderMoneyAmounts         `json:"return_amounts"`
	ReturnDiscounts      []OrderReturnDiscount      `json:"return_discounts"`
	ReturnLineItems      []OrderReturnLineItem      `json:"return_line_items"`
	ReturnServiceCharges []OrderReturnServiceCharge `json:"return_service_charges"`
	ReturnTaxes          []OrderReturnTax           `json:"return_taxes"`
	RoundingAdjustment   *OrderRoundingAdjustment   `json:"rounding_adjustment"`
	SourceOrderID        *string                    `json:"source_order_id"`
	UID                  *string                    `json:"uid"`
}
