package shared

type Routing struct {
	EIdentifiers []RoutingIdentifier `json:"eIdentifiers"`
	Emails       []string            `json:"emails"`
}
