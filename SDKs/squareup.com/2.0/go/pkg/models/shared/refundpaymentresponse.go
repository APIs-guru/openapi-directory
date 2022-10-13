package shared

type RefundPaymentResponse struct {
	Errors []Error        `json:"errors"`
	Refund *PaymentRefund `json:"refund"`
}
