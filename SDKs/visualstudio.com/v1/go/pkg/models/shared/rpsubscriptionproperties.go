package shared

type RpSubscriptionProperties struct {
	AccountOwner         *SubscriptionAccountOwner         `json:"accountOwner,omitempty"`
	AdditionalProperties *SubscriptionAdditionalProperties `json:"additionalProperties,omitempty"`
	LocationPlacementID  *string                           `json:"locationPlacementId,omitempty"`
	ManagedByTenants     []StringStringKeyValuePair        `json:"managedByTenants,omitempty"`
	QuotaID              *string                           `json:"quotaId,omitempty"`
	RegisteredFeatures   []StringStringKeyValuePair        `json:"registeredFeatures,omitempty"`
	TenantID             *string                           `json:"tenantId,omitempty"`
}
