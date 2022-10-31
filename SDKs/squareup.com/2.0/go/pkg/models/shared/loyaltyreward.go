package shared

type LoyaltyReward struct {
	CreatedAt        *string `json:"created_at,omitempty"`
	ID               *string `json:"id,omitempty"`
	LoyaltyAccountID string  `json:"loyalty_account_id"`
	OrderID          *string `json:"order_id,omitempty"`
	Points           *int64  `json:"points,omitempty"`
	RedeemedAt       *string `json:"redeemed_at,omitempty"`
	RewardTierID     string  `json:"reward_tier_id"`
	Status           *string `json:"status,omitempty"`
	UpdatedAt        *string `json:"updated_at,omitempty"`
}
