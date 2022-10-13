package shared

type RevokeTokenRequest struct {
	AccessToken           *string `json:"access_token"`
	ClientID              *string `json:"client_id"`
	MerchantID            *string `json:"merchant_id"`
	RevokeOnlyAccessToken *bool   `json:"revoke_only_access_token"`
}
