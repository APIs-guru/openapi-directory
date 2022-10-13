package shared

type LocationInfoResult struct {
	DefaultAutoSuspendDelayMinutes []int32         `json:"defaultAutoSuspendDelayMinutes"`
	Skus                           []SkuInfoResult `json:"skus"`
}
