package shared

type CreateTerminalRefundResponse struct {
	Errors []Error         `json:"errors"`
	Refund *TerminalRefund `json:"refund"`
}
