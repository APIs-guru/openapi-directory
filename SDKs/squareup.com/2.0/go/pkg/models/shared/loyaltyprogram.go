package shared

type LoyaltyProgram struct {
	AccrualRules     []LoyaltyProgramAccrualRule     `json:"accrual_rules"`
	CreatedAt        string                          `json:"created_at"`
	ExpirationPolicy *LoyaltyProgramExpirationPolicy `json:"expiration_policy"`
	ID               string                          `json:"id"`
	LocationIds      []string                        `json:"location_ids"`
	RewardTiers      []LoyaltyProgramRewardTier      `json:"reward_tiers"`
	Status           string                          `json:"status"`
	Terminology      LoyaltyProgramTerminology       `json:"terminology"`
	UpdatedAt        string                          `json:"updated_at"`
}
