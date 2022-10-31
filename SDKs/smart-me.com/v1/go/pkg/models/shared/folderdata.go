package shared



type FolderData struct {
    ElectricityCounterValue *float64 `json:"ElectricityCounterValue,omitempty"`
    ElectricityPower *float64 `json:"ElectricityPower,omitempty"`
    GasCounterValue *float64 `json:"GasCounterValue,omitempty"`
    GasFlowRate *float64 `json:"GasFlowRate,omitempty"`
    HeatCounterValue *float64 `json:"HeatCounterValue,omitempty"`
    HeatPower *float64 `json:"HeatPower,omitempty"`
    WaterCounterValue *float64 `json:"WaterCounterValue,omitempty"`
    WaterFlowRate *float64 `json:"WaterFlowRate,omitempty"`
    
}

