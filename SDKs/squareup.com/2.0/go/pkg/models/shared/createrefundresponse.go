package shared



type CreateRefundResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *Refund `json:"refund,omitempty"`
    
}

