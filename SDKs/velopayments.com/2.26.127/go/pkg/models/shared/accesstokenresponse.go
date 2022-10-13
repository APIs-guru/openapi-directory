package shared

type AccessTokenResponse struct {
	AccessToken  *string   `json:"access_token"`
	EntityIds    []string  `json:"entityIds"`
	ExpiresIn    *int64    `json:"expires_in"`
	RefreshToken *string   `json:"refresh_token"`
	Scope        *string   `json:"scope"`
	TokenType    *string   `json:"token_type"`
	UserInfo     *UserInfo `json:"user_info"`
}
