package shared



type DeviceAccumulators struct {
    DeviceID *int64 `json:"deviceId,omitempty"`
    Hours *float64 `json:"hours,omitempty"`
    TotalDistance *float64 `json:"totalDistance,omitempty"`
    
}

