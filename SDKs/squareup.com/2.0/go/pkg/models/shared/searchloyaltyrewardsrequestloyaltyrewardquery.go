package shared

type SearchLoyaltyRewardsRequestLoyaltyRewardQuery struct {
	LoyaltyAccountID string  `json:"loyalty_account_id"`
	Status           *string `json:"status,omitempty"`
}
