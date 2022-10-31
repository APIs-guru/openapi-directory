package shared



type AuthResponse struct {
    AccessToken string `json:"access_token"`
    EntityIds []string `json:"entityIds,omitempty"`
    ExpiresIn *float64 `json:"expires_in,omitempty"`
    RefreshToken *string `json:"refresh_token,omitempty"`
    Scope *string `json:"scope,omitempty"`
    TokenType string `json:"token_type"`
    
}

