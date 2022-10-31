package shared



type GetTerminalCheckoutResponse struct {
    Checkout *TerminalCheckout `json:"checkout,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

