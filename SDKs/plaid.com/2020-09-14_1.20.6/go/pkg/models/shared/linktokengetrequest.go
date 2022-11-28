package shared

// LinkTokenGetRequest
// LinkTokenGetRequest defines the request schema for `/link/token/get`
type LinkTokenGetRequest struct {
	ClientID  *string `json:"client_id,omitempty"`
	LinkToken string  `json:"link_token"`
	Secret    *string `json:"secret,omitempty"`
}
