package shared

type FolderData struct {
	ElectricityCounterValue *float64 `json:"ElectricityCounterValue"`
	ElectricityPower        *float64 `json:"ElectricityPower"`
	GasCounterValue         *float64 `json:"GasCounterValue"`
	GasFlowRate             *float64 `json:"GasFlowRate"`
	HeatCounterValue        *float64 `json:"HeatCounterValue"`
	HeatPower               *float64 `json:"HeatPower"`
	WaterCounterValue       *float64 `json:"WaterCounterValue"`
	WaterFlowRate           *float64 `json:"WaterFlowRate"`
}
