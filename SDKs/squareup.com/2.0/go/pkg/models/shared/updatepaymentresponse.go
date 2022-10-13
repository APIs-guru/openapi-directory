package shared

type UpdatePaymentResponse struct {
	Errors  []Error  `json:"errors"`
	Payment *Payment `json:"payment"`
}
