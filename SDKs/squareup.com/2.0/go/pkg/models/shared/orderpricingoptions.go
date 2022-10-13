package shared

type OrderPricingOptions struct {
	AutoApplyDiscounts *bool `json:"auto_apply_discounts"`
	AutoApplyTaxes     *bool `json:"auto_apply_taxes"`
}
