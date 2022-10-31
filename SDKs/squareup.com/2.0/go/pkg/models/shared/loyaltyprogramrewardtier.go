package shared

type LoyaltyProgramRewardTier struct {
	CreatedAt            string                         `json:"created_at"`
	Definition           LoyaltyProgramRewardDefinition `json:"definition"`
	ID                   string                         `json:"id"`
	Name                 string                         `json:"name"`
	Points               int64                          `json:"points"`
	PricingRuleReference *CatalogObjectReference        `json:"pricing_rule_reference,omitempty"`
}
