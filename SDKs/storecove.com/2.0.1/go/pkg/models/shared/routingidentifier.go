package shared

// RoutingIdentifier
// An electronic routing identifier.
type RoutingIdentifier struct {
	ID     *string `json:"id,omitempty"`
	Scheme *string `json:"scheme,omitempty"`
}
