package shared

type FundingAccountResponse2 struct {
	AccountName   *string `json:"accountName"`
	AccountNumber *string `json:"accountNumber"`
	Archived      *bool   `json:"archived"`
	Country       *string `json:"country"`
	Currency      *string `json:"currency"`
	ID            *string `json:"id"`
	Name          *string `json:"name"`
	PayorID       *string `json:"payorId"`
	RoutingNumber *string `json:"routingNumber"`
	Type          *string `json:"type"`
}
