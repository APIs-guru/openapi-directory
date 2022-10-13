package shared

type AccountsGetRequest struct {
	AccessToken string                     `json:"access_token"`
	ClientID    *string                    `json:"client_id"`
	Options     *AccountsGetRequestOptions `json:"options"`
	Secret      *string                    `json:"secret"`
}
