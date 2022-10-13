package shared

type ListPaymentRefundsResponse struct {
	Cursor  *string         `json:"cursor"`
	Errors  []Error         `json:"errors"`
	Refunds []PaymentRefund `json:"refunds"`
}
