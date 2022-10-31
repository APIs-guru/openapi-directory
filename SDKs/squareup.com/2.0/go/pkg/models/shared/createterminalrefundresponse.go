package shared



type CreateTerminalRefundResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *TerminalRefund `json:"refund,omitempty"`
    
}

