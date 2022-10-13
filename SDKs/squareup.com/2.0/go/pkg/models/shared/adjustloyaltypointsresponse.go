package shared

type AdjustLoyaltyPointsResponse struct {
	Errors []Error       `json:"errors"`
	Event  *LoyaltyEvent `json:"event"`
}
