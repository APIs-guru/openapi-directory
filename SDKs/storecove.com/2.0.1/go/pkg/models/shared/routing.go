package shared

type Routing struct {
	EIdentifiers []RoutingIdentifier `json:"eIdentifiers,omitempty"`
	Emails       []string            `json:"emails,omitempty"`
}
