package shared

type VirtualTariffTypeEnum string

const (
	VirtualTariffTypeEnumBattery VirtualTariffTypeEnum = "Battery"
	VirtualTariffTypeEnumSolar   VirtualTariffTypeEnum = "Solar"
	VirtualTariffTypeEnumNormal  VirtualTariffTypeEnum = "Normal"
)

type VirtualTariff struct {
	Factor *float64               `json:"Factor"`
	ID     *string                `json:"Id"`
	Name   *string                `json:"Name"`
	Type   *VirtualTariffTypeEnum `json:"Type"`
	Unit   *string                `json:"Unit"`
	Value  *float64               `json:"Value"`
}
