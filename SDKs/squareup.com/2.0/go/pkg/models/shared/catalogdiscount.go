package shared

type CatalogDiscount struct {
	AmountMoney    *Money  `json:"amount_money,omitempty"`
	DiscountType   *string `json:"discount_type,omitempty"`
	LabelColor     *string `json:"label_color,omitempty"`
	ModifyTaxBasis *string `json:"modify_tax_basis,omitempty"`
	Name           *string `json:"name,omitempty"`
	Percentage     *string `json:"percentage,omitempty"`
	PinRequired    *bool   `json:"pin_required,omitempty"`
}
