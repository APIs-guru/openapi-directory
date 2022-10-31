package shared



type LoyaltyEvent struct {
    AccumulatePoints *LoyaltyEventAccumulatePoints `json:"accumulate_points,omitempty"`
    AdjustPoints *LoyaltyEventAdjustPoints `json:"adjust_points,omitempty"`
    CreateReward *LoyaltyEventCreateReward `json:"create_reward,omitempty"`
    CreatedAt string `json:"created_at"`
    DeleteReward *LoyaltyEventDeleteReward `json:"delete_reward,omitempty"`
    ExpirePoints *LoyaltyEventExpirePoints `json:"expire_points,omitempty"`
    ID string `json:"id"`
    LocationID *string `json:"location_id,omitempty"`
    LoyaltyAccountID string `json:"loyalty_account_id"`
    OtherEvent *LoyaltyEventOther `json:"other_event,omitempty"`
    RedeemReward *LoyaltyEventRedeemReward `json:"redeem_reward,omitempty"`
    Source string `json:"source"`
    Type string `json:"type"`
    
}

