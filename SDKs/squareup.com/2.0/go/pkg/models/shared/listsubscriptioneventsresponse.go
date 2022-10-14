package shared

type ListSubscriptionEventsResponse struct {
	Cursor             *string             `json:"cursor,omitempty"`
	Errors             []Error             `json:"errors,omitempty"`
	SubscriptionEvents []SubscriptionEvent `json:"subscription_events,omitempty"`
}
