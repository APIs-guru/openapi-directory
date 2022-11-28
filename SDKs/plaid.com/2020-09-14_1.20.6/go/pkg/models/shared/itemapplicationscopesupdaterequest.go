package shared

// ItemApplicationScopesUpdateRequest
// ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
type ItemApplicationScopesUpdateRequest struct {
	AccessToken   string  `json:"access_token"`
	ApplicationID string  `json:"application_id"`
	ClientID      *string `json:"client_id,omitempty"`
	Scopes        Scopes  `json:"scopes"`
	Secret        *string `json:"secret,omitempty"`
}
