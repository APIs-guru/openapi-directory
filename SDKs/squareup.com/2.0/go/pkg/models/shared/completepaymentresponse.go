package shared

type CompletePaymentResponse struct {
	Errors  []Error  `json:"errors"`
	Payment *Payment `json:"payment"`
}
