package shared



type SubscriptionAdditionalProperties struct {
    BillingProperties *BillingProperties `json:"billingProperties,omitempty"`
    ResourceProviderProperties *string `json:"resourceProviderProperties,omitempty"`
    
}

