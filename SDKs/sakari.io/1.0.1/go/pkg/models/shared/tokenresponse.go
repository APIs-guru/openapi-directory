package shared

type TokenResponse struct {
	AccessToken *string `json:"access_token"`
	TokenType   *string `json:"token_type"`
}
