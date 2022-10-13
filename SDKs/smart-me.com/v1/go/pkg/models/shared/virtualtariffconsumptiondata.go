package shared

type VirtualTariffConsumptionDataTariffTypeEnum string

const (
	VirtualTariffConsumptionDataTariffTypeEnumBattery VirtualTariffConsumptionDataTariffTypeEnum = "Battery"
	VirtualTariffConsumptionDataTariffTypeEnumSolar   VirtualTariffConsumptionDataTariffTypeEnum = "Solar"
	VirtualTariffConsumptionDataTariffTypeEnumNormal  VirtualTariffConsumptionDataTariffTypeEnum = "Normal"
)

type VirtualTariffConsumptionData struct {
	Consumption *float64                                    `json:"Consumption"`
	Currency    *string                                     `json:"Currency"`
	Name        *string                                     `json:"Name"`
	Price       *float64                                    `json:"Price"`
	TariffType  *VirtualTariffConsumptionDataTariffTypeEnum `json:"TariffType"`
}
