package shared

type MeasurementUnit struct {
	AreaUnit    *string                `json:"area_unit"`
	CustomUnit  *MeasurementUnitCustom `json:"custom_unit"`
	GenericUnit *string                `json:"generic_unit"`
	LengthUnit  *string                `json:"length_unit"`
	TimeUnit    *string                `json:"time_unit"`
	Type        *string                `json:"type"`
	VolumeUnit  *string                `json:"volume_unit"`
	WeightUnit  *string                `json:"weight_unit"`
}
