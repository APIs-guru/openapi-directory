package shared

type ListSubscriptionEventsResponse struct {
	Cursor             *string             `json:"cursor"`
	Errors             []Error             `json:"errors"`
	SubscriptionEvents []SubscriptionEvent `json:"subscription_events"`
}
