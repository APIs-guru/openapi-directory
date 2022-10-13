package shared

type CreatePaymentResponse struct {
	Errors  []Error  `json:"errors"`
	Payment *Payment `json:"payment"`
}
