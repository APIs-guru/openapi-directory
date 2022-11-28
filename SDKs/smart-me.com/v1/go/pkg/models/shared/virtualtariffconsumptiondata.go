package shared

type VirtualTariffConsumptionDataTariffTypeEnum string

const (
	VirtualTariffConsumptionDataTariffTypeEnumBattery VirtualTariffConsumptionDataTariffTypeEnum = "Battery"
	VirtualTariffConsumptionDataTariffTypeEnumSolar   VirtualTariffConsumptionDataTariffTypeEnum = "Solar"
	VirtualTariffConsumptionDataTariffTypeEnumNormal  VirtualTariffConsumptionDataTariffTypeEnum = "Normal"
)

// VirtualTariffConsumptionData
// Container class for the virtual tariff consumption
type VirtualTariffConsumptionData struct {
	Consumption *float64                                    `json:"Consumption,omitempty"`
	Currency    *string                                     `json:"Currency,omitempty"`
	Name        *string                                     `json:"Name,omitempty"`
	Price       *float64                                    `json:"Price,omitempty"`
	TariffType  *VirtualTariffConsumptionDataTariffTypeEnum `json:"TariffType,omitempty"`
}
