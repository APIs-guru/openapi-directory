package shared

type Order struct {
	ClosedAt                *string                  `json:"closed_at,omitempty"`
	CreatedAt               *string                  `json:"created_at,omitempty"`
	CustomerID              *string                  `json:"customer_id,omitempty"`
	Discounts               []OrderLineItemDiscount  `json:"discounts,omitempty"`
	Fulfillments            []OrderFulfillment       `json:"fulfillments,omitempty"`
	ID                      *string                  `json:"id,omitempty"`
	LineItems               []OrderLineItem          `json:"line_items,omitempty"`
	LocationID              string                   `json:"location_id"`
	Metadata                map[string]string        `json:"metadata,omitempty"`
	NetAmounts              *OrderMoneyAmounts       `json:"net_amounts,omitempty"`
	PricingOptions          *OrderPricingOptions     `json:"pricing_options,omitempty"`
	ReferenceID             *string                  `json:"reference_id,omitempty"`
	Refunds                 []Refund                 `json:"refunds,omitempty"`
	ReturnAmounts           *OrderMoneyAmounts       `json:"return_amounts,omitempty"`
	Returns                 []OrderReturn            `json:"returns,omitempty"`
	Rewards                 []OrderReward            `json:"rewards,omitempty"`
	RoundingAdjustment      *OrderRoundingAdjustment `json:"rounding_adjustment,omitempty"`
	ServiceCharges          []OrderServiceCharge     `json:"service_charges,omitempty"`
	Source                  *OrderSource             `json:"source,omitempty"`
	State                   *string                  `json:"state,omitempty"`
	Taxes                   []OrderLineItemTax       `json:"taxes,omitempty"`
	Tenders                 []Tender                 `json:"tenders,omitempty"`
	TotalDiscountMoney      *Money                   `json:"total_discount_money,omitempty"`
	TotalMoney              *Money                   `json:"total_money,omitempty"`
	TotalServiceChargeMoney *Money                   `json:"total_service_charge_money,omitempty"`
	TotalTaxMoney           *Money                   `json:"total_tax_money,omitempty"`
	TotalTipMoney           *Money                   `json:"total_tip_money,omitempty"`
	UpdatedAt               *string                  `json:"updated_at,omitempty"`
	Version                 *int64                   `json:"version,omitempty"`
}
