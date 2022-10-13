package shared

type SubscriptionData struct {
	ComputeQuota      *int32  `json:"computeQuota"`
	ComputeUsage      *int32  `json:"computeUsage"`
	SubscriptionID    *string `json:"subscriptionId"`
	SubscriptionState *string `json:"subscriptionState"`
}
