package shared

type ObtainTokenResponse struct {
	AccessToken    *string `json:"access_token"`
	ExpiresAt      *string `json:"expires_at"`
	IDToken        *string `json:"id_token"`
	MerchantID     *string `json:"merchant_id"`
	PlanID         *string `json:"plan_id"`
	RefreshToken   *string `json:"refresh_token"`
	ShortLived     *bool   `json:"short_lived"`
	SubscriptionID *string `json:"subscription_id"`
	TokenType      *string `json:"token_type"`
}
