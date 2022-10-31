package shared

type CreateTerminalCheckoutResponse struct {
	Checkout *TerminalCheckout `json:"checkout,omitempty"`
	Errors   []Error           `json:"errors,omitempty"`
}
