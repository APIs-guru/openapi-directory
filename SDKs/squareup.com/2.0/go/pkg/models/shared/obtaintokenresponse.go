package shared

type ObtainTokenResponse struct {
	AccessToken    *string `json:"access_token,omitempty"`
	ExpiresAt      *string `json:"expires_at,omitempty"`
	IDToken        *string `json:"id_token,omitempty"`
	MerchantID     *string `json:"merchant_id,omitempty"`
	PlanID         *string `json:"plan_id,omitempty"`
	RefreshToken   *string `json:"refresh_token,omitempty"`
	ShortLived     *bool   `json:"short_lived,omitempty"`
	SubscriptionID *string `json:"subscription_id,omitempty"`
	TokenType      *string `json:"token_type,omitempty"`
}
