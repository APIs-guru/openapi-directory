package shared

type GenerateAccessTokenResponse struct {
	AccessToken  *string `json:"access_token"`
	ExpiresIn    *string `json:"expires_in"`
	RefreshToken *string `json:"refresh_token"`
	TokenType    *string `json:"token_type"`
}
