package shared

type CancelPaymentResponse struct {
	Errors  []Error  `json:"errors"`
	Payment *Payment `json:"payment"`
}
