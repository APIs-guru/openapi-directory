package shared



type ComputeUsageDetail struct {
    Sku *string `json:"sku,omitempty"`
    Usage *float64 `json:"usage,omitempty"`
    
}

