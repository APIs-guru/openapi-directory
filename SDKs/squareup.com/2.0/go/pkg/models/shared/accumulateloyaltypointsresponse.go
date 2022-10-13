package shared

type AccumulateLoyaltyPointsResponse struct {
	Errors []Error       `json:"errors"`
	Event  *LoyaltyEvent `json:"event"`
}
