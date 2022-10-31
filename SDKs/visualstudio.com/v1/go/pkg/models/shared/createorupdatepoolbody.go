package shared

type CreateOrUpdatePoolBody struct {
	DomainUserCredentials *DomainUserCredentials `json:"domainUserCredentials,omitempty"`
	HotPoolSettings       *HotPoolSettings       `json:"hotPoolSettings,omitempty"`
	PoolGroupName         string                 `json:"poolGroupName"`
	Tags                  map[string]string      `json:"tags,omitempty"`
	UserGroupName         *string                `json:"userGroupName,omitempty"`
	VMSpecs               VMSpecs                `json:"vmSpecs"`
}
