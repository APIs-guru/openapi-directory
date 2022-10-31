package shared



type OrderLineItemDiscount struct {
    AmountMoney *Money `json:"amount_money,omitempty"`
    AppliedMoney *Money `json:"applied_money,omitempty"`
    CatalogObjectID *string `json:"catalog_object_id,omitempty"`
    CatalogVersion *int64 `json:"catalog_version,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Percentage *string `json:"percentage,omitempty"`
    PricingRuleID *string `json:"pricing_rule_id,omitempty"`
    RewardIds []string `json:"reward_ids,omitempty"`
    Scope *string `json:"scope,omitempty"`
    Type *string `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

