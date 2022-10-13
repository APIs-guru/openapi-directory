package shared

type PlanResource struct {
	ID                *string                 `json:"id"`
	Identity          *PlanResourceIdentity   `json:"identity"`
	Location          *string                 `json:"location"`
	Name              *string                 `json:"name"`
	Properties        *PlanResourceProperties `json:"properties"`
	ProvisioningState *string                 `json:"provisioningState"`
	Tags              map[string]string       `json:"tags"`
	Type              *string                 `json:"type"`
}
