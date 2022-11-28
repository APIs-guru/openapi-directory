package shared

// ItemGetRequest
// ItemGetRequest defines the request schema for `/item/get`
type ItemGetRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
