package shared

type PlanResourceUpdateBody struct {
	Identity   *PlanResourceIdentity   `json:"identity,omitempty"`
	Properties *PlanResourceProperties `json:"properties,omitempty"`
}
