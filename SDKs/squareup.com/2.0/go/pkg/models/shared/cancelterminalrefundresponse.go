package shared

type CancelTerminalRefundResponse struct {
	Errors []Error         `json:"errors"`
	Refund *TerminalRefund `json:"refund"`
}
