package shared



type EnvironmentUsage struct {
    EndState *int32 `json:"endState,omitempty"`
    ID *string `json:"id,omitempty"`
    ResourceUsage *ResourceUsageDetail `json:"resourceUsage,omitempty"`
    Sku *Sku `json:"sku,omitempty"`
    Usage map[string]float64 `json:"usage,omitempty"`
    
}

