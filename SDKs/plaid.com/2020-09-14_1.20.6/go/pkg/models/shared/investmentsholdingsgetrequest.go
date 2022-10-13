package shared

type InvestmentsHoldingsGetRequest struct {
	AccessToken string                               `json:"access_token"`
	ClientID    *string                              `json:"client_id"`
	Options     *InvestmentHoldingsGetRequestOptions `json:"options"`
	Secret      *string                              `json:"secret"`
}
