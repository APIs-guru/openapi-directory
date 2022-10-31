package shared



type UpdateCustomerResponse struct {
    Customer *Customer `json:"customer,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

