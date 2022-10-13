package shared

type CatalogDiscount struct {
	AmountMoney    *Money  `json:"amount_money"`
	DiscountType   *string `json:"discount_type"`
	LabelColor     *string `json:"label_color"`
	ModifyTaxBasis *string `json:"modify_tax_basis"`
	Name           *string `json:"name"`
	Percentage     *string `json:"percentage"`
	PinRequired    *bool   `json:"pin_required"`
}
