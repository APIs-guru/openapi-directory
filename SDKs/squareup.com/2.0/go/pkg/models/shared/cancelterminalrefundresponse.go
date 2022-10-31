package shared



type CancelTerminalRefundResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *TerminalRefund `json:"refund,omitempty"`
    
}

