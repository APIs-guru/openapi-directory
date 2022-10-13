package shared

type AuthGetRequest struct {
	AccessToken string                 `json:"access_token"`
	ClientID    *string                `json:"client_id"`
	Options     *AuthGetRequestOptions `json:"options"`
	Secret      *string                `json:"secret"`
}
