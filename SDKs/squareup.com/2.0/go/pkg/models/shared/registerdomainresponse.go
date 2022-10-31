package shared



type RegisterDomainResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

