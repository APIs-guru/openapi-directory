package shared

// ItemAccessTokenInvalidateRequest
// ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
type ItemAccessTokenInvalidateRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
