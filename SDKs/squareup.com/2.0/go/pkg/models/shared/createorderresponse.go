package shared



type CreateOrderResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

