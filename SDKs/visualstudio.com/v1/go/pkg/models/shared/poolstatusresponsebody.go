package shared

type PoolStatusResponseBody struct {
	AllWithLatestVersion                 *bool   `json:"allWithLatestVersion,omitempty"`
	IsEnvironmentPool                    *bool   `json:"isEnvironmentPool,omitempty"`
	Location                             *string `json:"location,omitempty"`
	PoolCode                             *string `json:"poolCode,omitempty"`
	ReadyUnassignedCount                 *int32  `json:"readyUnassignedCount,omitempty"`
	ReadyUnassignedLatestVersionCount    *int32  `json:"readyUnassignedLatestVersionCount,omitempty"`
	ReadyUnassignedNotLatestVersionCount *int32  `json:"readyUnassignedNotLatestVersionCount,omitempty"`
	ResourceType                         *string `json:"resourceType,omitempty"`
	Sku                                  *string `json:"sku,omitempty"`
}
