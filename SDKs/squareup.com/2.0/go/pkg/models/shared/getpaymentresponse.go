package shared

type GetPaymentResponse struct {
	Errors  []Error  `json:"errors"`
	Payment *Payment `json:"payment"`
}
