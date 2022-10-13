package shared

type RpSubscriptionProperties struct {
	AccountOwner         *SubscriptionAccountOwner         `json:"accountOwner"`
	AdditionalProperties *SubscriptionAdditionalProperties `json:"additionalProperties"`
	LocationPlacementID  *string                           `json:"locationPlacementId"`
	ManagedByTenants     []StringStringKeyValuePair        `json:"managedByTenants"`
	QuotaID              *string                           `json:"quotaId"`
	RegisteredFeatures   []StringStringKeyValuePair        `json:"registeredFeatures"`
	TenantID             *string                           `json:"tenantId"`
}
