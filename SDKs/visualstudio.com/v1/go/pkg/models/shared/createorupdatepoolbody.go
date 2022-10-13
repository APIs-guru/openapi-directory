package shared

type CreateOrUpdatePoolBody struct {
	DomainUserCredentials *DomainUserCredentials `json:"domainUserCredentials"`
	HotPoolSettings       *HotPoolSettings       `json:"hotPoolSettings"`
	PoolGroupName         string                 `json:"poolGroupName"`
	Tags                  map[string]string      `json:"tags"`
	UserGroupName         *string                `json:"userGroupName"`
	VMSpecs               VMSpecs                `json:"vmSpecs"`
}
