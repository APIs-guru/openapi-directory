package shared

type OrderLineItemPricingBlocklists struct {
	BlockedDiscounts []OrderLineItemPricingBlocklistsBlockedDiscount `json:"blocked_discounts"`
	BlockedTaxes     []OrderLineItemPricingBlocklistsBlockedTax      `json:"blocked_taxes"`
}
