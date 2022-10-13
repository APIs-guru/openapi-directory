package shared

type FundingAccountResponse struct {
	AccountName      *string  `json:"accountName"`
	AccountNumber    *string  `json:"accountNumber"`
	Country          *string  `json:"country"`
	Currency         *string  `json:"currency"`
	ID               *string  `json:"id"`
	Name             *string  `json:"name"`
	PayorID          *string  `json:"payorId"`
	RoutingNumber    *string  `json:"routingNumber"`
	SourceAccountIds []string `json:"sourceAccountIds"`
	Type             *string  `json:"type"`
}
