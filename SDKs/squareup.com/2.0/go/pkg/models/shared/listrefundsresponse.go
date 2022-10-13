package shared

type ListRefundsResponse struct {
	Cursor  *string  `json:"cursor"`
	Errors  []Error  `json:"errors"`
	Refunds []Refund `json:"refunds"`
}
