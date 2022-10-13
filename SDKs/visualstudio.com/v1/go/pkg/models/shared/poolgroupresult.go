package shared

type PoolGroupResult struct {
	DisplayName *string           `json:"displayName"`
	Region      *int32            `json:"region"`
	Tags        map[string]string `json:"tags"`
}
