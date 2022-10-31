package shared



type UpdateInvoiceResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Invoice *Invoice `json:"invoice,omitempty"`
    
}

