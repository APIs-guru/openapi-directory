package shared

type GetTerminalCheckoutResponse struct {
	Checkout *TerminalCheckout `json:"checkout"`
	Errors   []Error           `json:"errors"`
}
