package shared

// PublicIdentifier
// A public identifier for this customer.
type PublicIdentifier struct {
	ID     string `json:"id"`
	Scheme string `json:"scheme"`
}
