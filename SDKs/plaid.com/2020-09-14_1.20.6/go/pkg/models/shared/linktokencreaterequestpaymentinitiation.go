package shared

// LinkTokenCreateRequestPaymentInitiation
// Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array.
type LinkTokenCreateRequestPaymentInitiation struct {
	PaymentID string `json:"payment_id"`
}
