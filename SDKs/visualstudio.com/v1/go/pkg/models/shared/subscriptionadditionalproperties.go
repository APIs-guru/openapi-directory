package shared

type SubscriptionAdditionalProperties struct {
	BillingProperties          *BillingProperties `json:"billingProperties"`
	ResourceProviderProperties *string            `json:"resourceProviderProperties"`
}
