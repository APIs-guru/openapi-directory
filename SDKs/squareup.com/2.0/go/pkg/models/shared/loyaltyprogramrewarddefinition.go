package shared

type LoyaltyProgramRewardDefinition struct {
	CatalogObjectIds   []string `json:"catalog_object_ids"`
	DiscountType       string   `json:"discount_type"`
	FixedDiscountMoney *Money   `json:"fixed_discount_money"`
	MaxDiscountMoney   *Money   `json:"max_discount_money"`
	PercentageDiscount *string  `json:"percentage_discount"`
	Scope              string   `json:"scope"`
}
