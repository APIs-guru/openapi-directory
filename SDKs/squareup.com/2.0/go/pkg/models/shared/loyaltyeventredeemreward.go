package shared

type LoyaltyEventRedeemReward struct {
	LoyaltyProgramID string  `json:"loyalty_program_id"`
	OrderID          *string `json:"order_id,omitempty"`
	RewardID         *string `json:"reward_id,omitempty"`
}
