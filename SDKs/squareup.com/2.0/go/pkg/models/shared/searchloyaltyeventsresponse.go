package shared

type SearchLoyaltyEventsResponse struct {
	Cursor *string        `json:"cursor"`
	Errors []Error        `json:"errors"`
	Events []LoyaltyEvent `json:"events"`
}
