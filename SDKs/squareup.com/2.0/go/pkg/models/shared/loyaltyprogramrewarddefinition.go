package shared

type LoyaltyProgramRewardDefinition struct {
	CatalogObjectIds   []string `json:"catalog_object_ids,omitempty"`
	DiscountType       string   `json:"discount_type"`
	FixedDiscountMoney *Money   `json:"fixed_discount_money,omitempty"`
	MaxDiscountMoney   *Money   `json:"max_discount_money,omitempty"`
	PercentageDiscount *string  `json:"percentage_discount,omitempty"`
	Scope              string   `json:"scope"`
}
