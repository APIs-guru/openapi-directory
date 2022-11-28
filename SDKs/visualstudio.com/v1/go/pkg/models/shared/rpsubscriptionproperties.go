package shared

type RpSubscriptionProperties struct {
	AccountOwner         *SubscriptionAccountOwner         `json:"accountOwner,omitempty"`
	AdditionalProperties *SubscriptionAdditionalProperties `json:"additionalProperties,omitempty"`
	LocationPlacementID  *string                           `json:"locationPlacementId,omitempty"`
	QuotaID              *string                           `json:"quotaId,omitempty"`
	TenantID             *string                           `json:"tenantId,omitempty"`
}
