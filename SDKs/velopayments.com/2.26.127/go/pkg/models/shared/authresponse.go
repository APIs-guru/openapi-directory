package shared

type AuthResponse struct {
	AccessToken  string   `json:"access_token"`
	EntityIds    []string `json:"entityIds"`
	ExpiresIn    *float64 `json:"expires_in"`
	RefreshToken *string  `json:"refresh_token"`
	Scope        *string  `json:"scope"`
	TokenType    string   `json:"token_type"`
}
