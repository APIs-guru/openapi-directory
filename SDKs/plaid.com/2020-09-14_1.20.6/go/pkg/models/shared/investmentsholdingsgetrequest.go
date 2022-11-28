package shared

// InvestmentsHoldingsGetRequest
// InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
type InvestmentsHoldingsGetRequest struct {
	AccessToken string                               `json:"access_token"`
	ClientID    *string                              `json:"client_id,omitempty"`
	Options     *InvestmentHoldingsGetRequestOptions `json:"options,omitempty"`
	Secret      *string                              `json:"secret,omitempty"`
}
