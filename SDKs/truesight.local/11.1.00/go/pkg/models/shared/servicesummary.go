package shared

type ServiceSummary struct {
	CostUnit                  *string
	DeviceSummaries           []DeviceSummary
	EmittedCo2Unit            *string
	EnergyConsumptionUnit     *string
	HeatingMargin             *float64
	HeatingMarginCoverage     *float64
	HeatingMarginDeviceName   *string
	HeatingMarginDeviceURL    *string
	HeatingMarginUnit         *string
	HistoryParentIDKey        *string
	ID                        *string
	Name                      *string
	NumberOfDevices           *int32
	OneDayConfidence          *float64
	OneDayCost                *float64
	OneDayEmittedCo2          *float64
	OneDayEnergyConsumption   *float64
	OneMonthConfidence        *float64
	OneMonthCost              *float64
	OneMonthEmittedCo2        *float64
	OneMonthEnergyConsumption *float64
	OneYearConfidence         *float64
	OneYearCost               *float64
	OneYearEmittedCo2         *float64
	OneYearEnergyConsumption  *float64
	ProviderID                *string
	TotalPowerConsumption     *float64
	TotalPowerConsumptionUnit *string
	UpdateTimestamp           *int64
	URL                       *string
}
