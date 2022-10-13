package shared

type Order struct {
	ClosedAt                *string                  `json:"closed_at"`
	CreatedAt               *string                  `json:"created_at"`
	CustomerID              *string                  `json:"customer_id"`
	Discounts               []OrderLineItemDiscount  `json:"discounts"`
	Fulfillments            []OrderFulfillment       `json:"fulfillments"`
	ID                      *string                  `json:"id"`
	LineItems               []OrderLineItem          `json:"line_items"`
	LocationID              string                   `json:"location_id"`
	Metadata                map[string]string        `json:"metadata"`
	NetAmounts              *OrderMoneyAmounts       `json:"net_amounts"`
	PricingOptions          *OrderPricingOptions     `json:"pricing_options"`
	ReferenceID             *string                  `json:"reference_id"`
	Refunds                 []Refund                 `json:"refunds"`
	ReturnAmounts           *OrderMoneyAmounts       `json:"return_amounts"`
	Returns                 []OrderReturn            `json:"returns"`
	Rewards                 []OrderReward            `json:"rewards"`
	RoundingAdjustment      *OrderRoundingAdjustment `json:"rounding_adjustment"`
	ServiceCharges          []OrderServiceCharge     `json:"service_charges"`
	Source                  *OrderSource             `json:"source"`
	State                   *string                  `json:"state"`
	Taxes                   []OrderLineItemTax       `json:"taxes"`
	Tenders                 []Tender                 `json:"tenders"`
	TotalDiscountMoney      *Money                   `json:"total_discount_money"`
	TotalMoney              *Money                   `json:"total_money"`
	TotalServiceChargeMoney *Money                   `json:"total_service_charge_money"`
	TotalTaxMoney           *Money                   `json:"total_tax_money"`
	TotalTipMoney           *Money                   `json:"total_tip_money"`
	UpdatedAt               *string                  `json:"updated_at"`
	Version                 *int64                   `json:"version"`
}
