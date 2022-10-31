package shared

type OrderLineItemPricingBlocklists struct {
	BlockedDiscounts []OrderLineItemPricingBlocklistsBlockedDiscount `json:"blocked_discounts,omitempty"`
	BlockedTaxes     []OrderLineItemPricingBlocklistsBlockedTax      `json:"blocked_taxes,omitempty"`
}
