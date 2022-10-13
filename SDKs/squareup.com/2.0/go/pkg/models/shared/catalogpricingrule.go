package shared

type CatalogPricingRule struct {
	ApplyProductsID     *string  `json:"apply_products_id"`
	CustomerGroupIdsAny []string `json:"customer_group_ids_any"`
	DiscountID          *string  `json:"discount_id"`
	ExcludeProductsID   *string  `json:"exclude_products_id"`
	ExcludeStrategy     *string  `json:"exclude_strategy"`
	MatchProductsID     *string  `json:"match_products_id"`
	Name                *string  `json:"name"`
	TimePeriodIds       []string `json:"time_period_ids"`
	ValidFromDate       *string  `json:"valid_from_date"`
	ValidFromLocalTime  *string  `json:"valid_from_local_time"`
	ValidUntilDate      *string  `json:"valid_until_date"`
	ValidUntilLocalTime *string  `json:"valid_until_local_time"`
}
