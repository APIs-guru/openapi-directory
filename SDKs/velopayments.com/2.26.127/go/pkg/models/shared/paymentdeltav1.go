package shared

type PaymentDeltaV1 struct {
	PaymentAmount   *int64  `json:"paymentAmount"`
	PaymentCurrency *string `json:"paymentCurrency"`
	PaymentID       string  `json:"paymentId"`
	PayorPaymentID  *string `json:"payorPaymentId"`
	PayoutID        string  `json:"payoutId"`
	SourceAmount    *int64  `json:"sourceAmount"`
	SourceCurrency  *string `json:"sourceCurrency"`
	Status          *string `json:"status"`
}
