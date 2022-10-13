package shared

type PlanResourceUpdateBody struct {
	Identity   *PlanResourceIdentity   `json:"identity"`
	Properties *PlanResourceProperties `json:"properties"`
}
