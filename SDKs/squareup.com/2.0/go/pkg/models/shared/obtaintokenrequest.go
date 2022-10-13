package shared

type ObtainTokenRequest struct {
	ClientID       string   `json:"client_id"`
	ClientSecret   string   `json:"client_secret"`
	Code           *string  `json:"code"`
	GrantType      string   `json:"grant_type"`
	MigrationToken *string  `json:"migration_token"`
	RedirectURI    *string  `json:"redirect_uri"`
	RefreshToken   *string  `json:"refresh_token"`
	Scopes         []string `json:"scopes"`
	ShortLived     *bool    `json:"short_lived"`
}
