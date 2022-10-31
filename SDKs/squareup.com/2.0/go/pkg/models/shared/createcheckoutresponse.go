package shared

type CreateCheckoutResponse struct {
	Checkout *Checkout `json:"checkout,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
