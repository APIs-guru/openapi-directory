package shared

type RedeemLoyaltyRewardResponse struct {
	Errors []Error       `json:"errors"`
	Event  *LoyaltyEvent `json:"event"`
}
