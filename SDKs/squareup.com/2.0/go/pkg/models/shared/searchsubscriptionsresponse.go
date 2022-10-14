package shared

type SearchSubscriptionsResponse struct {
	Cursor        *string        `json:"cursor,omitempty"`
	Errors        []Error        `json:"errors,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
