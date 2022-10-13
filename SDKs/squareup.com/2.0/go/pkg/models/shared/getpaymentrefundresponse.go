package shared

type GetPaymentRefundResponse struct {
	Errors []Error        `json:"errors"`
	Refund *PaymentRefund `json:"refund"`
}
