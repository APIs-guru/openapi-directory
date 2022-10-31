package shared



type ReportSummary struct {
    AverageSpeed *float64 `json:"averageSpeed,omitempty"`
    DeviceID *int64 `json:"deviceId,omitempty"`
    DeviceName *string `json:"deviceName,omitempty"`
    Distance *float64 `json:"distance,omitempty"`
    EngineHours *int64 `json:"engineHours,omitempty"`
    MaxSpeed *float64 `json:"maxSpeed,omitempty"`
    SpentFuel *float64 `json:"spentFuel,omitempty"`
    
}

