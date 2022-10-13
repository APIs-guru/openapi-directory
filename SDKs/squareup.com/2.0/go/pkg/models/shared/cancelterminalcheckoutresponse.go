package shared

type CancelTerminalCheckoutResponse struct {
	Checkout *TerminalCheckout `json:"checkout"`
	Errors   []Error           `json:"errors"`
}
