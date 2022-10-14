package shared

type PoolResult struct {
	DomainUserCredentials *DomainUserCredentials    `json:"domainUserCredentials,omitempty"`
	HotPoolSettings       *HotPoolSettings          `json:"hotPoolSettings,omitempty"`
	PoolGroupName         string                    `json:"poolGroupName"`
	ProvisioningStatus    *ProvisioningStatusResult `json:"provisioningStatus,omitempty"`
	Tags                  map[string]string         `json:"tags,omitempty"`
	UserGroupName         *string                   `json:"userGroupName,omitempty"`
	VMSpecs               VMSpecs                   `json:"vmSpecs"`
}
