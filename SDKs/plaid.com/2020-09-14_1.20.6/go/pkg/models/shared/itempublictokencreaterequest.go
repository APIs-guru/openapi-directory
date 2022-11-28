package shared

// ItemPublicTokenCreateRequest
// ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
type ItemPublicTokenCreateRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
