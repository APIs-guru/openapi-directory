package shared

type VirtualTariffTypeEnum string

const (
	VirtualTariffTypeEnumBattery VirtualTariffTypeEnum = "Battery"
	VirtualTariffTypeEnumSolar   VirtualTariffTypeEnum = "Solar"
	VirtualTariffTypeEnumNormal  VirtualTariffTypeEnum = "Normal"
)

// VirtualTariff
// Container class for the virtual tariffs
type VirtualTariff struct {
	Factor *float64               `json:"Factor,omitempty"`
	ID     *string                `json:"Id,omitempty"`
	Name   *string                `json:"Name,omitempty"`
	Type   *VirtualTariffTypeEnum `json:"Type,omitempty"`
	Unit   *string                `json:"Unit,omitempty"`
	Value  *float64               `json:"Value,omitempty"`
}
