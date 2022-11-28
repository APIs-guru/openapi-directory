package shared

// ItemRemoveRequest
// ItemRemoveRequest defines the request schema for `/item/remove`
type ItemRemoveRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
