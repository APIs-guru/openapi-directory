package shared

type OrderLineItemDiscount struct {
	AmountMoney     *Money            `json:"amount_money"`
	AppliedMoney    *Money            `json:"applied_money"`
	CatalogObjectID *string           `json:"catalog_object_id"`
	CatalogVersion  *int64            `json:"catalog_version"`
	Metadata        map[string]string `json:"metadata"`
	Name            *string           `json:"name"`
	Percentage      *string           `json:"percentage"`
	PricingRuleID   *string           `json:"pricing_rule_id"`
	RewardIds       []string          `json:"reward_ids"`
	Scope           *string           `json:"scope"`
	Type            *string           `json:"type"`
	UID             *string           `json:"uid"`
}
