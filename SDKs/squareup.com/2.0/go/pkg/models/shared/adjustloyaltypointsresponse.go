package shared

type AdjustLoyaltyPointsResponse struct {
	Errors []Error       `json:"errors,omitempty"`
	Event  *LoyaltyEvent `json:"event,omitempty"`
}
