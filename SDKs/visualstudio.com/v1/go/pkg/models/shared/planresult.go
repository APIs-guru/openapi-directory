package shared

type PlanResult struct {
	ID            *string `json:"id"`
	Location      *int32  `json:"location"`
	Name          *string `json:"name"`
	ResourceGroup *string `json:"resourceGroup"`
	Subscription  *string `json:"subscription"`
}
