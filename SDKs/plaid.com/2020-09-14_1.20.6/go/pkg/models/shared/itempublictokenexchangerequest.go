package shared

// ItemPublicTokenExchangeRequest
// ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
type ItemPublicTokenExchangeRequest struct {
	ClientID    *string `json:"client_id,omitempty"`
	PublicToken string  `json:"public_token"`
	Secret      *string `json:"secret,omitempty"`
}
