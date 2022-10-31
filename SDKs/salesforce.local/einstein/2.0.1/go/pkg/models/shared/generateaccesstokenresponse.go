package shared



type GenerateAccessTokenResponse struct {
    AccessToken *string `json:"access_token,omitempty"`
    ExpiresIn *string `json:"expires_in,omitempty"`
    RefreshToken *string `json:"refresh_token,omitempty"`
    TokenType *string `json:"token_type,omitempty"`
    
}

