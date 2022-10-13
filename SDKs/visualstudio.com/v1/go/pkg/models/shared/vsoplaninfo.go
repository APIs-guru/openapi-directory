package shared

type VsoPlanInfo struct {
	Location          *int32  `json:"location"`
	Name              *string `json:"name"`
	ProviderNamespace *string `json:"providerNamespace"`
	ResourceGroup     *string `json:"resourceGroup"`
	ResourceID        *string `json:"resourceId"`
	Subscription      *string `json:"subscription"`
}
