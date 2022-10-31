package shared



type GetInvoiceResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Invoice *Invoice `json:"invoice,omitempty"`
    
}

