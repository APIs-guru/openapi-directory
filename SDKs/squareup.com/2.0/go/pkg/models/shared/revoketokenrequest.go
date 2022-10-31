package shared



type RevokeTokenRequest struct {
    AccessToken *string `json:"access_token,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    RevokeOnlyAccessToken *bool `json:"revoke_only_access_token,omitempty"`
    
}

