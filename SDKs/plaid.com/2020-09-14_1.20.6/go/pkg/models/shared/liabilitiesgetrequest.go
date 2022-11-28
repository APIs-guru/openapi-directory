package shared

// LiabilitiesGetRequest
// LiabilitiesGetRequest defines the request schema for `/liabilities/get`
type LiabilitiesGetRequest struct {
	AccessToken string                        `json:"access_token"`
	ClientID    *string                       `json:"client_id,omitempty"`
	Options     *LiabilitiesGetRequestOptions `json:"options,omitempty"`
	Secret      *string                       `json:"secret,omitempty"`
}
