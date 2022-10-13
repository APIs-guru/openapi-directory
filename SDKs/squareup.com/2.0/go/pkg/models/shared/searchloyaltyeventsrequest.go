package shared

type SearchLoyaltyEventsRequest struct {
	Cursor *string            `json:"cursor"`
	Limit  *int64             `json:"limit"`
	Query  *LoyaltyEventQuery `json:"query"`
}
