package shared



type ObtainTokenRequest struct {
    ClientID string `json:"client_id"`
    ClientSecret string `json:"client_secret"`
    Code *string `json:"code,omitempty"`
    GrantType string `json:"grant_type"`
    MigrationToken *string `json:"migration_token,omitempty"`
    RedirectURI *string `json:"redirect_uri,omitempty"`
    RefreshToken *string `json:"refresh_token,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    ShortLived *bool `json:"short_lived,omitempty"`
    
}

