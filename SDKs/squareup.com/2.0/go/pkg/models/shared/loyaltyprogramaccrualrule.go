package shared



type LoyaltyProgramAccrualRule struct {
    AccrualType string `json:"accrual_type"`
    CatalogObjectID *string `json:"catalog_object_id,omitempty"`
    ExcludedCategoryIds []string `json:"excluded_category_ids,omitempty"`
    ExcludedItemVariationIds []string `json:"excluded_item_variation_ids,omitempty"`
    Points *int64 `json:"points,omitempty"`
    SpendAmountMoney *Money `json:"spend_amount_money,omitempty"`
    VisitMinimumAmountMoney *Money `json:"visit_minimum_amount_money,omitempty"`
    
}

