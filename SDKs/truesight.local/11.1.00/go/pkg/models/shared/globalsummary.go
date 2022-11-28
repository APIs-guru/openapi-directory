package shared

type GlobalSummary struct {
	Co2Emission               *float64
	Co2EmissionUnit           *string
	Editable                  *bool
	EnergyCost                *float64
	EnergyCostUnit            *string
	GroupNameFilter           *string
	HeatingMargin             *float64
	HeatingMarginCoverage     *float64
	HeatingMarginDeviceName   *string
	HeatingMarginDeviceURL    *string
	HeatingMarginUnit         *string
	ID                        *string
	TotalPowerConsumption     *float64
	TotalPowerConsumptionUnit *string
	UpdateTimestamp           *int64
}
