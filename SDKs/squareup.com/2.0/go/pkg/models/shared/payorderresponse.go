package shared



type PayOrderResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

