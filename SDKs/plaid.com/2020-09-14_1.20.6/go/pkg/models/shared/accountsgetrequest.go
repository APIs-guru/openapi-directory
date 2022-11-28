package shared

// AccountsGetRequest
// AccountsGetRequest defines the request schema for `/accounts/get`
type AccountsGetRequest struct {
	AccessToken string                     `json:"access_token"`
	ClientID    *string                    `json:"client_id,omitempty"`
	Options     *AccountsGetRequestOptions `json:"options,omitempty"`
	Secret      *string                    `json:"secret,omitempty"`
}
