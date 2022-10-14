package shared

type RenewTokenResponse struct {
	AccessToken    *string `json:"access_token,omitempty"`
	ExpiresAt      *string `json:"expires_at,omitempty"`
	MerchantID     *string `json:"merchant_id,omitempty"`
	PlanID         *string `json:"plan_id,omitempty"`
	SubscriptionID *string `json:"subscription_id,omitempty"`
	TokenType      *string `json:"token_type,omitempty"`
}
