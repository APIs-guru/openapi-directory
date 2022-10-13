package shared

type LoyaltyReward struct {
	CreatedAt        *string `json:"created_at"`
	ID               *string `json:"id"`
	LoyaltyAccountID string  `json:"loyalty_account_id"`
	OrderID          *string `json:"order_id"`
	Points           *int64  `json:"points"`
	RedeemedAt       *string `json:"redeemed_at"`
	RewardTierID     string  `json:"reward_tier_id"`
	Status           *string `json:"status"`
	UpdatedAt        *string `json:"updated_at"`
}
