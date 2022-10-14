package shared

type SearchLoyaltyEventsResponse struct {
	Cursor *string        `json:"cursor,omitempty"`
	Errors []Error        `json:"errors,omitempty"`
	Events []LoyaltyEvent `json:"events,omitempty"`
}
