package shared



type CancelInvoiceResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Invoice *Invoice `json:"invoice,omitempty"`
    
}

