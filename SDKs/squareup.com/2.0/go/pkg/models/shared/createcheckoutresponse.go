package shared

type CreateCheckoutResponse struct {
	Checkout *Checkout `json:"checkout"`
	Errors   []Error   `json:"errors"`
}
