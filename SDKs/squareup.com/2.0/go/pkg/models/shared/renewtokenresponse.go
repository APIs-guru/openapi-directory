package shared

type RenewTokenResponse struct {
	AccessToken    *string `json:"access_token"`
	ExpiresAt      *string `json:"expires_at"`
	MerchantID     *string `json:"merchant_id"`
	PlanID         *string `json:"plan_id"`
	SubscriptionID *string `json:"subscription_id"`
	TokenType      *string `json:"token_type"`
}
