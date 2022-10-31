package shared

type TokenResponse struct {
	AccessToken *string `json:"access_token,omitempty"`
	TokenType   *string `json:"token_type,omitempty"`
}
