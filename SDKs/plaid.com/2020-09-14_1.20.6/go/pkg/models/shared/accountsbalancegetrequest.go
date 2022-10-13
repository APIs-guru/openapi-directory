package shared

type AccountsBalanceGetRequest struct {
	AccessToken string                            `json:"access_token"`
	ClientID    *string                           `json:"client_id"`
	Options     *AccountsBalanceGetRequestOptions `json:"options"`
	Secret      *string                           `json:"secret"`
}
