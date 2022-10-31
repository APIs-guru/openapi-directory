package shared



type AccessTokenResponse struct {
    AccessToken *string `json:"access_token,omitempty"`
    EntityIds []string `json:"entityIds,omitempty"`
    ExpiresIn *int64 `json:"expires_in,omitempty"`
    RefreshToken *string `json:"refresh_token,omitempty"`
    Scope *string `json:"scope,omitempty"`
    TokenType *string `json:"token_type,omitempty"`
    UserInfo *UserInfo `json:"user_info,omitempty"`
    
}

