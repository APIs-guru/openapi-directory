package shared



type CancelTerminalCheckoutResponse struct {
    Checkout *TerminalCheckout `json:"checkout,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

