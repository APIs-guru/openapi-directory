package shared

type LoyaltyProgramAccrualRule struct {
	AccrualType              string   `json:"accrual_type"`
	CatalogObjectID          *string  `json:"catalog_object_id"`
	ExcludedCategoryIds      []string `json:"excluded_category_ids"`
	ExcludedItemVariationIds []string `json:"excluded_item_variation_ids"`
	Points                   *int64   `json:"points"`
	SpendAmountMoney         *Money   `json:"spend_amount_money"`
	VisitMinimumAmountMoney  *Money   `json:"visit_minimum_amount_money"`
}
