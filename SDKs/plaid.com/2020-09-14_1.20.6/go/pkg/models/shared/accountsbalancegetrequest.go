package shared

type AccountsBalanceGetRequest struct {
	AccessToken string                            `json:"access_token"`
	ClientID    *string                           `json:"client_id,omitempty"`
	Options     *AccountsBalanceGetRequestOptions `json:"options,omitempty"`
	Secret      *string                           `json:"secret,omitempty"`
}
