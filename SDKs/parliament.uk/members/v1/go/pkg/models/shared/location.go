package shared

type Location struct {
	ChildContexts     []LocationContext `json:"childContexts"`
	Context           *LocationContext  `json:"context"`
	ParentContext     *LocationContext  `json:"parentContext"`
	StateOfTheParties []PartySeatCount  `json:"stateOfTheParties"`
}
