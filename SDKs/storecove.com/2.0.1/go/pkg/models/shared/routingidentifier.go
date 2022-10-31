package shared

type RoutingIdentifier struct {
	ID     *string `json:"id,omitempty"`
	Scheme *string `json:"scheme,omitempty"`
}
