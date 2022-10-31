package shared



type GetTerminalRefundResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *TerminalRefund `json:"refund,omitempty"`
    
}

