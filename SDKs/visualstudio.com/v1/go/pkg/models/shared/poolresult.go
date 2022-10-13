package shared

type PoolResult struct {
	DomainUserCredentials *DomainUserCredentials    `json:"domainUserCredentials"`
	HotPoolSettings       *HotPoolSettings          `json:"hotPoolSettings"`
	PoolGroupName         string                    `json:"poolGroupName"`
	ProvisioningStatus    *ProvisioningStatusResult `json:"provisioningStatus"`
	Tags                  map[string]string         `json:"tags"`
	UserGroupName         *string                   `json:"userGroupName"`
	VMSpecs               VMSpecs                   `json:"vmSpecs"`
}
