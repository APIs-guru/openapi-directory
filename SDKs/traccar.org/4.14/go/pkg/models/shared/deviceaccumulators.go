package shared

type DeviceAccumulators struct {
	DeviceID      *int64   `json:"deviceId"`
	Hours         *float64 `json:"hours"`
	TotalDistance *float64 `json:"totalDistance"`
}
