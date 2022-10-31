package shared

type OrderReturn struct {
	ReturnAmounts        *OrderMoneyAmounts         `json:"return_amounts,omitempty"`
	ReturnDiscounts      []OrderReturnDiscount      `json:"return_discounts,omitempty"`
	ReturnLineItems      []OrderReturnLineItem      `json:"return_line_items,omitempty"`
	ReturnServiceCharges []OrderReturnServiceCharge `json:"return_service_charges,omitempty"`
	ReturnTaxes          []OrderReturnTax           `json:"return_taxes,omitempty"`
	RoundingAdjustment   *OrderRoundingAdjustment   `json:"rounding_adjustment,omitempty"`
	SourceOrderID        *string                    `json:"source_order_id,omitempty"`
	UID                  *string                    `json:"uid,omitempty"`
}
