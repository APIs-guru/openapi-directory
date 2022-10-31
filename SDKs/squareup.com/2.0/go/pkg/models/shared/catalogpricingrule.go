package shared



type CatalogPricingRule struct {
    ApplyProductsID *string `json:"apply_products_id,omitempty"`
    CustomerGroupIdsAny []string `json:"customer_group_ids_any,omitempty"`
    DiscountID *string `json:"discount_id,omitempty"`
    ExcludeProductsID *string `json:"exclude_products_id,omitempty"`
    ExcludeStrategy *string `json:"exclude_strategy,omitempty"`
    MatchProductsID *string `json:"match_products_id,omitempty"`
    Name *string `json:"name,omitempty"`
    TimePeriodIds []string `json:"time_period_ids,omitempty"`
    ValidFromDate *string `json:"valid_from_date,omitempty"`
    ValidFromLocalTime *string `json:"valid_from_local_time,omitempty"`
    ValidUntilDate *string `json:"valid_until_date,omitempty"`
    ValidUntilLocalTime *string `json:"valid_until_local_time,omitempty"`
    
}

