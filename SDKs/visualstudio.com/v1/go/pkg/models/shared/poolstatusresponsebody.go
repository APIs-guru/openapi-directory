package shared

type PoolStatusResponseBody struct {
	AllWithLatestVersion                 *bool   `json:"allWithLatestVersion"`
	IsEnvironmentPool                    *bool   `json:"isEnvironmentPool"`
	Location                             *string `json:"location"`
	PoolCode                             *string `json:"poolCode"`
	ReadyUnassignedCount                 *int32  `json:"readyUnassignedCount"`
	ReadyUnassignedLatestVersionCount    *int32  `json:"readyUnassignedLatestVersionCount"`
	ReadyUnassignedNotLatestVersionCount *int32  `json:"readyUnassignedNotLatestVersionCount"`
	ResourceType                         *string `json:"resourceType"`
	Sku                                  *string `json:"sku"`
}
