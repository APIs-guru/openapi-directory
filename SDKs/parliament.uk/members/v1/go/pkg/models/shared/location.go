package shared

type Location struct {
	ChildContexts     []LocationContext `json:"childContexts,omitempty"`
	Context           *LocationContext  `json:"context,omitempty"`
	ParentContext     *LocationContext  `json:"parentContext,omitempty"`
	StateOfTheParties []PartySeatCount  `json:"stateOfTheParties,omitempty"`
}
