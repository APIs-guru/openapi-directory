package shared

type IdentityGetRequest struct {
	AccessToken string                     `json:"access_token"`
	ClientID    *string                    `json:"client_id"`
	Options     *IdentityGetRequestOptions `json:"options"`
	Secret      *string                    `json:"secret"`
}
