package shared

type AuthGetRequest struct {
	AccessToken string                 `json:"access_token"`
	ClientID    *string                `json:"client_id,omitempty"`
	Options     *AuthGetRequestOptions `json:"options,omitempty"`
	Secret      *string                `json:"secret,omitempty"`
}
