package shared



type InvoiceSort struct {
    Field string `json:"field"`
    Order *string `json:"order,omitempty"`
    
}

