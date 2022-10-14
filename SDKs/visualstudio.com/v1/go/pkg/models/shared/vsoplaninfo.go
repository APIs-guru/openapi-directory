package shared

type VsoPlanInfo struct {
	Location          *int32  `json:"location,omitempty"`
	Name              *string `json:"name,omitempty"`
	ProviderNamespace *string `json:"providerNamespace,omitempty"`
	ResourceGroup     *string `json:"resourceGroup,omitempty"`
	ResourceID        *string `json:"resourceId,omitempty"`
	Subscription      *string `json:"subscription,omitempty"`
}
