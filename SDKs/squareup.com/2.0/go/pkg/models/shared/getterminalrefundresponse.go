package shared

type GetTerminalRefundResponse struct {
	Errors []Error         `json:"errors"`
	Refund *TerminalRefund `json:"refund"`
}
