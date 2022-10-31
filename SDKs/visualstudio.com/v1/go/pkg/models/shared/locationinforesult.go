package shared



type LocationInfoResult struct {
    DefaultAutoSuspendDelayMinutes []int32 `json:"defaultAutoSuspendDelayMinutes,omitempty"`
    Skus []SkuInfoResult `json:"skus,omitempty"`
    
}

