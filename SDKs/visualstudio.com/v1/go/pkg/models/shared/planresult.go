package shared

type PlanResult struct {
	ID            *string `json:"id,omitempty"`
	Location      *int32  `json:"location,omitempty"`
	Name          *string `json:"name,omitempty"`
	ResourceGroup *string `json:"resourceGroup,omitempty"`
	Subscription  *string `json:"subscription,omitempty"`
}
