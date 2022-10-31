package shared



type SubscriptionData struct {
    ComputeQuota *int32 `json:"computeQuota,omitempty"`
    ComputeUsage *int32 `json:"computeUsage,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    SubscriptionState *string `json:"subscriptionState,omitempty"`
    
}

