package shared

type LoyaltyEvent struct {
	AccumulatePoints *LoyaltyEventAccumulatePoints `json:"accumulate_points"`
	AdjustPoints     *LoyaltyEventAdjustPoints     `json:"adjust_points"`
	CreateReward     *LoyaltyEventCreateReward     `json:"create_reward"`
	CreatedAt        string                        `json:"created_at"`
	DeleteReward     *LoyaltyEventDeleteReward     `json:"delete_reward"`
	ExpirePoints     *LoyaltyEventExpirePoints     `json:"expire_points"`
	ID               string                        `json:"id"`
	LocationID       *string                       `json:"location_id"`
	LoyaltyAccountID string                        `json:"loyalty_account_id"`
	OtherEvent       *LoyaltyEventOther            `json:"other_event"`
	RedeemReward     *LoyaltyEventRedeemReward     `json:"redeem_reward"`
	Source           string                        `json:"source"`
	Type             string                        `json:"type"`
}
