package shared

type SearchSubscriptionsResponse struct {
	Cursor        *string        `json:"cursor"`
	Errors        []Error        `json:"errors"`
	Subscriptions []Subscription `json:"subscriptions"`
}
