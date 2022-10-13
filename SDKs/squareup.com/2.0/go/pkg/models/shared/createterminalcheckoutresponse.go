package shared

type CreateTerminalCheckoutResponse struct {
	Checkout *TerminalCheckout `json:"checkout"`
	Errors   []Error           `json:"errors"`
}
