package shared



type RetrieveOrderResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

