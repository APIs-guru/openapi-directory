package shared

type ItemPublicTokenExchangeRequest struct {
	ClientID    *string `json:"client_id,omitempty"`
	PublicToken string  `json:"public_token"`
	Secret      *string `json:"secret,omitempty"`
}
