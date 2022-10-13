package shared

type ReportSummary struct {
	AverageSpeed *float64 `json:"averageSpeed"`
	DeviceID     *int64   `json:"deviceId"`
	DeviceName   *string  `json:"deviceName"`
	Distance     *float64 `json:"distance"`
	EngineHours  *int64   `json:"engineHours"`
	MaxSpeed     *float64 `json:"maxSpeed"`
	SpentFuel    *float64 `json:"spentFuel"`
}
